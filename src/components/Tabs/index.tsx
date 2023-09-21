import React, { Fragment } from "react";

import { Tabs, Tab, Card, CardBody, Pagination, Chip } from "@nextui-org/react";
import ApprovalsTab from "./ApprovalsTab";
import RatingsTab from "./RatingsTab";

export default function TabsComponent() {
  return (
    <Fragment>
      <div className="flex w-full flex-col">
        <Tabs size="lg" aria-label="Options">
          <Tab key="approvals" title={<div>Leave Approvals <Chip className="mx-2" variant="bordered" size="sm" color="danger">28</Chip></div>}>
            <Card>
              <CardBody>
                <ApprovalsTab />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="ratings" title={<div>Employee Ratings <Chip className="mx-2" variant="bordered" size="sm" color="danger">58</Chip></div>}>
            <Card>
              <CardBody>
                <RatingsTab />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <div className="flex w-full justify-center">
        <Pagination loop showControls total={5} initialPage={1} />
      </div>
    </Fragment >
  );
}
