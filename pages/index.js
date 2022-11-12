export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full">
        <div className="flex flex-col w-4/5 h-4/5 ">
          <div className="flex h-full flex-col gap-20">
            <h3 className="home-header header-fade">Boni Fiscal</h3>
            <div className="flex justify-end">
              <p className="home-description h-full w-1/2 description-fade text-2xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lect
                us magna fringilla urna porttitor rhoncus dolor purus non enim.
                Dictum non consectetur a erat nam at lectus. Morbi tincidunt
                augue interdum velit euismod in.
              </p>
            </div>
          </div>
          <div className="absolute bottom-[10%] left-[44%] flex flex-col justify-center items-center h-10 text-2xl footer-fade">
            <p>Se habla Español!</p>
            <p>619-123-4567</p>
          </div>
        </div>
      </div>
    </>
  );
}
