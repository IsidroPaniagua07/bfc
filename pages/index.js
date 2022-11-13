import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center h-[100vh] w-full bg-slate-100">
        <div className="flex flex-col justify-center items-center my-10 text-2xl font-lora text-gray-500">
          <p className="flex gap">
            <BsFillTelephoneFill size={30} />
            (619)381-8593
          </p>
          <p className="flex gap-2">
            <FaEnvelope size={30} />
            BoniFacioF12@gmail.com
          </p>
        </div>
        <div className="flex flex-col w-4/5 h-4/5 ">
          <div className="flex h-full flex-col">
            <h3 className="home-header header-fade underline decoration-[#960018] decoration-[6px] gap-0 leading-none">Fiscal & Co. <br/>  </h3>
            <div className="font-julius text-6xl header-fade leading-none">
            Construction
            </div>
            <div className="flex justify-end">
              <p className="home-description h-full w-1/2 description-fade text-2xl ">
                Honesty, reliability, and superior craftsmanship.
              </p>
            </div>
          </div>
          <div className="absolute bottom-[10%] left-[44%] flex flex-col justify-center items-center h-10 text-2xl footer-fade">
            {/* <p>Se habla Español!</p> */}
            {/* <p>619-123-4567</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
