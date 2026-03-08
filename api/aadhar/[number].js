const https = require('https');
const http = require('http');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { number } = req.query;
  if (!number) {
    return res.status(400).json({ success: false, message: 'Number is required' });
  }

  const API_KEY = 'xb1ns_63aa6a1597eeda9cea1ac72e4aa24fd1';
  const API_URL = `http://51.75.118.170:20067/api/aadhar/${number}?key=${API_KEY}`;

  try {
    const data = await fetchJSON(API_URL);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Proxy error: ' + err.message });
  }
};

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (resp) => {
      let raw = '';
      resp.on('data', chunk => raw += chunk);
      resp.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { reject(new Error('Invalid JSON from API: ' + raw.substring(0, 100))); }
      });
    }).on('error', reject);
  });
}
