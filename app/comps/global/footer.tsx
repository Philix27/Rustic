"use client";
import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
} from "react-icons/ai";
import { styled } from "styled-components";
import { AppLinks } from "@/lib";
import { Text } from "@/comps";

export function AppFooter() {
  return (
    <Wrapper>
      <div className="inner">
        <div className="links">
          <Link passHref href={AppLinks.home.index}>
            <Text variant="B5">Home</Text>
          </Link>
          <Link passHref href={AppLinks.home.about}>
            <Text variant="B5">About us</Text>
          </Link>
          <Link passHref href={AppLinks.home.faq}>
            <Text variant="B5">FAQ</Text>
          </Link>
          <Link passHref href={AppLinks.home.terms}>
            <Text variant="B5">Terms</Text>
          </Link>
          <Link passHref href={AppLinks.home.privacy}>
            <Text variant="B5">Privacy</Text>
          </Link>
        </div>
        <div className="copyright">
          <Text variant="B6" className="top">
            © 2023
          </Text>
          <Text variant="B6">All Rights Reserved.</Text>
        </div>
        <div className="icons_list">
          <Link passHref href="mailto:philixbob@gmail.com">
            <AiOutlineMail />
          </Link>
          <Link passHref href="https://linkedin.com/in/eligbue-felix-362372124">
            <AiFillLinkedin />
          </Link>
          <Link passHref href="https://facebook.com/eligbue.felix.7">
            <AiFillFacebook />
          </Link>
          <Link passHref href="https://twitter.com/eligbue_felix">
            <AiFillTwitterSquare />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  color: ${(props) => props.theme.colors.offWhite2};
  padding: 15px 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
  .inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    @media ${(props) => props.theme.breakpoints.sm} {
      flex-direction: column;
      margin: 10px 0;
    }

    .links {
      display: flex;
      @media ${(props) => props.theme.breakpoints.sm} {
        padding-bottom: 20px;
      }
      a {
        color: ${(props) => props.theme.colors.offWhite1};
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .copyright {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      @media ${(props) => props.theme.breakpoints.sm} {
        padding-bottom: 20px;
      }

      .top {
        margin-right: 10px;
      }
    }
    .icons_list {
      display: flex;

      a {
        margin-right: 10px;
        color: ${(props) => props.theme.colors.offWhite1};
        svg {
          font-size: 16px;
          color: ${(props) => props.theme.colors.offWhite1};
        }
      }
    }
  }
`;
