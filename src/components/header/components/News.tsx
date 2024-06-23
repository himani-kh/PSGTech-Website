import Marquee from "react-fast-marquee";

const News = () => {
  return (
    <div className="flex space-x-2 flex-1">
      <p>News:</p>
      <Marquee className="text-secondary">
        <div className="mx-4">
          Award Ceremony of UG & PG Engineering Programmes
        </div>
        <div className="mx-4">Bsc Msc Programms Admission open 2024</div>
        <div className="mx-4">Bsc Msc Programms Admission open 2024</div>
      </Marquee>
    </div>
  );
};

export default News;
