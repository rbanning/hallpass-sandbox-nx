import type { Meta, StoryObj } from '@storybook/angular';
import { BuyUsACoffeeComponent } from './buy-us-a-coffee.component';

const meta: Meta<BuyUsACoffeeComponent> = {
  component: BuyUsACoffeeComponent,
  title: 'BuyUsACoffeeComponent',
};
export default meta;
type Story = StoryObj<BuyUsACoffeeComponent>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Heading: Story = {
  args: {
    color: 'secondary',
    imageSize: 32,
    action: 'Help me out?'
  },
};