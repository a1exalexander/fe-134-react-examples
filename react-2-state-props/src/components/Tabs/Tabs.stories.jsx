import { useEffect, useState } from "react";
import { Tabs } from "./Tabs";
import { fn } from "@storybook/test";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    activeTabId: {
      control: "select",
      options: ["pictures", "music", "videos", "documents"],
    },
  },
};

const Template = (args) => {
  const [activeTabId, setActiveTabId] = useState(args.activeTabId);
  const onSelect = (tabId) => {
    setActiveTabId(tabId);
    args.onSelect(tabId);
  };

  useEffect(() => {
    setActiveTabId(args.activeTabId);
  }, [args.activeTabId]);

  return (
    <Tabs {...args} activeTabId={activeTabId} onSelect={onSelect}>
      <Tabs.Tab tabId="pictures" icon="fas fa-image">
        Pictures
      </Tabs.Tab>
      <Tabs.Tab tabId="music" icon="fas fa-music">
        Music
      </Tabs.Tab>
      <Tabs.Tab tabId="videos" icon="fas fa-film">
        Videos
      </Tabs.Tab>
      <Tabs.Tab tabId="documents" icon="far fa-file-alt">
        Documents
      </Tabs.Tab>
    </Tabs>
  );
};
export const Default = Template.bind({});
Default.args = {
  activeTabId: "pictures",
  onSelect: fn(),
};
