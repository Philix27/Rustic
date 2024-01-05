import React from "react";
import { Text } from "@/comps";
import styled, { useTheme } from "styled-components";

export function HeroSection() {
  const style = useTheme();
  return (
    <Wrapper>
      <Text
        className="first_title"
        variant={"B1"}
        style={{ color: style.colors.primary }}
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
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    min-height: 70vh;
  }
  .first_title {
    font-size: 50px;
    margin-bottom: 30px;
    color: goldenrod;

    @media ${(props) => props.theme.breakpoints.sm} {
      line-height: 40px;
    }
  }
  .second_title {
    color: white;
    font-size: 45px;
    margin-bottom: 30px;

    @media ${(props) => props.theme.breakpoints.sm} {
      line-height: 40px;
    }
  }
  .subtitle {
    width: 75%;
    font-weight: 400;
  }
`;
