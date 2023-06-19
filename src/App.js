import Body from "./Components/Body";
import WatchPage from "./Components/Watchpage/WatchPage";
import LiveChat from "./Components/LiveChat/LiveChat";
import NavBar from "./Components/Heading/NavBar";
import HeadingList from "./Components/Heading/HeadingList";
import SearchedVideoContainer from "./Components/SearchedVideo/SearchedVideoContainer";

import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./index.module.css";

function App() {
  const cart = useSelector((state) => state.isShown);

  const app = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/watch",
      element: <WatchPage />,
    },

    {
      path: "/live",
      element: <LiveChat />,
    },
    {
      path: "/searchedVideo",
      element: <SearchedVideoContainer />,
    },
  ]);
  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <HeadingList />
        <span>
          <RouterProvider router={app} />{" "}
        </span>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
