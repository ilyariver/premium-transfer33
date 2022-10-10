// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(500).json({message: 'sorry we only accept GET requests'})
  }
  console.log(req)
  res.status(200).json({  status: 'OK' })
}
