import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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

  const imagesArray = ['/1.jpg', '/2.jpg', '/1.jpg', '/2.jpg']
  return (
    <>
      <div className="flex flex-col  xl:w-[90%] 2xl:w-[80%] justify-self-center items-center">
        <div className="flex h-full w-full flex-col gap-6 sm:gap-12 pt-4">
          <div className="flex flex-col w-full xl:flex-row">
            <div className="flex flex-col w-full xl:w-1/2 ">
              <h3
                className="flex justify-center xl:justify-start home-header header-fade underline decoration-[#960018] 
              decoration-[6px] gap-0 leading-none text-[68px] sm:text-[90px]"
              >
                Fiscal & Co. <br />{" "}
              </h3>
              <div className="flex justify-center xl:justify-start font-julius text-5xl sm:text-6xl header-fade leading-none">
                Construction
              </div>
            </div>
            <div className="flex flex-col w-full xl:w-1/2  overflow-hidden justify-start items-start xl:justify-end xl:items-end">
              <h2 className="flex w-full home-description h-auto description-fade text-lg sm:text-2xl justify-center items-center">
                Honesty - Reliability - Superior craftsmanship.
              </h2>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row h-[10%] justify-center items-center text-md sm:text-2xl font-lora text-gray-500 gap-2 sm:gap-8 md:gap-16 xl:gap-32 2xl:gap-40">
            <p className="flex gap-1">
              <BsFillTelephoneFill size={30} />
              (619) 381-8593
            </p>
            <p className="flex gap-2">
              <FaEnvelope size={30} />
              BoniFacioF12@gmail.com
            </p>
          </div>
          <div className="text-xl sm:text-3xl px-4">
            Fiscal & Co. Construction is a premiere general company located in
            San Diego, CA. We specialize in new construction projects.
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-3 h-full w-full justify-evenly items-center px-3">
          {imagesArray.map((imageSource, index) => { return ( 
            <div key={index} className="flex h-full w-full justify-evenly relative items-center">
              <Link href={imageSource}>
                <Image
                    className="h-auto w-auto object-cover rounded-lg border-[#ddd] border hover:border-[#84add6]
                    hover:-translate-y-[4px] transition-all duration-300 ease-in-out"
                    src={imageSource}
                    alt="construction"
                    width={1246}
                    height={1242}
                    />
              </Link>
            </div> )})}          
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
