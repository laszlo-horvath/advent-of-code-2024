import { readFile } from 'fs/promises';

export async function readFileAsync(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');

    const trimmedContent = content.trim();
    return trimmedContent;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}
