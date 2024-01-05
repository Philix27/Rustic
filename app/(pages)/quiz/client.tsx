"use client";
import { AppButton, AppModal, AppTopNavbar, Text } from "@/comps";
import React, { useState } from "react";
import styled from "styled-components";
import { AppClerk, trpc } from "@/lib";
import Link from "next/link";
import { AddTopicModal } from "./_comps";
import { useSession } from "@clerk/nextjs";

export function QuizClient() {
  const { session } = useSession();
  const userRole = AppClerk.getUserRole(session);
  const [showModal, setShowModal] = useState(false);
  const { isLoading, data: quiz_topics } = trpc.quiz_topics.get_all.useQuery();

  if (isLoading) return <Wrapper>Loading...</Wrapper>;
  if (!quiz_topics) return <Wrapper>No books available</Wrapper>;

  return (
    <Wrapper>
      <AppTopNavbar title={"Quiz"} icons={[]} />
      <GridWrapper>
        <Grid>
          {quiz_topics.map((val, i) => (
            <Link href={`/quiz/${val.id}`} key={i}>
              <GridItem>
                <Text variant={"B4"} className="title">
                  {val.title}
                </Text>
                <hr
                  style={{
                    border: `solid 0.5px ${(props) =>
                      props.theme.colors.grey1}`,
                  }}
                />
                <div className="subtitle">
                  <Text variant={"B5"}>{val.desc}</Text>
                </div>
                <Footer>
                  <Text variant={"B5"}>Questions: 234</Text>
                  <Text variant={"B5"}>Views: 34</Text>
                </Footer>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </GridWrapper>
      {userRole === "ADMIN" && (
        <>
          <AppModal isMounted={showModal}>
            <AddTopicModal onCancel={() => setShowModal(false)} />
          </AppModal>
          <div className="button_container">
            <AppButton onClick={() => setShowModal(true)}> Add topic</AppButton>
          </div>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  .button_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
`;
const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  width: 80%;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

const GridItem = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: solid 1px ${(props) => props.theme.colors.background};
  &:hover {
    border-bottom: solid 1px ${(props) => props.theme.colors.grey1};
  }
  .title {
    color: white;
    margin-bottom: 10px;
    padding: 0 20px;
    margin-top: 15px;
  }
  .subtitle {
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  padding: 10px 20px;
`;
