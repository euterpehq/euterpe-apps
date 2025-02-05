import "server-only";
import africastalking from "africastalking";

export async function handlePurchase(phoneNumber: string, amount: number) {
  const API_KEY = process.env.AFRICASTALKING_API_KEY;
  const USERNAME = process.env.AFRICASTALKING_USERNAME;

  if (!API_KEY || !USERNAME) {
    throw new Error("Missing Africa's Talking API credentials");
  }

  // Initialize Africa's Talking SDK
  const AT = africastalking({ apiKey: API_KEY, username: USERNAME });
  const airtime = {} as any;

  // Ensure correct data format
  const recipients = [
    {
      phoneNumber,
      currencyCode: "NGN",
      amount: amount.toFixed(2).toString(), // Convert amount to string
    },
  ];

  try {
    // ⚠️ Remove the headers parameter
    const response = await airtime.send({ recipients });
    console.log("Sending request:", JSON.stringify({ recipients }, null, 2));
    return response;
  } catch (error) {
    console.error("Airtime purchase failed:", error);
    throw error;
  }
}
