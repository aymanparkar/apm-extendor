import React, { Fragment, useEffect, useState } from "react";

import { proxy, useSnapshot } from "valtio";

import { Tabs, Tab, Card, CardBody, Pagination, Chip } from "@nextui-org/react";
import ApprovalsTab from "./ApprovalsTab";
import RatingsTab from "./RatingsTab";

const useEmail = proxy({
  emails: [],
});


export default function TabsComponent() {
  const useEmailSnapshot = useSnapshot(useEmail)

  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = React.useState<any>("approval");
  const totalPages = useEmailSnapshot.emails.filter((email: { type: string }) => email.type === selected).length ? useEmailSnapshot.emails.filter((email: { type: string }) => email.type === selected).length : 1

  const getEmailTypePages = (type: string) => useEmailSnapshot.emails.filter((email: { type: string }) => email.type === type).length

  useEffect(() => {
    fetch("/api/email")
      .then((response) => response.json())
      .then((data) => {
        useEmail.emails = data;
      });
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selected])

  return (
    <Fragment>
      <div className="flex w-full flex-col">
        <Tabs
          selectedKey={selected}
          onSelectionChange={setSelected}
          size="lg" aria-label="Options">
          <Tab key="approval" title={<div>Leave Approvals <Chip className="mx-2" variant="bordered" size="sm" color="danger">{getEmailTypePages('approval')}</Chip></div>}>
            <Card>
              <CardBody>
                <ApprovalsTab
                  onApprove={() => {
                    setCurrentPage(currPage => currPage === totalPages ? 1 : currPage + 1)
                  }}
                  onReject={() => {
                    setCurrentPage(currPage => currPage === totalPages ? 1 : currPage + 1)
                  }}
                  email={useEmailSnapshot.emails.filter((email: { type: string }) => email.type === 'approval')[currentPage - 1]} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="rating" title={<div>Employee Ratings <Chip className="mx-2" variant="bordered" size="sm" color="danger">{getEmailTypePages('rating')}</Chip></div>}>
            <Card>
              <CardBody>
                <RatingsTab
                  onSubmit={() => {
                    setCurrentPage(currPage => currPage === totalPages ? 1 : currPage + 1)
                  }}
                  email={useEmailSnapshot.emails.filter((email: { type: string }) => email.type === 'rating')[currentPage - 1]} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div className="flex w-full justify-center">
        <Pagination
          loop
          showControls
          initialPage={1}
          page={currentPage}
          total={totalPages}
          onChange={setCurrentPage} />
      </div>
    </Fragment>
  );
}
