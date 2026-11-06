import desktopBg from "../../assets/images/pattern-bg-desktop.png";
import mobileBg from "../../assets/images/pattern-bg-mobile.png";
import searchArrow from "../../assets/images/icon-arrow.svg";

export default function SearchBar() {
  return (
    <div className="relative h-64 w-full">
      <h3 className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-rubik text-xl font-semibold tracking-wide text-white sm:text-2xl md:text-3xl">
        Ip Address Tracker
      </h3>
      <img
        src={desktopBg}
        className="inset-0 hidden h-full w-full md:block"
        alt="background image"
      />
      <img
        src={mobileBg}
        className="inset-0 block h-full w-full object-cover md:hidden"
      />
      <div className="absolute top-2/4 left-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white">
        <form action="" className="w-64 rounded-lg bg-white px-4 py-3 md:w-96">
          <input
            type="text"
            placeholder="Search for any IP address or place"
            className="w-full whitespace-nowrap outline-none"
          />
        </form>
        <button className="hover rounded-lg bg-black px-4 py-3 hover:cursor-pointer">
          <img src={searchArrow} alt="search" />
        </button>
      </div>
    </div>
  );
}
