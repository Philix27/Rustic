import { Text } from "@/comps";
import React from "react";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  auth,
  useAuth,
} from "@clerk/nextjs";
import { styled } from "styled-components";
import { AppStyles } from "@/lib";

export function AuthButtons() {
  const { userId } = useAuth();
  return (
    <>
      {userId ? (
        <SignOutButton>
          <Container isSignOut>
            <Text variant="B5">Sign out</Text>
          </Container>
        </SignOutButton>
      ) : (
        <SignInButton mode="modal">
          <Container isSignOut={false}>
            <Text variant="B5">Login</Text>
          </Container>
        </SignInButton>
      )}
    </>
  );
}

const Container = styled.div<{ isSignOut: boolean }>`
  margin-left: 16px;
  border-radius: 4px;
  padding: 2.5px 16px;
  color: ${(props) => (props.isSignOut ? "#110000" : "#110000")};
  background-color: ${(props) =>
    props.isSignOut ? "white" : AppStyles.colors.primary};
  &:hover {
    color: ${(props) =>
      props.isSignOut
        ? AppStyles.colors.offWhite1
        : AppStyles.colors.background};
    background-color: ${(props) =>
      props.isSignOut ? AppStyles.colors.primary : AppStyles.colors.secondary};
    font-weight: 500;
  }
`;
