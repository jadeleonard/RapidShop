import postgres from "postgres";
import { NextResponse } from "next/server";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const conn = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
});

async function Shoes() {
  return conn`SELECT * FROM shoes`;
}

export async function GET(req, res) {
  try {
    const response = await Shoes();
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

