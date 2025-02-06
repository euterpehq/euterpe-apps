// File: /app/api/purchase/route.ts
import { handlePurchase } from "@/lib/actions/reward/airtime";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { phoneNumber, amount } = await req.json();

    if (!phoneNumber || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    return NextResponse.json({ error: "Purchase failed" }, { status: 500 });
    // const response = await handlePurchase(phoneNumber, amount);
    // return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Purchase failed" }, { status: 500 });
  }
}
