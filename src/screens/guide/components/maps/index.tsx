import {
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from '@radix-ui/themes';
import styles from './index.module.scss';
import guideMapSvg from './assets/guide-map.svg';
import pinSvg from './assets/pin.svg';
import restaurantSvg from './assets/restaurant.svg';
import shoppingBagSvg from './assets/shopping-bag.svg';
import routeSvg from './assets/route.svg';

type FeatureType = 'restaurant' | 'shop' | 'place' | 'route';

type FeatureItem = {
  type: FeatureType;
  icon: ImageMetadata;
  alt: string;
  text: string;
};

const data: FeatureItem[] = [
  {
    type: 'restaurant',
    icon: restaurantSvg,
    alt: 'Иконка ресторана',
    text: 'Заведений',
  },
  {
    type: 'shop',
    icon: shoppingBagSvg,
    alt: 'Иконка магазина',
    text: 'Магазинов',
  },
  {
    type: 'place',
    icon: pinSvg,
    alt: 'Иконка места',
    text: 'Мест',
  },
  {
    type: 'route',
    icon: routeSvg,
    alt: 'Иконка маршрута',
    text: 'Маршрутов',
  },
];

type Props = {
  description: string;
  restarauntAmount: number;
  shopAmount: number;
  placeAmount: number;
  routeAmount: number;
};

export const Maps = ({
  description,
  restarauntAmount,
  shopAmount,
  placeAmount,
  routeAmount,
}: Props) => {
  const amountMap: Record<FeatureType, number> = {
    restaurant: restarauntAmount,
    shop: shopAmount,
    place: placeAmount,
    route: routeAmount,
  };

  return (
    <Section>
      <Container>
        <div className={styles.root}>
          <div className={styles.infoContent}>
            <Heading as='h2' size='9' weight='bold'>
              Карты
            </Heading>
            <Text size='5' weight='regular'>
              {description}
            </Text>
            <Grid columns='repeat(2, 1fr)' gap='32px'>
              {data.map((item) => (
                <Flex key={item.type} direction='row' gap='16px'>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.icon}
                      {...item.icon}
                      alt={item.alt}
                    />
                  </div>
                  <Flex direction='column' gap='8px'>
                    <Heading size='8' weight='bold'>
                      {amountMap[item.type]}+
                    </Heading>
                    <Text size='5' weight='regular'>
                      {item.text}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </div>
          <img
            className={styles.mapImage}
            {...guideMapSvg}
            alt='Карта с локациями'
          />
        </div>
      </Container>
    </Section>
  );
};

export default Maps;
