import { inngest } from "./client";

export const helloworld = inngest.createFunction(
  { 
    id: "hello-world", 
    triggers: [{ event: "test/hello.world" }] 
  }, // Argument 1: Config with triggers
  async ({ step }) => { // Argument 2: The handler function
    await step.sleep("wait-a-moment", "2s");

    return {
      message: "Hello from Inngest!",
    };
  }
);