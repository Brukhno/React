import React from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import Messages from "./componets/Messages/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";

const App = (props) => {
  

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div class="app-wrapper-content">
          <Routes>
            {/* <Route path="/dialogs" element={<Messages  messages={messages} dialogs={dialogs}/>} /> */}
            <Route path="/dialogs" element={<Messages />} />
            <Route path="/profile" element= { <Profile posts = {props.posts} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
