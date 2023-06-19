import { useState } from "react";
import NavBar from "./Heading/NavBar";
import HeadingList from "./Heading/HeadingList";
import ButtonList from "./VideoButton/ButtonList";
import VideoContainer from "./VideoContainer/VideoContainer";

const Body = () => {
  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};
export default Body;
