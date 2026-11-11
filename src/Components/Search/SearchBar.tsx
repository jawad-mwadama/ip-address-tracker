import { useState } from "react";

import desktopBg from "../../assets/images/pattern-bg-desktop.png";
import mobileBg from "../../assets/images/pattern-bg-mobile.png";
import searchArrow from "../../assets/images/icon-arrow.svg";

type Props = {
  onSearch: (ip: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [ipAddress, setIpAddress] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ip = ipAddress.trim();
    if (!ip) return;

    onSearch(ip);
  };

  return (
    <div className="relative h-40 w-full md:h-64">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileBg} />

        <img
          src={desktopBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col items-center gap-6 pt-6">
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          IP Address Tracker
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex w-64 overflow-hidden rounded-lg bg-white md:w-96"
        >
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="Search for any IP address"
            className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
          />

          <button
            type="submit"
            className="bg-black px-5 py-3 hover:bg-gray-800"
          >
            <img src={searchArrow} alt="Search" />
          </button>
        </form>
      </div>
    </div>
  );
}
