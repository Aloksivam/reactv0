import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer 
    url='https://youtu.be/k3KqQvywToE?si=2shE9ky760LaLB49' 
    player={true}
    volume={.1}
    />
  );
};

export default App;
