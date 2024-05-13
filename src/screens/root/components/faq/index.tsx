import {
  Section,
  Container,
  Heading,
  Text,
  Flex,
  Grid,
} from '@radix-ui/themes';
import { Question } from 'shared/components';
import styles from './index.module.scss';

type QuestionData = {
  id: number;
  question: string;
  answer: string;
};

const data: QuestionData[] = [
  {
    id: 1,
    question: 'Как происходит оплата?',
    answer:
      'Чтобы узнать больше об оплате, свяжитесь со своим банком или нашей поддержкой. Обычно оплата проходит в течение 24 часов с момента покупки.',
  },
  {
    id: 2,
    question: 'Как происходит оплата?',
    answer:
      'Чтобы узнать больше об оплате, свяжитесь со своим банком или нашей поддержкой. Обычно оплата проходит в течение 24 часов с момента покупки.',
  },
  {
    id: 3,
    question: 'Как происходит оплата?',
    answer:
      'Чтобы узнать больше об оплате, свяжитесь со своим банком или нашей поддержкой. Обычно оплата проходит в течение 24 часов с момента покупки.',
  },
  {
    id: 4,
    question: 'Как происходит оплата?',
    answer:
      'Чтобы узнать больше об оплате, свяжитесь со своим банком или нашей поддержкой. Обычно оплата проходит в течение 24 часов с момента покупки.',
  },
  {
    id: 5,
    question: 'Как происходит оплата?',
    answer:
      'Чтобы узнать больше об оплате, свяжитесь со своим банком или нашей поддержкой. Обычно оплата проходит в течение 24 часов с момента покупки.',
  },
  {
    id: 6,
    question: 'Как происходит оплата?',
    answer:
      'Чтобы узнать больше об оплате, свяжитесь со своим банком или нашей поддержкой. Обычно оплата проходит в течение 24 часов с момента покупки.',
  },
];

export const Faq = () => {
  return (
    <Section className={styles.root}>
      <Container>
        <Flex direction='column' gap='24px' mb='80px'>
          <Heading size='9' weight='bold' align='center'>
            Популярные вопросы
          </Heading>
          <Text size='6' weight='medium' align='center'>
            Ответы на все ваши возможные вопросы, о которых вы могли
            постесняться спросить
          </Text>
        </Flex>
        <Grid columns='repeat(2, 1fr)' gap='24px' align='start'>
          {data.map((item) => (
            <Question
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Faq;
