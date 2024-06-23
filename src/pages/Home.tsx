import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image1 from "../assests/home/image-1.jpg";
import Image2 from "../assests/home/image-2.jpg";
import Image3 from "../assests/home/image-3.jpg";

const Home = () => {
  const slides = [
    { src: Image1, caption: "Event 1" },
    { src: Image2, caption: "Event 2" },
    { src: Image3, caption: "Event 3" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      swipeable={false}
      stopOnHover={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      dynamicHeight={false}
    >
      {slides.map((slide) => (
        <div className="h-[30rem] relative">
          <img className="" src={slide.src} alt="" />
          <div className="absolute bottom-0 left-0 z-10 bg-primary/85 w-full text-white text-left py-2 px-8 font-semibold">
            <p className="">{slide.caption}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Home;
