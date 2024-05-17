import {
  Section,
  Container,
  Button,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes';
import styles from './index.module.scss';

type Props = {
  title: string;
  description: string;
  image: {
    avif: ImageMetadata;
    webp: ImageMetadata;
    jpeg: ImageMetadata;
  };
};

export const GuideIntro = ({ title, description, image }: Props) => {
  return (
    <Section>
      <Container>
        <div className={styles.root}>
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
          <div className={styles.info}>
            <Heading as='h1' size='9' weight='bold'>
              {title}
            </Heading>
            <Text size='5' weight='regular'>
              {description}
            </Text>
            <Flex mt='auto' direction='row' gap='16px'>
              <Button className={styles.buy} size='4' variant='solid'>
                Купить
              </Button>
              {/* <Button size='4' variant='ghost'>
                Демо-режим
              </Button> */}
            </Flex>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GuideIntro;
