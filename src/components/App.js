import React, { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments";


function App() {
  console.log("Here's your data:", video);

  // console.log(video.embedUrl)

  const [upvotes, changeUpvote] = useState(video.upvotes)
  const [downvotes, changeDownvote] = useState(video.downvotes)

  function HandleUpvote(){
    changeUpvote(upvotes + 1)
  }

  function HandleDownvote(){
    changeDownvote(downvotes - 1)
  }
  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />

      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={HandleUpvote}>{upvotes} 👍 Upvotes</button>
      <button onClick={HandleDownvote}>{downvotes} 👎 Downvotes</button>

      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
