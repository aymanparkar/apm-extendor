
import React from "react";
import { Button } from "@nextui-org/react";
import moment from "moment";

export default function ApprovalsTab(props: { email: any, onApprove: () => void, onReject: () => void }) {
  return (
    <div className="flex flex-wrap flex-col items-center gap-4">
      <div className="flex w-full flex-col">
        <div>Employee ID: {props.email?.employeeID}</div>
        <div>Employee Name: {props.email?.employeeName}</div>
        <div>Employee Email: {props.email?.employeeEmail}</div>
        <div>Data From: {moment(props.email?.dateFrom).format("DD-MM-yyyy")}</div>
        <div>Data To: {moment(props.email?.dateTo).format("DD-MM-yyyy")}</div>
        <div>Duration (days): {props.email?.durationDays}</div>
      </div>
      <div className="flex w-full flex-wrap gap-4 items-end justify-end">
        <Button color="danger" variant="bordered" onClick={props.onReject}>
          Reject
        </Button>
        <Button color="success" onClick={props.onApprove}>
          Approve
        </Button>
      </div>
    </div>
  );
} 