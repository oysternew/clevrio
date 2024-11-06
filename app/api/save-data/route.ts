import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const { name, email } = await req.json();

  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), 'data', 'subscribers.json');

  // Read existing data from the JSON file
  let subscribers = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    subscribers = JSON.parse(fileData);
  }

  // Add the new subscriber
  subscribers.push({ name, email });

  // Write the updated subscribers list back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));

  return NextResponse.json({ message: 'Data saved successfully' });
}
