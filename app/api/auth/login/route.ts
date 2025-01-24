import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";



const users = [
  { id: 1, email: "josemontero2002@gmail.com", password: "123", room: "Master" },
  { id: 2, email: "tenant2@example.com", password: "password123", room: "Room 102" },
];

const SECRET_KEY = process.env.SECRET_KEY || "your-secret-key";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Validate the user's credentials
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return NextResponse.json({ success: false, message: "Invalid login credentials" });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email, room: user.room },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  return NextResponse.json({ success: true, token });
}
