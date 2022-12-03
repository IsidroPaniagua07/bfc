import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center h-full w-full p-4">
        <div className="flex flex-col h-[10%] justify-center items-center text-2xl font-lora text-gray-500">
          <p className="flex gap">
            <BsFillTelephoneFill size={30} />
            (619)381-8593
          </p>
          <p className="flex gap-2">
            <FaEnvelope size={30} />
            BoniFacioF12@gmail.com
          </p>
        </div>
        <div className="flex flex-col w-4/5 h-[90%] ">
          <div className="flex h-full flex-col">
            <div>
              <h3 className="home-header header-fade underline decoration-[#960018] decoration-[6px] gap-0 leading-none">
                Fiscal & Co. <br />{" "}
              </h3>
              <div className="font-julius text-6xl header-fade leading-none">
                Construction
              </div>
              <div className="flex justify-end">
                <p className="home-description h-full w-1/2 description-fade text-2xl ">
                  Honesty, reliability, and superior craftsmanship.
                </p>
              </div>
            </div>
            <div className="flex h-full w-full justify-center items-center">
              <div className="flex h-4/5 w-[50%] border-black border relative overflow-hidden">
                <Image
                  className="slide prev"
                  src="/1.jpg"
                  alt="landscaping"
                  layout="intrinsic"
                  height={1246}
                  width={1242}
                  />
                <Image
                  className="slide current"
                  src="/1.jpg"
                  alt="landscaping"
                  layout="intrinsic"
                  height={1246}
                  width={1242}
                  />
                <Image
                  className="slide next" 
                  src="/1.jpg"
                  alt="landscaping"
                  layout="intrinsic"
                  height={1246}
                  width={1242}
                />
              </div>
            </div>
            <div className="text-3xl">
              Fiscal & Co. Construction is a premiere general company located in
              San Diego, CA. We specialize in new construction
            </div>
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
