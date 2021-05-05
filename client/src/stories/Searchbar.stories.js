import React from "react";
import { Searchbar } from "./Searchbar";

export default {
  title: "Example/Searchbar",
  component: Searchbar,
};

const Template = args => <Searchbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter Something",
};
