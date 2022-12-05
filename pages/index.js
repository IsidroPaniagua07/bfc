import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  let slider;
  let current;
  let prev;
  let next;

  const move = (dir) => {
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (dir === "left")
      [prev, current, next] = [
        prev.previousElementSibling || slider.lastElementChild,
        prev,
        current,
      ];
    if (dir === "right")
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slider.firstElementChild,
      ];
    applyClasses();
  };

  const applyClasses = () => {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  };

  // if (typeof window !== "undefined") {
  //   slider = document.querySelector(".slider");
  //   current = slider.querySelector(".current") || slider.firstElementChild;
  //   prev = current.previousElementSibling || slider.lastElementChild;
  //   next = current.nextElementSibling || slider.firstElementChild;
  // }

  return (
    <>
      <div className="flex flex-col  h-[100vh] xl:w-[90%] 2xl:w-[80%] p-4 justify-self-center items-center">
        <div className="flex h-full w-full flex-col gap-12 pt-20">
          <div className="flex flex-col w-full xl:flex-row">
            <div className="flex flex-col w-full xl:w-1/2">
              <h3 className="flex justify-center xl:justify-start home-header header-fade underline decoration-[#960018] decoration-[6px] gap-0 leading-none">
                Fiscal & Co. <br />{" "}
              </h3>
              <div className="flex justify-center xl:justify-start font-julius text-6xl header-fade leading-none">
                Construction
              </div>
            </div>
            <div className="flex flex-col w-full xl:w-1/2  overflow-hidden justify-start items-start xl:justify-end xl:items-end">
              <h2 className="flex w-full home-description h-auto description-fade text-2xl justify-center items-center">
                Honesty, reliability, and superior craftsmanship.
              </h2>
            </div>
          </div>
          <div className="flex flex-row h-[10%] justify-center items-center text-2xl font-lora text-gray-500 gap-8 md:gap-16 xl:gap-32 2xl:gap-40">
            <p className="flex gap-1">
              <BsFillTelephoneFill size={30} />
              (619) 381-8593
            </p>
            <p className="flex gap-2">
              <FaEnvelope size={30} />
              BoniFacioF12@gmail.com
            </p>
          </div>
          {/* <div className="flex h-[650px] w-full justify-center items-center">
              <div className="flex h-[623px] w-[621px] relative justify-center items-center text-center ">
                <button
                  className="carousel-button left"
                  onClick={() => move("left")}
                >&#8249;</button>
                <button
                  className="carousel-button right"
                  onClick={() => move("right")}
                >
                  &#8250;
                </button>
                <div className="h-full w-full relative slider rounded-[3rem]">
                  <Image
                    className="slide prev"
                    src="/2.jpg"
                    alt="construction"
                    layout="intrinsic"
                    height={623}
                    width={621}
                  />
                  <Image
                    className="slide current"
                    src="/1.jpg"
                    alt="construction"
                    layout="intrinsic"
                    height={623}
                    width={621}
                  />
                  <Image
                    className="slide next"
                    src="/2.jpg"
                    alt="construction"
                    layout="intrinsic"
                    height={623}
                    width={621}
                  />
                </div>
            </div>
          </div> */}
          <div className="text-3xl mt-58">
            Fiscal & Co. Construction is a premiere general company located in
            San Diego, CA. We specialize in new construction projects.
          </div>
          {/* <div className="absolute bottom-[10%] left-[44%] flex flex-col justify-center items-center h-10 text-2xl footer-fade">
            <p>Se habla Español!</p>
            <p>619-123-4567</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
