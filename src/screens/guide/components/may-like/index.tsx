import { Container, Grid, Heading, Section } from '@radix-ui/themes';
import { GuideCard } from 'shared/components';
import styles from './index.module.scss';

type RecommendItem = {
  href: string;
  image: {
    avif: ImageMetadata;
    webp: ImageMetadata;
    jpeg: ImageMetadata;
  };
  title: string;
  description: string;
};

type Props = {
  data: RecommendItem[];
};

export const Examples = ({ data }: Props) => {
  return (
    <Section>
      <Container>
        <div className={styles.root}>
          <Heading as='h2' size='9' weight='bold' align='center'>
            Вам может понравиться
          </Heading>
          <Grid columns='repeat(3, 25%)' gap='24px' justify='center'>
            {data.map((item) => (
              <GuideCard key={item.href} {...item} />
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
};

export default Examples;
