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

  const sampleEmailReadingResponse = [...new Array(69)].map((_) => {
    const employeeName = faker.person.firstName() + ' ' + faker.person.lastName();
    const employeeEmail = faker.internet.email({ firstName: employeeName.split(' ')[0], lastName: employeeName.split(' ')[1] });
    const managerName = faker.person.firstName() + ' ' + faker.person.lastName();
    const managerEmail = faker.internet.email({ firstName: managerName.split(' ')[0], lastName: managerName.split(' ')[1] });

    return {
      type: Math.random() > 0.5 ? 'rating' : 'approval',
      employeeID: Math.floor(Math.random() * 1000000),
      employeeName: employeeName,
      employeeEmail: employeeEmail,
      managerID: Math.floor(Math.random() * 1000000),
      managerName: managerName,
      managerEmail: managerEmail,
      dateFrom: faker.date.past(),
      dateTo: faker.date.future(),
      durationDays: Math.floor(Math.random() * 100),
    };
  });

  res.status(200).json(sampleEmailReadingResponse)
}
