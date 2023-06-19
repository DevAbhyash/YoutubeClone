import HeadingList from "../Heading/HeadingList";
import NavBar from "../Heading/NavBar";
import styles from "./Watchpage.module.css";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Fragment } from "react";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const comment = [
    {
      name: "🤵‍♂️  Abhyash",
      comment: "Nice Video",
      like: 20,
      dislike: 30,
    },
    {
      name: "🧟‍♂️  prajana",
      comment: "Mismerizing",
      like: 0,
      dislike: 0,
    },
    {
      name: "👸  Rejina",
      comment: "Perfect 🥰",
      like: 200,
      dislike: 0,
    },
    {
      name: "🧌  Rasin",
      comment: "Very nice",
      like: 200,
      dislike: 30,
    },
    {
      name: "🦫  Vivek",
      comment: "No no no no",
      like: 10,
      dislike: 30,
    },
    {
      name: "👹  Diwash",
      comment: "Such a wonderful piece of art",
      like: 72,
      dislike: 34,
    },
    {
      name: "🐻 Shyam",
      comment: "cant explain",
      like: 82,
      dislike: 36,
    },
    {
      name: "💩  John",
      comment: "MasterPiece",
      like: 10,
      dislike: 30,
    },
  ];

  return (
    <Fragment>
      <div>
        <div className={styles.container}>
          <iframe
            className={styles.videos}
            width="1200"
            height="800px"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <h1>Comment</h1>
      <h1>8 Comments</h1>
      <div className={styles.commentContainer}>
        {comment.map((item) => {
          return (
            <div className={styles.comments}>
              <p className={styles.name}>
                {item.name} <span>4 months ago</span>
              </p>

              <p className={styles.comment}>{item.comment}</p>
              <p className={styles.like}>
                👍{item.like} 👎{item.dislike}
              </p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default WatchPage;
