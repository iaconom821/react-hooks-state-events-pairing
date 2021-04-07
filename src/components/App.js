import video from "../data/video.js";
import Comments from "./Comments"
import VideoContent from "./VideoContent"

function App() {
  console.log("Here's your data:", video);


  return (
    <div className="App">
      <VideoContent video={ video }/>
      
    </div>
  );
}

export default App;
