import React from "react";
import { AppStyles } from "@/lib";
import { Text } from "@/comps";

export function HeroSection() {
  return (
    <div
      className={` w-[50%] flex flex-col items-center justify-center text-center min-h-[80vh]`}
    >
      <Text
        className="text-7xl mb-5 text-yellow-500"
        variant={"B1"}
        style={{ color: AppStyles.colors.primary }}
      >
        Build in a weekend
      </Text>
      <Text className="text-white text-6xl mb-8" variant={"B1"}>
        Scale to millions
      </Text>
      <Text variant={"B2"} className="w-[75%] font-medium">
        Supabase is an open source Firebase alternative. Start your project with
        a Postgres database, Authentication, instant APIs, Edge Functions,
        Realtime subscriptions, Storage, and Vector embeddings.
      </Text>
    </div>
  );
}
