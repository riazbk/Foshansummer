import * as https from 'https';

const keywords = [
  'building-materials', 'tiles', 'lighting-fixtures', 'soft-furnishings', 'custom-manufacturing', 'ev-charging', 'decoration-accessories'
];

async function getPhoto(kw: string) {
  return new Promise((resolve) => {
    const req = https.get(`https://unsplash.com/s/photos/${kw}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?/g);
        if (matches && matches.length > 0) {
          const uniquePaths = [...new Set(matches)];
          resolve(uniquePaths.slice(0, 5).join('\n'));
        } else {
          resolve('No photos found ' + res.statusCode);
        }
      });
    });
    req.on('error', (e) => resolve('Error ' + e.message));
  });
}

async function run() {
  for (const kw of keywords) {
    console.log(`\n--- ${kw} ---`);
    console.log(await getPhoto(kw));
  }
}
run();
