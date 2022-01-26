import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import {EditableSpan} from "../EditableSpan";

export default {
    title: 'TODOLISTS/EditableSpan',
    component: EditableSpan,
    argsTypes: {
        onChange: {
            description: 'Value EditableSpan changed'
        },
        value: {
            defaultValue: 'HTML',
            description: 'Start value EditableSpan'
        }
    },
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanExampleStory = Template.bind({});
EditableSpanExampleStory.args = {
    onChange: action('Value EditableSpan changed')
};

