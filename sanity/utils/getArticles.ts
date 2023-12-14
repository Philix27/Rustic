import { createClient, groq } from "next-sanity";
import { Articles } from "../types/articles";

export async function getArticles(): Promise<Articles[]> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: "production",
    apiVersion: "2023-12-02",
  });

  return client.fetch(
    groq`*[_type == "article"]{
        _id, 
        _createdAt,
        title,
        subtitle
        "slug": slug.current,
    }`
  );
}
