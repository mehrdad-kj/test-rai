import ImageGallery from "../assets/image-gallery.png";
import Cryptobase from "../assets/Cryptobase.png";
import Disney from "../assets/disney.png";

const Portfolio = () => {
  return (
    <div
      id="PORTFOLIO"
      className="w-full h-[70%] text-[#C3CEDA] bg-sky-950 pt-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ffff2e]">
            Portfolio
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Disney})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-[#C3CEDA] tracking-wider">
                Disney+ Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/mehrdad-kj/ToDo-List"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C3CEDA] text-[#0C4160] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Cryptobase})` }}
            className="order-0 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-[#C3CEDA] tracking-wider">
                CryptoBase Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/mehrdad-kj/Crypto-Project"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C3CEDA] text-[#0C4160] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ImageGallery})` }}
            className="order-0 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-[#C3CEDA] tracking-wider">
                Image Gallery
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/mehrdad-kj/Image-Gallery"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C3CEDA] text-[#0C4160] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
