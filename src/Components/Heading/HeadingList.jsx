import { Fragment } from "react";
import styles from "./HeadingList.module.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBook,
  faCode,
  faHomeLg,
  faPlay,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const HeadingList = () => {
  const isShown = useSelector((state) => state.app.isShown);
  console.log(isShown);

  if (isShown) {
    return (
      <Fragment>
        <div className={styles.container1}>
          <a href="/">
            <button className={styles.items1}>Home</button>
          </a>

          <a href="/live">
            <button className={styles.items1}>LIVE</button>
          </a>

          <button className={styles.items1}>Subscription</button>
          <button className={styles.items1}>Library</button>
          <button className={styles.items1}>History</button>
          <button className={styles.items1}> Your Videos</button>
          <button className={styles.items1}>Watch Later</button>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={styles.container2}>
          <a href="/">
            <button className={styles.items2}>
              <FontAwesomeIcon className={styles.icon} icon={faHomeLg} />
              <br></br>
              Home
            </button>
          </a>

          <a href="/live">
            <button className={styles.items2}>
              <FontAwesomeIcon className={styles.icon} icon={faVideo} />
              <br></br>LIVE
            </button>
          </a>

          <button className={styles.items2}>
            <FontAwesomeIcon className={styles.icon} icon={faPlay} />
            <br></br>
            Subscription
          </button>
          <button className={styles.items2}>
            <FontAwesomeIcon className={styles.icon} icon={faBook} />
            <br></br>
            Library
          </button>
        </div>
      </Fragment>
    );
  }
};
export default HeadingList;
