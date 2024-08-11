import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            The {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Olympics 2024
              </Text>{' '}
              The Pinnacle of Global Sportsmanship
            </Title>

            <Text className={classes.description} mt={30}>
            Experience the ultimate showcase of human excellence and unity – The Paris 2024 Olympics will bring together athletes from around the world, pushing boundaries and creating unforgettable moments in one of the most iconic cities on Earth.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}