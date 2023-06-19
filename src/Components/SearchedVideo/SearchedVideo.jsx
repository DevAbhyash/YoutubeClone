import styles from "./searchedVideo.module.css";
const SearchedVideo = (props) => {
  const thumbnails = props.items.snippet.thumbnails.medium.url;
  const title = props.items.snippet.channelTitle;
  const description = props.items.snippet.description;

  return (
    <div className={styles.wrapper}>
      <img src={thumbnails} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default SearchedVideo;
