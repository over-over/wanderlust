import { Card, Flex, Separator, Text } from '@radix-ui/themes';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import styles from './index.module.scss';

type Props = {
  question: string;
  answer: string;
};

export const Question = ({ question, answer }: Props) => {
  return (
    <Card className={styles.card}>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <Text size='5' weight='medium'>
            {question}
          </Text>
          <PlusIcon className={styles.plus} width={24} height={24} />
          <MinusIcon className={styles.minus} width={24} height={24} />
        </summary>
        <Flex direction='column' mt='16px' gap='16px'>
          <Separator orientation='horizontal' size='4' />
          <Text className={styles.answer} size='4' weight='regular'>
            {answer}
          </Text>
        </Flex>
      </details>
    </Card>
  );
};
