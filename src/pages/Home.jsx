import Units from "../components/Units";
import Slider from "../components/Slider";
import React from "react";  

const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Slider/>
      <Units />
    </div>
  );
};

export default Home;
