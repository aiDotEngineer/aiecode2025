import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { utm_source } = req.query;
  
  if (utm_source && typeof utm_source === 'string') {
    res.setHeader('Set-Cookie', cookie.serialize('aie_utm_source', utm_source, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    }));
  }
  
  res.status(200).json({ success: true });
}
