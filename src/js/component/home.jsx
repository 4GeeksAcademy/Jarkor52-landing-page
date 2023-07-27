import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import "../../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div>
          <Jumbotron />
        </div>
        <div>
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Home;
