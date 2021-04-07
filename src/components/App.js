import video from "../data/video.js";
// import Comments from "./Comments"
import VideoContent from "./VideoContent"

function App() {
  console.log("Here's your data:", video);


  return (
    <div className="App">
      <VideoContent video={ video }/>
      {/* {showCommentsGlobal && <Comments comments= {video.comments}/>} */}
    </div>
  );
}

export default App;
