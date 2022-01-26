import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";

export default {
  title: 'TODOLISTS/Task',
  component: Task,
  args: {
    changeTaskTitle: action('Change title'),
    changeTaskStatus: action('Change status'),
    removeTask: action('Remove task'),
    todolistId: 'todolistId1',
  },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskDoneStory = Template.bind({});
TaskDoneStory.args = {
    task: {id: 'q', title: 'JS', isDone: true},
};

export const TaskIsNotDoneStory = Template.bind({});
TaskIsNotDoneStory.args = {
  task: {id: 'qw', title: 'HTML', isDone: false},
};