import Header from "../header";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";

const Navbar = () => {
  return (
    <div>
      <Header />
      <TopBar />
      <BottomBar />
    </div>
  );
};

export default Navbar;
