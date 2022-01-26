import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
  title: 'TODOLISTS/AddItemForm',
  component: AddItemForm,
  argTypes: {
    addItem: {
      description:'Callback clicked inside form'
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AddItemForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddItemFormStory.args = {
  addItem: action('AddItemForm'),
};


