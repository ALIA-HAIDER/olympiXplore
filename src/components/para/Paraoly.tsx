import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import image from './imgp.avif'; // Make sure this path is correct
import classes from './Paraoly.module.css';

export function Paraoly() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Discover the Paralympics!!!</Title>
        <Text fw={500} fz="lg" mb={5}>
        Uncover the incredible feats and inspiring stories of athletes with disabilities in the Para Olympic Games
        </Text>

        <div className={classes.controls}>
          <Button className={classes.control} component="a" href="https://olympics.com/en/paris-2024/paralympic-games">
            Discover More
          </Button>
        </div>
      </div>
      <Image src={image} className={classes.image} /> {/* Directly use image */}
    </div>
  );
}