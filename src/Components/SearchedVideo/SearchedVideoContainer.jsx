import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchedVideo from "./SearchedVideo";
import styles from "./searchedVideo.module.css";

const SearchedVideoContainer = () => {
  const [video, setVideo] = useState([]);
  const keyword = useSelector((store) => store.searchVideo.searchedKeyword);

  useEffect(() => {
    getVideo();
    console.log("hello");
  }, [keyword]);

  async function getVideo() {
    console.log("called");
    const myVideo = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=AIzaSyDLnYApzyu5SS8fSfuSEb4yRtDUrseJWH0`
    );
    const json = await myVideo.json();
    setVideo(json.items);
    console.log(video[0].id);
  }

  return (
    <div className={styles.container}>
      {video.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id}>
            <SearchedVideo items={item} />
          </Link>
        );
      })}
    </div>
  );
};
export default SearchedVideoContainer;
