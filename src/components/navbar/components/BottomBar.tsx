const BottomBar = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex space-x-4">
        <p>Home</p>
        <p>About Us</p>
        <p>Academics</p>
        <p>Admissions</p>
        <p>Exams</p>
      </div>
      <div className="flex space-x-4">
        <p>NAAC</p>
        <p>Research</p>
        <p>Industry</p>
        <p>InduTech</p>
        <p>NIRF & ARIIA</p>
      </div>
    </div>
  );
};

export default BottomBar;
