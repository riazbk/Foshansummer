import * as https from 'https';

const ids = [
  '1541888081622-1d54bd25b161', // Building
  '1581858326456-ebde27dfa4b5', // Tiles
  '1522771731475-6e9e192c7339', // Soft furnishings
  '1503387762-592deb58ef4e', // Contracting
  '1504307651254-35680f356f58',  // Custom
  '1593941707882-a5bba14938cb',  // EV
  // backup ids:
  '1486406146926-c627a92ad1ab',
  '1497366216548-37526070297c',
  '1600585154340-be6161a56a0c',
  '1586023492125-27b2c045efd7',
  '1556910103-1c02745aae4d',
  '1620626011761-996317b8d101',
  '1618221195710-dd6b41faaea6'
];

async function checkId(id: string) {
  return new Promise((resolve) => {
    https.get(`https://images.unsplash.com/photo-${id}?w=10&q=10`, (res) => {
      resolve({ id, status: res.statusCode });
    }).on('error', () => resolve({ id, status: 500 }));
  });
}

async function run() {
  for (const id of ids) {
    const res = await checkId(id) as any;
    console.log(`ID ${res.id}: ${res.status}`);
  }
}
run();
