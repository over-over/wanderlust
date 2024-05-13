import {
  Section,
  Container,
  Heading,
  Text,
  Flex,
  Card,
  Avatar,
} from '@radix-ui/themes';
import styles from './index.module.scss';

type ReviewData = {
  id: number;
  name: string;
  initials: string;
  text: string;
};

const data: ReviewData[] = [
  {
    id: 1,
    name: 'Константин Запольский',
    initials: 'КЗ',
    text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 2,
    name: 'Константин Запольский',
    initials: 'КЗ',
    text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 3,
    name: 'Константин Запольский',
    initials: 'КЗ',
    text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 4,
    name: 'Константин Запольский',
    initials: 'КЗ',
    text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
  {
    id: 5,
    name: 'Константин Запольский',
    initials: 'КЗ',
    text: 'Наши гайды включают уникальные локации, которые вы не найдёте в обычных путеводителях',
  },
];

export const Reviews = () => {
  return (
    <Section className={styles.root}>
      <Container>
        <Flex direction='column' gap='24px' mb='64px'>
          <Heading size='9' weight='bold' align='center'>
            Отзывы на гайды
          </Heading>
          <Text size='6' weight='medium' align='center'>
            Вот такие вот отзывы мы получим
          </Text>
        </Flex>
      </Container>
      <div className={styles.list}>
        {data.map((item) => (
          <Card variant='classic' className={styles.review}>
            <Flex direction='column' gap='24px'>
              <Avatar
                size='7'
                variant='soft'
                fallback={item.initials}
                src='https://i.pravatar.cc/300'
              />
              <Text className={styles.text} size='4' weight='regular'>
                {item.text}
              </Text>
              <Text className={styles.text} size='4' weight='medium'>
                {item.name}
              </Text>
            </Flex>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Reviews;
