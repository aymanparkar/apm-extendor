// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).send('Method Not Allowed');
  }

  const responseData = [
    {
      type: 'leaveApproval',
      config: {
        descriptions: [ // descriptions are non editable fields
          { label: "Employee BRID", key: "employeeBRID" },
          { label: "Employee Name", key: "employeeName" },
          { label: "Approver BRID", key: "approverBRID" },
          { label: "Approver Name", key: "approverName" },
          { label: "Date from", key: "dateFrom" },
          { label: "Date to", key: "dateTo" },
          { label: "Leave reason", key: "leaveReason" },
          // { label: "Remaining Leaves", key: "remainingLeaves" },
        ],
        inputs: [
          { type: "textarea", label: "Comments", placeholder: "Enter your comments", responseKey: 'comments' },
        ],
        actions: [
          { label: 'Reject', buttonProps: { variant: "bordered", color: 'danger' }, action: 'reject' },
          { label: 'Approve', buttonProps: { color: 'success' }, action: 'approve' },
        ]
      },
      data: [...new Array(5)].map((_) => {
        const employeeName = faker.person.firstName() + ' ' + faker.person.lastName();
        // const employeeEmail = faker.internet.email({ firstName: employeeName.split(' ')[0], lastName: employeeName.split(' ')[1] });
        const managerName = faker.person.firstName() + ' ' + faker.person.lastName();
        // const managerEmail = faker.internet.email({ firstName: managerName.split(' ')[0], lastName: managerName.split(' ')[1] });
        return {
          employeeBRID: Math.floor(Math.random() * 1000000),
          employeeName: employeeName,
          approverBRID: Math.floor(Math.random() * 1000000),
          approverName: managerName,
          leaveReason: "awfioawjfioawejf",
          dateFrom: faker.date.past(),
          dateTo: faker.date.future(),
          durationDays: Math.floor(Math.random() * 100),
          // remainingLeaves: Math.floor(Math.random() * 100),
        };
      })
    },
    {
      type: 'yearEndReview',
      config: {
        descriptions: [ // descriptions are non editable fields
          { label: "Employee BRID", key: "employeeBRID" },
          { label: "Employee Name", key: "employeeName" },
          { label: "Approver BRID", key: "approverBRID" },
          { label: "Approver Name", key: "approverName" },
        ],
        inputs: [
          { type: "rating", stars: 4 },
          { type: "textarea", label: "Comments", placeholder: "Enter your comments", responseKey: 'comments' },
          // { type: "textarea", label: "awefawe", placeholder: "Enter awefweayour comments" },
        ],
        actions: [
          { label: 'Submit', buttonProps: { color: 'success' }, action: 'submit' }
        ]
      },
      data: [...new Array(5)].map((_) => {
        const employeeName = faker.person.firstName() + ' ' + faker.person.lastName();
        // const employeeEmail = faker.internet.email({ firstName: employeeName.split(' ')[0], lastName: employeeName.split(' ')[1] });
        const managerName = faker.person.firstName() + ' ' + faker.person.lastName();
        // const managerEmail = faker.internet.email({ firstName: managerName.split(' ')[0], lastName: managerName.split(' ')[1] });
        return {
          employeeBRID: Math.floor(Math.random() * 1000000),
          employeeName: employeeName,
          approverBRID: Math.floor(Math.random() * 1000000),
          approverName: managerName,
          leaveReason: "awfioawjfioawejf",
          dateFrom: faker.date.past(),
          dateTo: faker.date.future(),
          durationDays: Math.floor(Math.random() * 100),
        };
      })
    }
  ]

  res.status(200).json(responseData)
}
