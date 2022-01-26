import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AddItemForm} from "../AddItemForm";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "../state/ReduxStoreProviderDecorator";

export default {
  title: 'TODOLISTS/AppWithRedux',
  component: AppWithRedux,
  decorators: [ReduxStoreProviderDecorator]
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AppWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppWithRedux> = (args) => <Provider store={store}><AppWithRedux  /></Provider> ;

export const AppWithReduxStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AppWithReduxStory.args = {};


