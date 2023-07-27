import React from "react";
import "../../styles/index.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="jumbotron">
        <h5 className="card-title">A warm welcome!</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis eum rem voluptate nisi ab veniam, totam non. Ut ea deserunt, voluptates consequuntur temporibus saepe voluptate dolores cum nobis ipsum!
        </p>
        <button className="buutn"> 
            Call to action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
