import { Card, Flex, Heading, Inset, Text } from '@radix-ui/themes';
import styles from './index.module.scss';

type Props = {
  href: string;
  image: {
    avif: ImageMetadata;
    webp: ImageMetadata;
    jpeg: ImageMetadata;
  };
  title: string;
  description: string;
};

export const GuideCard = ({ href, image, title, description }: Props) => {
  return (
    <Card variant='classic' asChild>
      <a href={href}>
        <Inset clip='padding-box' side='top' pb='0'>
          <picture className={styles.picture}>
            <source
              srcSet={image.avif.src}
              width={image.avif.width}
              height={image.avif.height}
              type='image/avif'
            />
            <source
              srcSet={image.webp.src}
              width={image.webp.width}
              height={image.webp.height}
              type='image/webp'
            />
            <img className={styles.image} {...image.jpeg} alt={title} />
          </picture>
        </Inset>
        <Flex direction='column' gap='16px' height='160px'>
          <Heading size='7' weight='bold' highContrast>
            {title}
          </Heading>
          <Text size='4' color='gray'>
            {description}
          </Text>
        </Flex>
      </a>
    </Card>
  );
};
