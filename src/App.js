import "./App.css";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Walid</h1>
        <br />
        <img style={{ width: "50%" }} src={imageInSrc} alt="src" />
        <img style={{ width: "50%" }} src="./imageInPublic.jpg" alt="pub" />
      </div>
      <video width="320" height="240" controls />
      <source src="myVideo.mp4" type="video/mp4" />
    </div>
  );
}

export default App;
