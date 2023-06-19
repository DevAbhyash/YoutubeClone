import { Link } from "react-router-dom";
import LiveComment from "./LiveComment";
import styles from "./LiveChat.module.css";
import { useEffect } from "react";
import { makeid } from "./Helper";
import { randomName } from "./Helper";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../utils/liveChatSlice";
import { useState } from "react";

const LiveChat = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.liveChat);
  console.log(chat);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addChat({
          name: randomName(),
          message: "Wrote: " + makeid(30),
        })
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1 className={styles.liveChatHeading}>LIVE CHAT</h1>
      <div className={styles.liveChatContainer}>
        <Link to="/live">
          {chat.map((item) => {
            return <LiveComment name={item.name} message={item.message} />;
          })}
        </Link>
      </div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder="Enter Text"
      />
      <button
        onClick={() => {
          dispatch(
            addChat({
              name: "Abhyash",
              message: "You: " + comment,
            })
          );
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default LiveChat;
