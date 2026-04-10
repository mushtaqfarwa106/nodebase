import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { helloworld } from "@/inngest/functions"; // Import your function here

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloworld, // Register the function here
  ],
});