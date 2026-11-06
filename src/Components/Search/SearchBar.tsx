import desktopBg from "../../assets/images/pattern-bg-desktop.png";
import searchArrow from "../../assets/images/icon-arrow.svg";

export default function SearchBar() {
  return (
    <div className="relative h-64 w-full">
      <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-rubik text-4xl font-semibold tracking-wide text-white">
        Ip Address Tracker
      </h3>
      <img
        src={desktopBg}
        className="inset-0 h-full w-full"
        alt="background image"
      />
      <div className="absolute top-3/4 left-1/2 flex -translate-x-1/2 -translate-y-1/2">
        <form action="" className="w-76 rounded-lg bg-white px-4 py-3">
          <input type="text" placeholder="Search for any IP address" />
        </form>
        <button className="rounded-lg bg-black px-4 py-3">
          <img src={searchArrow} alt="search" />
        </button>
      </div>
    </div>
  );
}
