import { useMemo } from "react";
import isuzuData from "../../../isuzuTableData.json";
import { CellContext } from "@tanstack/react-table";
import Breadcrumb from "../ui/breadcrumbs";
import DataTable from "../ui/tables/datatable";

type UserData = {
  id: number;
  endpoint: string;
  payload: string;
  size: number | string;
  status: string;
  response: string;
  exceptiondetails: string | null;
  datetime: string;
  viewresend: string;
};
export default function Isuzu() {
  const data = useMemo(() => isuzuData, []);
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
      header: "Endpoint",
      accessorKey: "endpoint",
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
      header: "Size",
      accessorKey: "size",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Response",
      accessorKey: "response",
    },
    {
      header: "Exception Details",
      accessorKey: "exceptiondetails",
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
