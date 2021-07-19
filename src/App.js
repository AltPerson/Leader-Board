import "./App.scss";
import List from "./components/List/List";
import data from "./components/data";
import { useState } from "react";

function App() {
  const [showAll, setShowAll] = useState(false);
  const [showAllTime, setShowAllTime] = useState(false);
  return (
    <div className="app">
      <main className="app-main main">
        <div className="main-container">
          <h1 className="main__title">LeaderBoard</h1>
          <div className="main-switcher">
            <button
              onClick={(e) => {
                if (e.target.classList.contains("switcher-button-selected")) {
                  return;
                }
                setShowAllTime(!showAllTime);
              }}
              className={`main-switcher__one ${
                showAllTime
                  ? "switcher-button-normal"
                  : "switcher-button-selected"
              }`}
            >
              Last 30 days
            </button>
            <button
              onClick={(e) => {
                if (e.target.classList.contains("switcher-button-selected")) {
                  return;
                }
                setShowAllTime(!showAllTime);
              }}
              className={`main-switcher__two ${
                showAllTime
                  ? "switcher-button-selected"
                  : "switcher-button-normal"
              }`}
            >
              All-Time
            </button>
          </div>
          <div className="main-list">
            <List
              usersData={data}
              showAll={showAll}
              showAllTime={showAllTime}
            />
          </div>
          <button onClick={() => setShowAll(!showAll)} className="main__button">
            {!showAll ? "View Everyone" : "View Less"}
          </button>
        </div>
      </main>
      <div className="reff">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
        <br></br>
        <a href="https://www.uidesigndaily.com/posts/xd-leaderboard-list-day-1369">
          Original Template
        </a>
      </div>
    </div>
  );
}

export default App;
