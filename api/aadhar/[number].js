export default async function handler(req, res) {
  const { number } = req.query;
  const API_KEY = 'xb1ns_63aa6a1597eeda9cea1ac72e4aa24fd1';
  const API_URL = `http://51.75.118.170:20067/api/aadhar/${number}?key=${API_KEY}`;

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) {
      return res.status(response.status).json({ success: false, message: 'Upstream API error' });
    }

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Proxy error: ' + err.message });
  }
}
