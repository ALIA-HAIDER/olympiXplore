import { Title, Text, Button, Container } from '@mantine/core';
// import { Dots } from './Dots';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      {/* <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} /> */}

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Text component="span" className={classes.highlight} inherit>
          Olympic Medal Standings
          </Text>{' '}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          See which nations are leading the medal race at Paris Olympic 2024
            and Track the top-performing countries and their medal counts."
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            <a href="https://olympics.com/en/paris-2024/medals">Medal Table</a>
          </Button>
          <Button className={classes.control} size="lg">
           Medalist
          </Button>
        </div>
      </div>
    </Container>
  );
}