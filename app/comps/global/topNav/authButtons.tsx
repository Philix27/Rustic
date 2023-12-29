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
          <Container isSignOut>Sign out</Container>
        </SignOutButton>
      ) : (
        <SignInButton mode="modal">
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
    props.isSignOut ? "white" : AppStyles.colors.primary};
  &:hover {
    color: ${(props) =>
      props.isSignOut
        ? AppStyles.colors.offWhite1
        : AppStyles.colors.backgroundDark};
    background-color: ${(props) =>
      props.isSignOut ? AppStyles.colors.primary : AppStyles.colors.secondary};
    font-weight: 500;
  }
`;
