import { Table, Progress, Anchor, Text, Group } from '@mantine/core';
import classes from './TableReviews.module.css';

const data = [
  {
    Country: 'United States of America',
    Gold: 40,
    Silver: 44,
    Bronze: 42,
    Total: 126,
    reviews: { positive: 2223, negative: 259 },
  },
  {
    Country: 'People\'s Republic of China',
    Gold: 40,
    Silver: 27,
    Bronze: 24,
    Total: 91,
    reviews: { positive: 5677, negative: 1265 },
  },
  {
    Country: 'Japan',
    Gold: 20,
    Silver: 12,
    Bronze: 13,
    Total: 45,
    reviews: { positive: 3487, negative: 1845 },
  },
  {
    Country: 'Australia',
    Gold: 18,
    Silver: 19,
    Bronze: 16,
    Total: 53,
    reviews: { positive: 8576, negative: 663 },
  },
  {
    Country: 'France',
    Gold: 16,
    Silver: 26,
    Bronze: 22,
    Total: 64,
    reviews: { positive: 6631, negative: 993 },
  },
  {
    Country: 'Netherlands',
    Gold: 15,
    Silver: 7,
    Bronze: 12,
    Total: 34,
    reviews: { positive: 8124, negative: 1847 },
  },
  {
    Country: 'Great Britain',
    Gold: 14,
    Silver: 22,
    Bronze: 29,
    Total: 65,
    reviews: { positive: 3221, negative: 1234 },
  },
  {
    Country: 'Republic of Korea',
    Gold: 13,
    Silver: 9,
    Bronze: 10,
    Total: 32,
    reviews: { positive: 1784, negative: 457 },
  },
  {
    Country: 'Italy',
    Gold: 12,
    Silver: 13,
    Bronze: 15,
    Total: 40,
    reviews: { positive: 2290, negative: 623 },
  },
  {
    Country: 'Germany',
    Gold: 12,
    Silver: 13,
    Bronze: 8,
    Total: 33,
    reviews: { positive: 1499, negative: 345 },
  },
];

export function TableReviews() {
  const rows = data.map((row) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <Table.Tr key={row.Country}>
        <Table.Td className={classes.country}>{row.Country}</Table.Td>
        <Table.Td>{row.Gold}</Table.Td>
        <Table.Td>{row.Silver}</Table.Td>
        <Table.Td>{row.Bronze}</Table.Td>
        <Table.Td className={classes.total}>{row.Total}</Table.Td>
        <Table.Td className={classes.reviews}>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={positiveReviews}
              color="teal"
            />
            <Progress.Section
              className={classes.progressSection}
              value={negativeReviews}
              color="red"
            />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={700}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th className={classes.countryHeader}>Country</Table.Th>
            <Table.Th>Gold</Table.Th>
            <Table.Th>Silver</Table.Th>
            <Table.Th>Bronze</Table.Th>
            <Table.Th className={classes.totalHeader}>Total</Table.Th>
            <Table.Th className={classes.reviewsHeader}>Reviews</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
