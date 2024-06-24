import News from "./components/News";
import Search from "./components/Search";
import SocialMedia from "./components/SocialMedia";

const Header = () => {
  return (
    <div className="flex flex-row items-center p-2 bg-primary text-white space-x-3 border-b-2 border-white">
      <News />
      <Search />
      <SocialMedia />
      <button className="bg-secondary px-2 py-1 rounded-sm text-black" style={{fontWeight: 600}}>
        e-campus
      </button>
    </div>
  );
};

export default Header;
