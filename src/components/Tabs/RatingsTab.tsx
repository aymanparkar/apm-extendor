
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

import { Rating as ReactRating } from '@smastrom/react-rating'
import moment from "moment";

export default function RatingsTab(props: { email: any, onSubmit: () => void }) {
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <div className="flex flex-wrap flex-row items-center gap-4">
      <div className="flex w-full flex-col">
        <div>Employee ID: {props.email?.employeeID}</div>
        <div>Employee Name: {props.email?.employeeName}</div>
        <div>Period: {moment(props.email?.dateFrom).format("MMMM-yyyy")} - {moment(props.email?.dateTo).format("MMMM-yyyy")}</div>
      </div>
      <div className="flex w-full flex-wrap gap-4 items-center justify-center">
        <ReactRating style={{ maxWidth: 200, height: 30 }} value={rating} onChange={setRating} />
      </div>
      <div className="flex w-full flex-wrap gap-4 items-end justify-end">
        <Button color="success" onClick={props.onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
} 