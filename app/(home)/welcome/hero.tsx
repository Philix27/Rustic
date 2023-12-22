import React from "react";
import { AppStyles } from "@/lib";
import { Text } from "@/comps";
import styled from "styled-components";

export function HeroSection() {
  return (
    <Wrapper>
      <Text
        className="first_title"
        variant={"B1"}
        style={{ color: AppStyles.colors.primary }}
      >
        Build in a weekend
      </Text>
      <Text className="second_title" variant={"B1"}>
        Scale to millions
      </Text>
      <Text variant={"B2"} className="subtitle">
        Rustic Guide is an open source Firebase alternative. Start your project
        with a Postgres database, Authentication, instant APIs, Edge Functions,
        Realtime subscriptions, Storage, and Vector embeddings.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
  @media ${AppStyles.breakpoints.sm} {
    width: 80%;
  }
  .first_title {
    font-size: 50px;
    margin-bottom: 30px;
    color: goldenrod;

    @media ${AppStyles.breakpoints.sm} {
      line-height: 40px;
    }
  }
  .second_title {
    color: white;
    font-size: 45px;
    margin-bottom: 30px;
  }
  .subtitle {
    width: 75%;
    font-weight: 400;
  }
`;
