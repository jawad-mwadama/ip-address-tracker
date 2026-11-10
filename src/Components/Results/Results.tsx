import type { LocationData } from "../../types/location";

type Props = {
  address: LocationData | null;
};

export default function Results({ address }: Props) {
  return (
    <section className="absolute top-[40%] left-1/2 z-10 w-xs -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white sm:top-[32%] sm:w-2xl md:w-3xl">
      <div>
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          IP Address
        </p>

        <h2 className="mt-2 text-lg font-medium">{address?.ip ?? "—"}</h2>
      </div>

      <div>
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          Location
        </p>

        <h2 className="mt-2 text-lg font-medium">
          {address
            ? `${address.location.city}, ${address.location.region}`
            : "—"}
        </h2>
      </div>

      <div>
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          Timezone
        </p>

        <h2 className="mt-2 text-lg font-medium">
          {address ? `UTC ${address.location.timezone}` : "—"}
        </h2>
      </div>

      <div>
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          ISP
        </p>

        <h2 className="mt-2 text-lg font-medium">{address?.isp ?? "—"}</h2>
      </div>
    </section>
  );
}
