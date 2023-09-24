import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/contacts",
//     element: <Contacts></Contacts>
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader:()=> fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path: "post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contacts",
        element: <Contacts></Contacts>
      },
      {
        path: "*",
        element: <div>404 error</div>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
