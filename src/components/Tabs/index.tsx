import React, { Fragment, useEffect, useState } from "react";
import { proxy, useSnapshot } from "valtio";

import { Card, CardBody, Pagination } from "@nextui-org/react";
import RenderContent from "./RenderContent";

export const useEmail = proxy<any>({
  emails: [],
  currentPage: 1
});

export default function TabsComponent() {
  const useEmailSnapshot = useSnapshot(useEmail)

  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetch("/api/config-emails")
      .then((response) => response.json())
      .then((data) => {
        useEmail.emails = data.flatMap((renderType: any) => renderType.data.map((email: any) => ({ ...email, ...renderType.config })))
      }).then(() => {
        setTotalPages(useEmail.emails.length)
      });
  }, [])

  return (
    <Fragment>
      <div className="flex lg:w-1/2 sm:w-full flex-col mb-4">
        <Card>
          <CardBody>
            {useEmailSnapshot.emails.length ? <RenderContent onAction={() => {
              useEmail.emails.splice(useEmailSnapshot.currentPage - 1, 1);
            }} /> : <div className="flex justify-center items-center" style={{ minHeight: 200 }}>No pending actions items</div>}
          </CardBody>
        </Card>
      </div>
      {useEmailSnapshot.emails.length ? <div className="flex w-full justify-center">
        <Pagination
          loop
          initialPage={1}
          page={useEmailSnapshot.currentPage}
          total={useEmailSnapshot.emails.length || 0}
          onChange={(value) => useEmail.currentPage = value}
          {...(totalPages > 5 ? { showControls: true } : { showControls: false })}
        />
      </div> : <Fragment />}

    </Fragment >
  );
}
