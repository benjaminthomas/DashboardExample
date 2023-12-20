import { useMemo } from "react";
import Breadcrumb from "../../ui/breadcrumbs";
import DataTable from "../../ui/tables/datatable";
import mData from "../../../../tableData.json";
import { CellContext } from "@tanstack/react-table";

type UserData = {
  id: number;
  API: string;
  VIN: string;
  CompanyCode: number | string;
  payload: string;
  size: string;
  status: string;
  responsetotheclient: string;
  datetime: string;
  viewresend: string;
};
export default function Incoming() {
  const data = useMemo(() => mData, []);
  function handleViewResend(value: string) {
    if (value === "Resend") {
      return <button className="text-green-500 hover:underline">Resend</button>;
    } else {
      return (
        <button className="mr-2 text-blue-500 hover:underline">View</button>
      );
    }
  }
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "API",
      accessorKey: "API",
    },
    {
      header: "VIN",
      accessorKey: "VIN",
    },
    {
      header: "Company Code",
      accessorKey: "CompanyCode",
    },
    {
      header: "Payload",
      accessorKey: "payload",
    },
    {
      header: "Size",
      accessorKey: "size",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Response to client",
      accessorKey: "responsetotheclient",
    },
    {
      header: "Date and Time",
      accessorKey: "datetime",
    },
    {
      header: "View/Resend",
      accessorKey: "viewresend",
      cell: (props: CellContext<UserData, string>) => (
        <div className="flex items-center">
          {handleViewResend(props.row.original.viewresend)}
        </div>
      ),
    },
  ];
  return (
    <>
      <Breadcrumb pageName="Volkswagen" sectionName="Incoming" />
      <DataTable data={data} columns={columns} />
    </>
  );
}
