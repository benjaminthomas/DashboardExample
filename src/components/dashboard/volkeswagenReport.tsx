import { vwReports } from "../../data";
import Card from "./ui/cards/card";
import CardTitle from "./ui/cards/cardTitle";

export default function VolkeswagenReport() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-stroke dark:border-strokedark">
        <CardTitle>VW/Amports</CardTitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {vwReports.map((report) => (
          <Card key={report.id} {...report} />
        ))}
      </div>
    </>
  );
}
