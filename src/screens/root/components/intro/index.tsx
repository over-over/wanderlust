import { ArrowRightIcon } from '@radix-ui/react-icons';
import {
  Button,
  Container,
  Heading,
  Section,
  Text,
  Theme,
} from '@radix-ui/themes';
import styles from './index.module.scss';

export const Intro = () => {
  return (
    <Theme
      asChild
      appearance='light'
      accentColor='teal'
      grayColor='slate'
      radius='large'
      scaling='100%'
      style={{ minHeight: 'auto' }}
    >
      <Section className={styles.root}>
        <Container>
          <div className={styles.content}>
            <Heading
              className={styles.title}
              as='h1'
              size='9'
              weight='bold'
              align='center'
            >
              Гайды!
            </Heading>
            <Text
              className={styles.description}
              size='6'
              weight='medium'
              align='center'
            >
              Делаем классные гайды о разных местах, городахи странах, а также
              штуках, в которых круто разбираемся
            </Text>
            <div className={styles.actions}>
              <Button
                asChild
                className={styles.action}
                variant='solid'
                size='4'
              >
                <a href={`${import.meta.env.BASE_URL}/guides`}>
                  Список гайдов <ArrowRightIcon width={20} height={20} />
                </a>
              </Button>
              <Button
                asChild
                className={styles.action}
                variant='solid'
                size='4'
                color='gray'
              >
                <a href={`${import.meta.env.BASE_URL}/about`}>О нас</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Theme>
  );
};

export default Intro;
