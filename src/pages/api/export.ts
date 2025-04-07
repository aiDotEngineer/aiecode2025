import type { NextApiRequest, NextApiResponse } from 'next/types';

import { exportToCsv } from '@pkg/api/src/other/exportConnections';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url ?? '', 'http://localhost/');
    const token = url.searchParams.get('t') ?? '';
    const result = await exportToCsv(token);
    if (!result.success) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send('<p>Invalid or expired link.</p>');
      return;
    }
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="data.csv"');
    res.status(200).send(result.data);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}
