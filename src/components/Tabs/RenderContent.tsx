
import React, { Fragment, useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { proxy, useSnapshot } from "valtio";
import { useEmail } from ".";
import { Rating as ReactRating } from '@smastrom/react-rating'

export const formData = proxy<any>({});

export default function RenderContent(props: { onAction: () => void }) {
  const useEmailSnapshot = useSnapshot(useEmail)

  const [rating, setRating] = useState(0)

  const generatePayload = (action: string) => {
    const payload = { action, rating, ...formData, ...useEmail.emails[useEmail.currentPage - 1] }
    console.log(payload)
  }

  return (
    <div className="flex flex-wrap flex-col items-center gap-4">
      <div className="flex w-full flex-col">
        {useEmailSnapshot.emails[useEmailSnapshot.currentPage - 1]?.descriptions.map((description: any) => <div><strong>{description.label} :</strong> {useEmailSnapshot.emails[useEmailSnapshot.currentPage - 1][description.key]}</div>)}
      </div>
      <div className="flex w-full flex-wrap gap-4 items-end justify-start">
        {useEmailSnapshot.emails[useEmailSnapshot.currentPage - 1]?.inputs.map((input: any) => <Fragment>

          {input.type === 'rating' ? <ReactRating items={input.stars || 4} style={{ maxWidth: 200, height: 30 }} value={rating} onChange={setRating} /> : <Fragment />}
          {input.type === 'text' ? <Input onValueChange={(value) => formData[input.responseKey] = value} placeholder={input.label} /> : <Fragment />}
          {input.type === 'textarea' ? <Textarea onValueChange={(value) => formData[input.responseKey] = value} label={input.label} placeholder={input.placeholder} labelPlacement="outside" /> : <Fragment />}

        </Fragment >)}
      </div>
      <div className="flex w-full flex-wrap gap-4 items-end justify-end">
        {useEmailSnapshot.emails[useEmailSnapshot.currentPage - 1]?.actions.map((action: any) => <Button onClick={() => {
          generatePayload(action.action)
          props.onAction()
        }} {...action.buttonProps}>{action.label}</Button>)}
      </div>
    </div>
  );
} 