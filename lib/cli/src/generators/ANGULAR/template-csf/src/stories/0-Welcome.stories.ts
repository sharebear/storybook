import { Welcome } from '@storybook/angular/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});

ToStorybook.storyName = 'to Storybook';
