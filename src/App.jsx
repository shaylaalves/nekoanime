import { useState } from "react";
import axios from "axios";
import Image from "/image.png";
import "./App.css";

function App() {
  const [imageUrl, setImage] = useState(Image);

  function subtmitRequest() {
    axios({
      method: "get",
      url: "https://nekos.best/api/v2/neko",
    }).then(function (response) {
      console.log(response.data);
      setImage(response.data.results[0].url);
    });
  }

  return (
    <>
      <div className="container">
        <h1>Neko Anime</h1>
        <button onClick={() => subtmitRequest()}>Request Image</button>
        <div className="imageContainer">
          <img className="image" src={imageUrl}></img>
        </div>
      </div>
    </>
  );
}

export default App;
