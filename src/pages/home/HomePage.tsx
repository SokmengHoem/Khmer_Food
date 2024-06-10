
import { Link, Element } from "react-scroll";
import { MdOutlineExpandCircleDown } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import TitleWithIcon from "../../components/Molecules/TitleWithIcon";
import { RealWorldType, compareA, compareB, reviews } from "../../data/myData";
import { CgChevronRight } from "react-icons/cg";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/food");
  };
  const [visibleReviews, setVisibleReviews] = useState<RealWorldType[]>(
    reviews.slice(0, 3)
  );
  const [currentIndex, setCurrentIndex] = useState<number>(3);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const loadMoreReviews = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      const nextIndex = (currentIndex + 3) % reviews.length;
      const newReviews = reviews.slice(nextIndex, nextIndex + 3);
      setVisibleReviews(
        newReviews.length === 3
          ? newReviews
          : [...newReviews, ...reviews.slice(0, 3 - newReviews.length)]
      );
      setCurrentIndex(nextIndex);
    }, 500); // Animation duration in milliseconds
  };
  return (
    <>
      <header className="bg-[#fdfaf2] w-full h-auto lg:h-[89vh] ">
        <div className="w-52 h-[10%]">
          <img
            src="images/homeHeader.png"
            alt=""
            className="w-full object-contain"
          />
        </div>
        <div className="w-full h-[80%] lg:h-[80%] flex flex-col lg:flex-row justify-evenly items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-[50%] flex flex-col gap-8 sm:gap-12 lg:gap-16 px-0 sm:px-12 lg:px-32 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold space-y-2">
              SIMPLE <br /> INGREDIENTS.
              <br /> NO JUNK.®
            </h1>
            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={handleClick}
                variant="myWeb"
                className="py-3 sm:py-4 lg:py-5"
              >
                View Our Products
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-center items-center mt-8 lg:mt-0">
            <img
              src="images/homeImg1.png"
              alt=""
              className="w-full h-full max-w-md object-contain"
            />
          </div>
        </div>
        <div className="h-[10%] flex justify-center items-center lg:mt-0">
          <Link to="section1" smooth={true} duration={500}>
            <MdOutlineExpandCircleDown
              size={45}
              className="text-[#920E07] transition duration-300 transform hover:scale-110 cursor-pointer"
            />
          </Link>
        </div>
      </header>

      <main>
        <div className="w-full h-auto lg:w-[82%] mx-auto px-4 sm:px-6 lg:px-8">
          <Element
            name="section1"
            className="w-full h-auto lg:h-[100vh] bg-slate-90 py-16 sm:py-24 lg:py-28 flex flex-col lg:flex-row"
          >
            <div className="w-full lg:w-[50%] flex flex-col gap-6 mb-12 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] text-gray-700">
                Prahok Ktiss <br /> (Pork Dipping Sauce)
              </h1>
              <div className="bg-[#920E07] h-1 w-16 rounded-full"></div>
              <div className="flex flex-col gap-6 sm:gap-8 pr-0 sm:pr-12 md:pr-24 lg:pr-72 text-slate-800 text-[16px] sm:text-[18px] md:text-[20px] font-normal">
                <p>
                  At Rib Rack, we believe that grilling with family and friends
                  is one of life's simple pleasures and that the products we use
                  to grill should be simple too.
                </p>
                <p>
                  That's why we created the country's best tasting line of BBQ
                  products using real, simple ingredients with names you can
                  pronounce.
                </p>
              </div>
              <Button variant="myWeb" className="w-40">
                About Rib Rack
              </Button>
            </div>

            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
              <img
                src="images/homeImg2.jpg"
                alt=""
                className="object-cover mt-12 lg:mt-24 transform rotate-6 hover:rotate-0 rounded-md shadow-md w-full max-w-md"
              />
            </div>
          </Element>
        </div>
        <div className=" w-full  h-[110vh] bg-[#fdfaf2]">
          <div className=" w-[80%] h-auto mx-auto py-10 flex flex-col gap-5 ">
            <div className=" flex flex-col items-center gap-9">
              <h1 className=" text-5xl text-gray-700 font-bold">
                Only the Good Stuff
              </h1>
              <div className="bg-[#920E07] h-1 w-16 rounded-full "></div>
            </div>
            <div className=" flex justify-evenly items-center">
              <div className=" w-[42%] flex flex-col items-end gap-5">
                <div className=" flex justify-center items-center ">
                  <img src="images/homeImg3.png" alt="" />
                </div>
                {compareA.map((item) => (
                  <TitleWithIcon
                  key={item.title}
                    title={item.title}
                    icon={item.icon}
                    iconPosition={item.iconPosition}
                    iconColor={item.iconColor}
                  />
                ))}
              </div>
              <div className=" flex flex-col items-center gap-2">
                <div className=" bg-gray-400 w-[1px] h-[330px]"></div>
                <div className="text-[#77a240] font-bold text-xl">Vs</div>
                <div className=" bg-gray-400 w-[1px] h-[200px]"></div>
              </div>
              <div className=" w-[42%] flex flex-col items-start gap-5">
                <div className=" flex justify-center items-center w-[280px] ">
                  <img src="images/homeImg4.png" alt="" />
                </div>
                {compareB.map((item) => (
                  <TitleWithIcon
                  key={item.title}
                    title={item.title}
                    icon={item.icon}
                    iconPosition={item.iconPosition}
                    iconColor={item.iconColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* //sticky  */}
        <div className="relative">
          <div className="sticky top-0 h-screen  flex justify-center  items-center gap-[50%]">
            <div className=" flex flex-col gap-9">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] text-gray-700">
                Prahok Ktiss
              </h1>
              <div className="bg-[#920E07] h-1 w-16 rounded-full"></div>
              <p className=" w-96 text-xl">
                Mouthwatering flavors to take your BBQ to the next level of
                delicious perfection.
              </p>
              <div>
                <Button
                  variant="myWeb"
                  className=" hover:bg-white hover:border-2 hover:text-[#920E07] hover:border-[#920E07]"
                >
                  View All
                </Button>
              </div>
            </div>
            <div className="">
              <div className="w-96 h-96 absolute top-40 right-20 rounded-full bg-red-600"></div>
              <div className=" w-[700px] absolute top-0 right-6">
                <img src="images/homeImg7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-[#920E07] h-auto">
          <div className="w-[82%] mx-auto h-[56vh] flex flex-col items-center gap-6 py-9">
            <h1 className=" text-4xl text-white font-bold">Where to Buy</h1>
            <div className="bg-[#f4f733] h-1 w-16 rounded-full"></div>
            <div className=" flex items-center mt-6">
              <div className="w-72 border-r-2  px-10 ">
                <img src="images/homeImg5.png" className=" w-full" alt="" />
              </div>
              <div className="w-72 border-r-2 py-9  px-10 ">
                <img src="images/homeImg6.png" className=" w-full" alt="" />
              </div>
              <div className="w-72 border-r-2 py-5  px-10 ">
                <img src="images/homeImg8.png" className=" w-full" alt="" />
              </div>
              <div className="w-72 border-r-2 py-8  px-10 ">
                <img src="images/homeImg9.png" className=" w-full" alt="" />
              </div>
            </div>
            <Button
              variant="myWeb"
              className=" text-[#920E07] mt-4 border-2 border-white"
            >
              Find Other Shop
            </Button>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="relative w-[82%] mx-auto h-auto flex flex-col items-center gap-6 py-9 mb-10">
            <h1 className="text-5xl text-gray-800 font-bold">
              Real Words from Real Customers
            </h1>
            <div className=" relative bg-[#920E07] h-1 w-16 rounded-full"></div>
            <div className="w-[82%] overflow-hidden h-auto flex flex-row gap-10">
              <div
                className={`w-[100%] flex flex-row gap-24 p-9 transform transition-transform ${
                  isAnimating ? "translate-x-full" : "translate-x-0"
                }`}
              >
                {visibleReviews.map((review) => (
                  <div key={review.id}>
                    <div className=" w-6">
                      <img src={review.img} alt="" className="w-full" />
                    </div>
                    <h4 className="text-2xl font-bold mt-5">{review.text}</h4>
                    <p className="text-gray-400 mt-5">{review.author}</p>
                  </div>
                ))}
              </div>
              <div
                onClick={loadMoreReviews}
                className="absolute bg-[#920E07] px-2 py-2 rounded-full -right-6 top-56 text-white cursor-pointer"
              >
                <CgChevronRight size={40} />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-[#fdfaf2] h-auto">
          <div className="w-[82%] mx-auto h-auto flex flex-col items-center gap-6 py-9">
            <h1 className=" text-4xl text-gray-800 font-bold">Let's Get Social!</h1>
            <div className="bg-[#920E07] h-2 w-16 rounded-full"></div>
            <div className=" flex items-center gap-5">
              <div className="w-72 ">
                <img src="images/homeImg11.jpg" className=" w-full rounded-lg" alt="" />
              </div>
              <div className="w-72 ">
                <img src="images/homeImg11.jpg" className=" w-full rounded-lg" alt="" />
              </div>
              <div className="w-72 ">
                <img src="images/homeImg11.jpg" className=" w-full rounded-lg" alt="" />
              </div>
              
            </div>
            <Button
              variant="myWeb"
              className=" text-[#920E07] mt-4 border-2 border-white"
            >
              See More Posts
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

