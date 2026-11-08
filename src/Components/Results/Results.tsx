export default function Results() {
  return (
    <div className="absolute top-[40%] left-1/2 w-xs -translate-x-1/2 -translate-y-1/2 rounded-lg border border-red-500 bg-white sm:top-[32%] sm:w-2xl md:w-3xl">
      <div className="flex flex-col gap-4 p-4 sm:p-8 md:flex-row">
        <div className="border-black/20 pr-4 md:border-r-2">
          <span className="text-xs font-bold tracking-wider text-slate-300 md:text-sm">
            Ip Address
          </span>
          <h3 className="pt-2 text-sm font-bold sm:text-xl">192.212.174.101</h3>
        </div>

        <div className="border-black/20 pr-4 md:border-r-2">
          <span className="text-xs font-bold tracking-wider text-slate-300 md:text-sm">
            Location
          </span>
          <h3 className="pt-2 text-sm font-bold sm:text-xl">
            Brooklyn, Ny, 101
          </h3>
        </div>

        <div className="border-black/20 pr-4 md:border-r-2">
          <span className="text-xs font-bold tracking-wider text-slate-300 md:text-sm">
            TimeZone
          </span>
          <h3 className="pt-2 text-sm font-bold sm:text-xl">UTC-05:00</h3>
        </div>

        <div className="pr-4">
          <span className="text-sm font-bold tracking-wider text-slate-300">
            ISP
          </span>
          <h3 className="pt-2 text-sm font-bold sm:text-xl">SpaceX Starlink</h3>
        </div>
      </div>
    </div>
  );
}
