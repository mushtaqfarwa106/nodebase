"use client";

import { Button } from "@/components/ui/button";
import { LogoutButton } from "./logout";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

const Page = () => {
  // 1. Initialize tRPC and Query Client
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  // 2. Fetch all workflows from PostgreSQL
  const { data, isLoading } = useQuery(trpc.getWorkflows.queryOptions());

  // 3. Define the "Create" action with automatic UI refresh
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      // This tells React Query to refetch the list immediately after a new one is created
      queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
    }
  }));

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6 bg-background">
      <h1 className="text-xl font-bold">My Workflows</h1>
      
      <div className="p-4 border rounded-md bg-muted/50 max-w-2xl w-full overflow-auto max-h-[400px]">
        {isLoading ? (
          <p>Loading workflows...</p>
        ) : (
          <pre className="text-xs">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>

      <div className="flex gap-x-4">
        <Button 
          disabled={create.isPending} 
          onClick={() => create.mutate()}
        >
          {create.isPending ? "Creating..." : "Create workflow"}
        </Button>
        
        <LogoutButton />
      </div>
    </div>
  );
};

export default Page;