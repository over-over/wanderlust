import { Button, Card, Flex, Inset, Text } from '@radix-ui/themes';
import styles from './index.module.scss';

type Props = {
  image: {
    avif: ImageMetadata;
    webp: ImageMetadata;
    jpeg: ImageMetadata;
  };
  title: string;
  description: string;
  price: number;
  buyLink: string;
  detailsLink: string;
};

export const GuideCardPrice = ({
  image,
  title,
  description,
  price,
  buyLink,
  detailsLink,
}: Props) => {
  return (
    <Card variant='classic'>
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
      <Flex direction='column' gap='16px' minHeight='246px'>
        <Text size='6' weight='medium' highContrast>
          {title}
        </Text>
        <Text size='3' weight='regular' color='gray'>
          {description}
        </Text>
        <Text className={styles.price} size='8' weight='bold'>
          {price} ₽
        </Text>

        <Flex direction='row' gap='16px'>
          <Button className={styles.button} asChild size='4' variant='solid'>
            <a href={buyLink}>Купить</a>
          </Button>
          <Button className={styles.button} asChild size='4' variant='ghost'>
            <a href={detailsLink}>Подробнее</a>
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
