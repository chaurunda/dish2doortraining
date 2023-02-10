// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRandomInt } from '@/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const max = 5
  const imageName = getRandomInt(0, max)
  res.status(200).json({ url: `/enigma/${imageName}.png` })
}
