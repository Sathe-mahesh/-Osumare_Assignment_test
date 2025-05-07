import React from 'react';
import '../styling/Productivity.css';
import demoImg from '../assets/downloadImg.png';
import Socialicons from './SocialIcons';

const Productivity = () => {
  return (
    <section className="productivity-section py-5">
     
      <div className="d-flex justify-content-center">
        <div className="productivity-image-wrapper">
          <img
            src={demoImg}
            alt="Productivity Demo"
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>

     
      <div className="mt-5 d-flex justify-content-center">
        <Socialicons />
      </div>
    </section>
  );
};

export default Productivity;
