import postgres from 'postgres';
import { NextResponse } from 'next/server';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const conn = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
});

// Function to fetch users from the database
async function getUsers() {
  return await conn`SELECT * FROM "User"`;
}

// Export the API route function
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // Fetch users when the request method is GET
      const users = await getUsers();
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      // Parse the incoming request body when the request method is POST
      const { name, email, password } = req.body;

      // Example: Insert a new user into the database
      await conn`
        INSERT INTO "User" (name, email, password)
        VALUES (${name}, ${email}, ${password})
      `;

      res.status(201).json({ message: 'User created' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
