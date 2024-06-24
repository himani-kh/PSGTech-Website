import PSGLogo from "../../../assests/logo.svg";

const TopBar = () => {
  return (
    <div className="flex space-x-3 items-center justify-end p-4 bg-primary text-white relative">
      <div className="absolute flex flex-col items-center p-4 bg-primary top-0 left-[50%] -translate-x-[50%] z-10">
        <img src={PSGLogo} className="w-20" alt="" />
        <h1 className="text-2xl" style={{fontWeight: 600}}>PSG College of Technology</h1>
      </div>
      <p>PSG Mail</p>
      <p>Students</p>
      <p>Parents</p>
      <p>Alumni</p>
      <p>Careers</p>
      <p>IIC</p>
      <p>Contact</p>
    </div>
  );
};

export default TopBar;
