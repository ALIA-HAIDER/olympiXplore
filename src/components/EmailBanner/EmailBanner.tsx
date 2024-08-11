import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import image from './image.avif'; // Make sure this path is correct
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>THE COUNTDOWN TO THE CLOSING CEREMONY</Title>
        <Text fw={500} fz="lg" mb={5}>
        There’s more than you see on TV. Get early access to Paris 2024 highlights and replays with a free Olympic Membership.
        </Text>
        {/* <Text fz="lg" c="dimmed">
        There’s more than you see on TV. Get early access to Paris 2024 highlights and replays with a free Olympic Membership.
        </Text> */}

        <div className={classes.controls}>
          <TextInput
            placeholder="Sign Up for FREE!!"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}><a href="https://olympics.com/en/sign-in?origin=https%3A%2F%2Folympics.com%2Fen%2Fparis-2024&template=paris-2024&entry_point_type=regular_cta&entry_point_tag=paris-2024">Explore</a></Button>
        </div>
      </div>
      <Image src={image} className={classes.image} /> {/* Directly use image */}
    </div>
  );
}
