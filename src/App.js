import './App.css';
import Video from './components/Video';
// import video1 from "./videos/video1.mp4"
import video2 from "./videos/video2.mp4"
// import video3 from "./videos/video3.mp4"
function App() {
  return (
    <div className="app">
      <div className="app-container">
      {/* video container */}
      {/* <Video video={video1}/> */}
      <Video video={video2} Name={`@ jatinsharma`} Description={'hello everyone'} songName={'asal mein'} likes={100} comments={50} shares={12}/>
      {/* <Video video={video3}/> */}
      </div>
    </div>
  );
}

export default App;
