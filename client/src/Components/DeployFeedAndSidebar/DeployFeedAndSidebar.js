import React from "react";
import DeployFeed from "../DeployFeed/DeployFeed";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./DeoloyFeedAndSidebar.module.css";

const DeployFeedAndSidebar = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.logoAndSearch}>
        <div className={styles.logoContainer}>
          <img src="/images/logo.svg" alt="#" className={styles.logo} />
          <h3 className={styles.logoText}>
            <span className={styles.ape}>Ape</span>Scanner
          </h3>
        </div>
        <div className={styles.inputContainer}>
          <input placeholder="Search" className={styles.input} />
          <img src="images/search.svg" alt="#" />
        </div>
      </div>
      <div className={styles.deployFeedAndSidebar}>
        <Sidebar />
        <DeployFeed />
      </div>
    </section>
  );
};

export default DeployFeedAndSidebar;
