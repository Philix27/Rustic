import { Text } from "@/comps";
import React from "react";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
  useAuth,
} from "@clerk/nextjs";
import { styled } from "styled-components";

export function AuthButtons() {
  const { userId } = useAuth();
  return (
    <>
      {userId ? (
        <SignOutButton>
          <Container isSignOut>Sign out</Container>
        </SignOutButton>
      ) : (
        <SignInButton>
          <Container isSignOut={false}>Login</Container>
        </SignInButton>
      )}
    </>
  );
}

const Container = styled.div<{ isSignOut: boolean }>`
  margin-left: 16px;
  border-radius: 4px;
  padding: 2.5px 16px;
  color: ${(props) => (props.isSignOut ? "#110000" : "#FFFFFF")};
  background-color: ${(props) =>
    props.isSignOut ? "white" : (props) => props.theme.colors.primary};
  &:hover {
    color: ${(props) =>
      props.isSignOut
        ? (props) => props.theme.colors.offWhite1
        : (props) => props.theme.colors.backgroundDark};
    background-color: ${(props) =>
      props.isSignOut
        ? (props) => props.theme.colors.primary
        : (props) => props.theme.colors.secondary};
    font-weight: 500;
  }
`;
