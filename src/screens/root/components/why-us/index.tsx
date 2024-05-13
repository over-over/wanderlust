import {
  Section,
  Container,
  Grid,
  Heading,
  Text,
  Flex,
  Card,
} from '@radix-ui/themes';
import styles from './index.module.scss';
import cornerSvg from './assets/corner.svg';

type FeatureData = {
  id: number;
  title: string;
  description: string;
};

const features: FeatureData[] = [
  {
    id: 1,
    title: 'Эксклюзивные маршруты',
    description:
      'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 2,
    title: 'Эксклюзивные маршруты',
    description:
      'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 3,
    title: 'Эксклюзивные маршруты',
    description:
      'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 4,
    title: 'Эксклюзивные маршруты',
    description:
      'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 5,
    title: 'Эксклюзивные маршруты',
    description:
      'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 6,
    title: 'Эксклюзивные маршруты',
    description:
      'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
];

export const WhyUs = () => {
  return (
    <Section className={styles.root}>
      <Container>
        <Flex direction='column' gap='24px' mb='64px'>
          <Heading size='9' weight='bold'>
            Почему мы?
          </Heading>
          <Text size='6' weight='medium'>
            Продающий текст почему мы
          </Text>
        </Flex>
        <Grid rows='repeat(2, 1fr)' columns='repeat(3, 1fr)' gap='24px'>
          {features.map((item) => (
            <Card key={item.id} variant='classic' className={styles.feature}>
              <img className={styles.corner} {...cornerSvg} alt='Силуэт' />
              <Heading className={styles.counter} size='8' weight='bold'>
                {item.id}
              </Heading>
              <Heading size='6' weight='bold' mb='8px'>
                {item.title}
              </Heading>
              <Text size='4' weight='regular'>
                {item.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhyUs;
