import styles from "./LiveChat.module.css";
const LiveComment = (props) => {
  const name = props.name;
  const message = props.message;
  return (
    <div className={styles.singleComment}>
      <p>🧔🏻‍♂️ {name}</p>
      <p>{message}</p>
    </div>
  );
};
export default LiveComment;
