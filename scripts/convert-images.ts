/* eslint-disable no-console */
import { promises, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

type ImageFilePath = {
  fullPath: string;
  fileName: string;
  fileNameWithExt: string;
};

const RELATIVE_PATH: string | undefined = process.argv[2];
const MAX_WIDTH: number | undefined = Number(process.argv[3]);
const DIRNAME = resolve();
const MAIN_INDEX = `import * as avif from './avif';
import * as jpg from './jpg';
import * as webp from './webp';
  
export const assets = {
  avif,
  jpg,
  webp,
};\n`;

const toCamelCase = (text: string) => {
  return text.replace(/[\W_\s]+[a-zA-Z0-9]/g, (word) => {
    return word.charAt(word.length - 1).toUpperCase();
  });
};

const convertImages = async () => {
  if (!RELATIVE_PATH) {
    throw new Error('Relative path is not specified');
  }

  console.log('\x1b[37;42;1m[STARTING]\x1b[0m 🚀');

  const dirPath = resolve(DIRNAME, RELATIVE_PATH);
  const files = await promises.readdir(dirPath, { withFileTypes: true });

  const imageFilePaths = files.reduce<ImageFilePath[]>((acc, file) => {
    if (file.isFile() && file.name.match(/.png$|.jpeg$|.jpg$/)) {
      acc.push({
        fullPath: resolve(dirPath, file.name),
        fileName: file.name.replace(/.png$|.jpeg$|.jpg$/, ''),
        fileNameWithExt: file.name,
      });
    }
    return acc;
  }, []);

  if (!imageFilePaths.length) {
    throw new Error('.png, .jpeg, .jpg files not found');
  }

  if (!existsSync(resolve(dirPath, './avif'))) {
    await promises.mkdir(resolve(dirPath, './avif'));
  }
  if (!existsSync(resolve(dirPath, './jpg'))) {
    await promises.mkdir(resolve(dirPath, './jpg'));
  }
  if (!existsSync(resolve(dirPath, './webp'))) {
    await promises.mkdir(resolve(dirPath, './webp'));
  }

  const imageAvifPromises = imageFilePaths.map(async (path) => {
    const imageWebp = await sharp(path.fullPath)
      .withMetadata()
      .webp({ quality: 75, lossless: false, effort: 2 })
      .resize(!Number.isNaN(MAX_WIDTH) ? MAX_WIDTH : undefined)
      .toBuffer();

    await promises.writeFile(
      resolve(dirPath, `./webp/${path.fileName}.webp`),
      imageWebp,
    );
  });
  const imageWebpPromises = imageFilePaths.map(async (path) => {
    const imageAvif = await sharp(path.fullPath)
      .withMetadata()
      .avif({ quality: 50, lossless: false, effort: 2 })
      .resize(!Number.isNaN(MAX_WIDTH) ? MAX_WIDTH : undefined)
      .toBuffer();

    await promises.writeFile(
      resolve(dirPath, `./avif/${path.fileName}.avif`),
      imageAvif,
    );
  });
  const imageJpgPromises = imageFilePaths.map(async (path) => {
    const imageJpg = await sharp(path.fullPath)
      .withMetadata()
      .jpeg({ quality: 85 })
      .resize(!Number.isNaN(MAX_WIDTH) ? MAX_WIDTH : undefined)
      .toBuffer();

    await promises.writeFile(
      resolve(dirPath, `./jpg/${path.fileName}.jpeg`),
      imageJpg,
    );
  });

  await Promise.all(imageJpgPromises);
  console.log('\x1b[37;42;1m[1 / 3]\x1b[0m .JPG DONE');
  await Promise.all(imageWebpPromises);
  console.log('\x1b[37;42;1m[2 / 3]\x1b[0m .WEBP DONE');
  await Promise.all(imageAvifPromises);
  console.log('\x1b[37;42;1m[3 / 3]\x1b[0m .AVIF DONE');

  let jpgIndexText = '';
  let webpIndexText = '';
  let avifIndexText = '';

  imageFilePaths.forEach((item, index) => {
    const importName = toCamelCase(item.fileName);
    jpgIndexText = `import ${importName} from './${item.fileName}.jpeg';\n${jpgIndexText}`;
    webpIndexText = `import ${importName} from './${item.fileName}.webp';\n${webpIndexText}`;
    avifIndexText = `import ${importName} from './${item.fileName}.avif';\n${avifIndexText}`;

    if (index === 0) {
      jpgIndexText += '\nexport {\n';
      webpIndexText += '\nexport {\n';
      avifIndexText += '\nexport {\n';
    }

    jpgIndexText += ` ${importName},\n`;
    webpIndexText += `  ${importName},\n`;
    avifIndexText += `  ${importName},\n`;

    if (index === imageFilePaths.length - 1) {
      jpgIndexText += '};\n';
      webpIndexText += '};\n';
      avifIndexText += '};\n';
    }
  });

  await promises.writeFile(resolve(dirPath, './jpg/index.ts'), jpgIndexText);
  await promises.writeFile(resolve(dirPath, './avif/index.ts'), avifIndexText);
  await promises.writeFile(resolve(dirPath, './webp/index.ts'), webpIndexText);
  await promises.writeFile(resolve(dirPath, './index.ts'), MAIN_INDEX);

  return true;
};

convertImages()
  .then(() => {
    console.log('\x1b[37;42;1m[SUCCESS]\x1b[0m ✨');
  })
  .catch((error) => {
    console.error('\x1b[37;41;1m[ERROR]\x1b[0m', error);
  });
