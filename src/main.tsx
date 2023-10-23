import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./router";
import GlobalStyle from './styles/globals'
import { store } from "./data";
import MusicPlayer from "./components/music-player";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <AppRouter />
      <MusicPlayer />
    </Provider>
  </React.StrictMode>
);
