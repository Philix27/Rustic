"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import superjson from "superjson";

export default function TrpcProvider(props: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(
    () => new QueryClient()
    // trpc.createClient({
    //   links: [
    //     httpBatchLink({
    //       url: "http://localhost:3010/api/trpc",
    //     }),
    //   ],
    //   transformer: superjson,
    //  })
  );
  // return (
  // <trpc.Provider client={trpcClient} queryClient={queryClient}>
  {
    /* <QueryClientProvider client={queryClient}> */
  }

  //   </QueryClientProvider>
  // </trpc.Provider>
  // );
  return <> {props.children}</>;
}
