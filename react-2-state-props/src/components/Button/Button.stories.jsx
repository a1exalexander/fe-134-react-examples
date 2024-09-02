import { fn } from "@storybook/test";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
};

export const Default = {
  args: {
    children: "My Buttom",
  },
};

export const Loading = {
  args: {
    children: "My Buttom",
    isLoading: true,
  },
};

export const Info = {
    args: {
      children: "My Buttom",
      theme: 'info'
    },
  };
