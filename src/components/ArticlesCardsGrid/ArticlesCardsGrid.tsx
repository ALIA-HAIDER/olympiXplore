import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    title: 'Best of Paris 2024 men’s basketball: Top performers — points, rebounds, assists',
    image:
    'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/ezehtb7dmde13fcynlek',
    date: '12 August 2024 01:26 GMT+5:30',
    link: 'https://olympics.com/en/news/paris-2024-basketball-men-top-stars-points-rebounds-assists',  // Add the link here
  },
  {
    title: 'Paris 2024 football: Gold with the USWNT is a career highlight for Emma Hayes – ‘It’s bigger than anything else I’ve ever done’ ',
    image:
      'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/io4rnsuir3hmdvfmryye',
    date: '12 August 2024 01:22 GMT+5:30',
    link: 'https://olympics.com/en/news/emma-hayes-olympic-gold-pinnacle-of-career-paris-2024',  // Add the link here

  },
  {
    title: "Team GB's Emma Finucane writes British Olympic history with triple medal haul at Paris 2024",
    image:
      'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/a23nnkr1wf8i5rffjtwz',
    date: '12 August 2024 00:15 GMT+5:30',
    link: 'https://olympics.com/en/news/paris-2024-cycling-track-great-britain-emma-finucane',  // Add the link here

  },
  {
    title: "Brittney Griner's comeback: From adversity to basketball Olympic glory at Paris 2024",
    image:
      'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/qnj929j6abchjame8gwe',
    date: 'September 12, 2022',
    link: 'https://olympics.com/en/news/brittney-griner-comeback-adversity-basketball-olympic-glory-paris-2024',  // Add the link here

  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href={article.link}  className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}