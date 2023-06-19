import styles from "./ButtonList.module.css";
const Button = (props) => {
  return <button className={styles.item}>{props.names}</button>;
};
export default Button;
