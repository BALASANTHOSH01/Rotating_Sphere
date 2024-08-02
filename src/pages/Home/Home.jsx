import React from "react";
import "../../index.css";
import RotatingSphere from "../../components/Projects/RotatingSphere/RotatingSphere";

const Home = () => {
  return (
    <div>
      <div>
        
        <div id="canvas_container" className="w-full h-screen">
          <RotatingSphere />
        </div>
      </div>
    </div>
  );
};

export default Home;
