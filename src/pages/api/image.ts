// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { List } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'
import { responseList } from './response'
import { getRandomInt } from '@/utils/utils'

type Data = {
  url: string
  response: List
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const max = 5
  const imageName = getRandomInt(0, max)
  const response = responseList[imageName]
  res.status(200).json({ url: `/enigma/${imageName}.png`, response: response })
}
