import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreatePost from "./components/create-post";
import PostsList from "./components/posts-list";

export default function App() {
  return (
    <div>
      <div className="flex justify-evenly border">
        <h1 className="text-2xl">Application</h1>
        <nav>
          <ul>
            <li className="text-red-400">
              <Link to="/create-post">Create post</Link>
              <Link to="/posts-list">posts list</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center mt-20">
        <Routes>
          <Route
            path="/create-post"
            element={<CreatePost></CreatePost>}
          ></Route>
          <Route path="/posts-list" element={<PostsList></PostsList>}></Route>
        </Routes>
      </div>
    </div>
  );
}
