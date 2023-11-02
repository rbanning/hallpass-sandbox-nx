import { Meta, StoryObj, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { ErrorBlockComponent } from './error-block.component';
import { CommonModule } from '@angular/common';

const meta: Meta<ErrorBlockComponent> = {
  component: ErrorBlockComponent,
  title: 'ErrorBlockComponent',
  parameters: {

  },
  decorators: [
    moduleMetadata({
      declarations: [ErrorBlockComponent],
      imports: [CommonModule]
    }),
    componentWrapperDecorator(
      (story) => `<div class="p-8 border-2 border-slate-200">${story}</div>`
    )
  ],
  render: (args) => {
    const { heading, ...props } = args;
    return {
      props,
      template: `<hallpass-shared-error-block heading="${heading ?? ''}"><div>This is a fancy error message</div></hallpass-shared-error-block>`
    }
  }
};

export default meta;

type Story = StoryObj<ErrorBlockComponent>;


export const Primary: Story = {
  args: {

  },
}

export const Heading: Story = {
  args: {
    heading: 'Oops',
  },
};