import type { LocationData } from "../../types/location";

type Props = {
  address: LocationData | null;
};

export default function Results({ address }: Props) {
  return (
    <section className="absolute top-[40%] left-1/2 z-10 w-xs -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-white p-2 sm:top-[32%] sm:flex sm:w-2xl sm:flex-row md:w-3xl md:p-12">
      <div className="my-2 sm:my-0">
        <p className="text-xs font-bold text-gray-400 uppercase">IP Address</p>

        <h2 className="text-xl font-bold">{address?.ip ?? "—"}</h2>
      </div>

      <div className="my-2 sm:my-0">
        <p className="text-xs font-bold text-gray-400 uppercase">Location</p>

        <h2 className="text-xl font-bold">
          {address
            ? `${address.location.city}, ${address.location.region}`
            : "—"}
        </h2>
      </div>

      <div className="my-2 sm:my-0">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          Timezone
        </p>

        <h2 className="text-xl font-bold">
          {address ? `UTC ${address.location.timezone}` : "—"}
        </h2>
      </div>

      <div className="my-2 sm:my-0">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          ISP
        </p>

        <h2 className="text-xl font-bold">{address?.isp ?? "—"}</h2>
      </div>
    </section>
  );
}
