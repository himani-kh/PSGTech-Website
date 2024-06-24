const BottomBar = () => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex space-x-10" style={{fontWeight: 600, color:'var(--primary-color)'}}>
        <div></div>
        <p>Home</p>
        <p>About Us</p>
        <p>Academics</p>
        <p>Admissions</p>
        <p>Exams</p>
      </div>
      <div className="flex space-x-10" style={{fontWeight: 600, color:'var(--primary-color)'}}>
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
