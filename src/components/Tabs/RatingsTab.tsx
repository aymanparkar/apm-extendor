
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

import { Rating as ReactRating } from '@smastrom/react-rating'

export default function RatingsTab() {
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <div className="flex flex-wrap flex-row items-center gap-4">
      <div className="flex w-full flex-col">
        <div>Employee ID: 1132874</div>
        <div>Employee Name: Paksham Sharma</div>
        <div>Financial Year: 2019-2020</div>
      </div>
      <div className="flex w-full flex-wrap gap-4 items-center justify-center">
        <ReactRating style={{ maxWidth: 200, height: 30 }} value={rating} onChange={setRating} />
      </div>
      <div className="flex w-full flex-wrap gap-4 items-end justify-end">
        <Button color="success">
          Submit
        </Button>
      </div>
    </div>
  );
} 