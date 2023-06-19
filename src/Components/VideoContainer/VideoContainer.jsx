import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "./Video";
import styles from "./videoContainer.module.css";
import { youtube_api } from "../../utils/constant";

const VideoContainer = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(youtube_api);
    const json = await data.json();
    setVideos(json.items);
  };
  console.log(videos);
  return (
    <div className={styles.container}>
      {videos.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id}>
            <Video items={item} />
          </Link>
        );
      })}
    </div>
  );
};
export default VideoContainer;
