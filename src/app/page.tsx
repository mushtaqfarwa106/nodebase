import { prisma } from "@/lib/db";

export default async function TestPage() {
  // This command tries to create a user in your database
  const newUser = await prisma.user.create({
    data: {
      email: `user-${Math.random()}@test.com`,
      name: "Test User",
    },
  });

  return (
    <div className="p-10">
      <h1>Database Connection Successful!</h1>
      <p>Created user with ID: {newUser.id}</p>
      <p>Email: {newUser.email}</p>
    </div>
  );
}