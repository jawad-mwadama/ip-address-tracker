import React from "react";

export default function Results() {
  return (
    <div className="absolute top-[32%] left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white">
      <div className="flex p-8">
        <div className="border-r-2 border-black/20 pr-4">
          <span className="text-sm font-bold tracking-wider text-slate-300">
            Ip Address
          </span>
          <h3 className="pt-2 text-xl font-bold">192.212.174.101</h3>
        </div>

        <div className="border-r-2 border-black/20 pr-4">
          <span className="text-sm font-bold tracking-wider text-slate-300">
            Location
          </span>
          <h3 className="pt-2 text-xl font-bold">Brooklyn, Ny, 101</h3>
        </div>

        <div className="border-r-2 border-black/20 pr-4">
          <span className="text-sm font-bold tracking-wider text-slate-300">
            TimeZone
          </span>
          <h3 className="pt-2 text-xl font-bold">UTC-05:00</h3>
        </div>

        <div className="border-r-2 border-black/20 pr-4">
          <span className="text-sm font-bold tracking-wider text-slate-300">
            ISP
          </span>
          <h3 className="pt-2 text-xl font-bold">SpaceX Starlink</h3>
        </div>
      </div>
    </div>
  );
}
