
import fs from 'node:fs/promises';
import path from 'node:path';

async function countFile(filename) {
  try {
    const filePath = path.resolve(filename);
    const content = await fs.readFile(filePath, 'utf8');

    const lines = content === ''
      ? 0
      : content.split(/\r\n|\n|\r/).length;

    const words = content.trim()
      ? content.trim().split(/\s+/).length
      : 0;

    const characters = content.length;

    console.log(`File: ${filename}`);
    console.log(`Lines: ${lines}`);
    console.log(`Words: ${words}`);
    console.log(`Characters: ${characters}`);
    console.log('--------------------');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: File "${filename}" not found.`);
    } else {
      console.error(`Error reading "${filename}": ${error.message}`);
    }

    process.exitCode = 1;
  }
}

async function main() {
  const filename = process.argv[2];

  if (!filename) {
    console.log('Please provide a filename.');
    console.log('Usage: npm start -- sample.txt');
    process.exitCode = 1;
    return;
  }

  await countFile(filename);
}

main();
