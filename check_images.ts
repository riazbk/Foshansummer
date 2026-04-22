import * as https from 'https';

const ids = [
  '1503387762-592deb58ef4e', // Contracting
  '1620626011761-996317b8d101', // Bathroom
  '1589939705384-5185137a7f0f', // Building
  '1505691938895-1758d7feb511', // Tiles
  '1540932239986-30128078f3c5', // Lighting
  '1522771731475-6e9e192c7339', // Soft furnishings
  '1581091226825-a6a2a5aee158', // Manufacturing
  '1593941707882-a5bba14938cb', // EV charging
  '1616423640778-28d1b5022a10', // EV charging
  '1513694203232-719a280e022f', // Decoration
  '1504307651254-35680f356f58'  // Custom
];

async function checkId(id: string) {
  return new Promise((resolve) => {
    https.get(`https://images.unsplash.com/photo-${id}?w=192&q=10`, (res) => {
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
