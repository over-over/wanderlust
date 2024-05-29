import {
  Section,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
} from '@radix-ui/themes';
import { GuideCardPrice } from 'shared/components';
import { assets } from './assets';

type Item = {
  id: number;
  image: {
    avif: ImageMetadata;
    webp: ImageMetadata;
    jpeg: ImageMetadata;
  };
  title: string;
  description: string;
  price: number;
  buyLink: string;
  detailsLink: string;
};

const data: Item[] = [...Array(9).keys()].map((index) => ({
  id: index,
  image: {
    avif: assets.avif.armenia,
    webp: assets.webp.armenia,
    jpeg: assets.jpg.armenia,
  },
  title: 'Армения',
  description: 'Продающий текст про путешествие в Армению',
  price: 599,
  buyLink: `${import.meta.env.BASE_URL}/buy/${index}`,
  detailsLink: `${import.meta.env.BASE_URL}/guide`,
}));

export const PopularGuides = () => {
  return (
    <Section>
      <Container>
        <Flex direction='column' gap='32px' align='center'>
          <Heading as='h1' size='9' weight='bold' align='center'>
            Популярные гайды
          </Heading>
          <Text size='6' weight='medium' align='center'>
            Ещё какой-то продающий текст
          </Text>
          <Grid columns='repeat(3, 25%)' gap='16px' justify='center'>
            {data.map((item) => (
              <GuideCardPrice
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                buyLink={item.buyLink}
                detailsLink={item.detailsLink}
              />
            ))}
          </Grid>
        </Flex>
      </Container>
    </Section>
  );
};

export default PopularGuides;
