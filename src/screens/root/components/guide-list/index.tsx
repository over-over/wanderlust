import {
  Section,
  Container,
  Grid,
  Heading,
  Text,
  Flex,
  Button,
} from '@radix-ui/themes';
import { GuideCard } from 'shared/components';
import styles from './index.module.scss';
import { assets } from './assets';
import eyesImage from './assets/eyes.png';

export const GuideList = () => {
  return (
    <Section className={styles.root}>
      <Container>
        <div className={styles.content}>
          <Flex direction='column' gap='36px' mb='80px'>
            <Heading as='h2' size='9' weight='bold' align='center'>
              Популярные гайды
            </Heading>
            <Text size='6' weight='medium' align='center'>
              Ещё какой-то продающий текст
            </Text>
            <Grid
              columns='repeat(3, 25%)'
              gap='24px'
              width='100%'
              justify='center'
            >
              <GuideCard
                href={`${import.meta.env.BASE_URL}/guides/1`}
                image={{
                  jpeg: assets.jpg.armenia,
                  avif: assets.avif.armenia,
                  webp: assets.webp.armenia,
                }}
                title='Армения'
                description='Продающий текст про путешествие в Белград'
              />
              <GuideCard
                href={`${import.meta.env.BASE_URL}/guides/1`}
                image={{
                  jpeg: assets.jpg.armenia,
                  avif: assets.avif.armenia,
                  webp: assets.webp.armenia,
                }}
                title='Армения'
                description='Продающий текст про путешествие в Белград'
              />
              <GuideCard
                href={`${import.meta.env.BASE_URL}/guides/1`}
                image={{
                  jpeg: assets.jpg.armenia,
                  avif: assets.avif.armenia,
                  webp: assets.webp.armenia,
                }}
                title='Армения'
                description='Продающий текст про путешествие в Белград'
              />
            </Grid>
          </Flex>
          <Button asChild className={styles.button} size='4' variant='solid'>
            <a href={`${import.meta.env.BASE_URL}/guides`}>
              Посмотреть все гайды
              <img {...eyesImage} alt='👀' />
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default GuideList;
