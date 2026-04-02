import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";

const Page = async () => {
    await requireAuth();

    // Now 'getUsers' will be recognized by TypeScript
    const data = await caller.getUsers();

    return (
        /* Changed min-w-screen to w-full and removed justify-center to prevent "dead space" */
        <div className="min-h-screen w-full flex flex-col items-center pt-20 gap-y-6">
            <h1 className="text-xl font-bold">protected server component</h1>
            
            <div className="bg-slate-100 p-4 rounded-md border max-w-4xl w-full overflow-auto">
                {/* JSON.stringify(data) can be very wide; max-w-4xl keeps it contained */}
                <pre className="whitespace-pre-wrap break-all">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>

            <LogoutButton />
        </div>
    );
};

export default Page;