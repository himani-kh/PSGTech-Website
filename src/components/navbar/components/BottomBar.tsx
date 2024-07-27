import React from 'react';
import './BottomBar.css'; 


const BottomBar : React.FC= () => { 
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-section" style={{fontWeight: 600, color:'var(--primary-color)'}}>
        <div></div>
        <p>Home</p>
        <p>About Us</p>
        <p>Academics</p>
        <p>Admissions</p>
        <p>Exams</p>
      </div>
      <div className="bottom-bar-section" style={{fontWeight: 600, color:'var(--primary-color)'}}>
        <p>NAAC</p>
        <p>Research</p>
        <p>Industry</p>
        <p>InduTech</p>
        <p>NIRF & ARIIA</p>
        <div></div>
      </div>
    </div>
  );
};

export default BottomBar;


