import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const sidebarArray = [
    { icon: "/images/eth.svg", to: "#" },
    { icon: "/images/tenor.svg", to: "#" },
    { icon: "/images/lock.svg", to: "#" },

    { icon: "/images/telegram.svg", to: "#" },
    { icon: "/images/twitter.svg", to: "#" },
    { icon: "/images/youtube.svg", to: "#" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.hamburger}>
        <img src="images/hamburger.svg" alt="#" className={styles.image} />
      </div>
      <div className={styles.iconContainer}>
        {sidebarArray.map((el, i) => (
          <a href={el.to} target="_blank" rel="noreferrer" key={i}>
            <img src={el.icon} alt="#" className={styles.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
