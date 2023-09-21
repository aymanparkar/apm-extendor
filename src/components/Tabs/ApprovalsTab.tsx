
import React from "react";
import { Button } from "@nextui-org/react";

export default function ApprovalsTab() {
  return (
    <div className="flex flex-wrap flex-col items-center gap-4">
      <div className="flex w-full flex-col">
        <div>Employee ID: 1132874</div>
        <div>Employee Name: Paksham Sharma</div>
        <div>Data From: 28/04/2948</div>
        <div>Data To: 28/04/2948</div>
        <div>Duration (days): 23</div>
      </div>
      <div className="flex w-full flex-wrap gap-4 items-end justify-end">
        <Button color="danger" variant="bordered">
          Reject
        </Button>
        <Button color="success">
          Approve
        </Button>
      </div>
    </div>
  );
} 