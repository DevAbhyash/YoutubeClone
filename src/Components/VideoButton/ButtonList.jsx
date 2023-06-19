import Button from "./Button";
import styles from "./ButtonList.module.css";

const list = [
  "All",
  "Mixes",
  "Music",
  "Gaming",
  "Live",
  "cooking",
  "News",
  "Football",
  "Cricket",
  "India",
];
const ButtonList = () => {
  return (
    <div className={styles.container}>
      {list.map((item) => {
        return <Button names={item} />;
      })}
    </div>
  );
};
export default ButtonList;
