import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Request from "./components/Request";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import UserProfileUpdate from "./components/UserProfileUpdate";
import Conversation from "./components/Conversion";
import Signup from "./components/Signup";
import Search from "./components/Search";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Login />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/profile" element={<UserProfileUpdate />}></Route>
          <Route path="/connections" element={<Conversation />}></Route>
          <Route path="/requests" element={<Request />}></Route>
          <Route path="/signuppage" element={<Signup />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
