import {
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from '@radix-ui/themes';
import styles from './index.module.scss';
import catImage from './assets/cat_inside.png';

type Feature = {
  title: string;
  info: string;
};

type Props = {
  description: string;
  features: Feature[];
};

export const WhatsInside = ({ description, features }: Props) => {
  return (
    <Section>
      <Container>
        <div className={styles.root}>
          <Heading as='h2' size='9' weight='bold'>
            Что внутри?
          </Heading>
          <img
            {...catImage}
            className={styles.cat}
            width={235}
            height={156}
            alt='Подглядывающий кот'
          />
          <div className={styles.separator} />

          <Flex direction='column' gap='24px'>
            <Text size='5' weight='regular'>
              {description}
            </Text>
            <Flex direction='row' gap='24px'>
              <div className={styles.preview} />
              <Grid
                className={styles.features}
                columns='repeat(2, 1fr)'
                gapX='24px'
                gapY='32px'
              >
                {features.map((item, index) => (
                  <Flex key={item.title} direction='column' gap='16px'>
                    <Heading as='h3' size='8'>
                      {index + 1}. {item.title}
                    </Heading>
                    <Text size='5' weight='regular'>
                      {item.info}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Flex>
          </Flex>
        </div>
      </Container>
    </Section>
  );
};

export default WhatsInside;
