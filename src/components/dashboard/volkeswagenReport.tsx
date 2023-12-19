import { responses } from "../../data";
import Card from "./ui/card";

export default function VolkeswagenReport() {
  return (
    <>
      <div className="mb-7 flex items-center justify-between border-b border-stroke dark:border-strokedark xl:border-b-0">
        <div className="px-7.5 py-7">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Volkeswagen
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {responses.map((response) => (
          <Card key={response.id} {...response} />
        ))}
      </div>
    </>
  );
}
