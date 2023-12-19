import Chart from "../graphics/chart";
import Reports from "../reports";
import Breadcrumb from "../ui/breadcrumbs";
import VolkeswagenReport from "../volkeswagenReport";

export default function Metrics() {
  return (
    <>
      <Breadcrumb pageName="Metrics" />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Chart />
      </div>
      <div className="mt-4 md:mt-6 2xl:mt-7.5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <Reports />
        <VolkeswagenReport />
      </div>
    </>
  );
}
