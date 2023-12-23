"use client";
import { useRouter } from "next/navigation";
import {
  Wrapper,
  ContentWrapper,
  Card,
  Img,
  FirstContent,
  SecondContent,
} from "./comps";

import { AiOutlineClockCircle } from "react-icons/ai";
import { Text, TextHeader } from "../../comps/text";
import { AppBlogs } from "@/lib/docs";

export default function BlogComp() {
  const router = useRouter();

  return (
    <Wrapper>
      <ContentWrapper>
        {AppBlogs.map((val, index) => (
          <Card key={index} onClick={() => router.push(`/blogs/${val.id}`)}>
            <FirstContent>
              <div>
                <TextHeader variant="five">{val.title}</TextHeader>
                <SecondContent>
                  <AiOutlineClockCircle />
                  <Text variant="B4">{val.start_date}</Text>
                </SecondContent>
                <Text variant="B4">{val.subtitle}</Text>
              </div>
            </FirstContent>
            <Img src={val.cover_image} alt="cover" />
          </Card>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}
