import { Container, Grid, Heading, Section, Text } from '@radix-ui/themes';
import styles from './index.module.scss';

type Props = {
  description: string;
  images?: ImageMetadata[];
};

export const Examples = ({ description, images }: Props) => {
  return (
    <Section>
      <Container>
        <div className={styles.root}>
          <Heading as='h2' size='9' weight='bold' align='center'>
            Примеры страниц
          </Heading>
          <Text size='5' weight='regular' align='center'>
            {description}
          </Text>
          <Grid columns='repeat(3, 1fr)' gap='32px'>
            {!images?.length && (
              <>
                <div className={styles.imageWrapper} />
                <div className={styles.imageWrapper} />
                <div className={styles.imageWrapper} />
              </>
            )}
            {images?.map((item, index) => (
              <div key={item.src} className={styles.imageWrapper}>
                <img {...item} alt={`Пример ${index + 1}`} />
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
};

export default Examples;
