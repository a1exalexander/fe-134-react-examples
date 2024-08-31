import { useState } from "react";
import { Hero } from "../components/Hero";
import { Tabs } from "../components/Tabs";
import styles from "./App.module.css";
import { Pictures } from "../views/Pictures";
import { Music } from "../views/Music";
import { Videos } from "../views/Videos";
import { Documnets } from "../views/Documents";

export const App = () => {
  const [activeTabId, setActiveTabId] = useState("pictures");

  return (
    <div className={styles.container}>
      <Hero />
      <section className="section">
        <div className="container is-fluid">
          <Tabs activeTabId={activeTabId} onSelect={setActiveTabId}>
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
          {activeTabId === "pictures" && <Pictures />}
          {activeTabId === "music" && <Music />}
          {activeTabId === "videos" && <Videos />}
          {activeTabId === "documents" && <Documnets />}
        </div>
      </section>
    </div>
  );
};
