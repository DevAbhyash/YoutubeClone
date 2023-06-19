import style from "./Video.module.css";
const Video = (props) => {
  console.log(props);
  let thumbnails = props.items.snippet.thumbnails.high.url;
  let title = props.items.snippet.title;
  let description = props.items.snippet.channelTitle;
  let viewCount = props.items.statistics.viewCount;
  return (
    <div className={style.container}>
      <img className={style.img} src={thumbnails} />
      <p className={style.title}>{title}</p>
      <p className={style.description}>{description}</p>
      <p className={style.description}>{viewCount}</p>
    </div>
  );
};
export default Video;
