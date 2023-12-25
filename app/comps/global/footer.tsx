"use client";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiFillTwitterSquare,
  AiOutlineMail,
} from "react-icons/ai";
import { styled } from "styled-components";
import { AppLinks, AppStyles } from "@/lib";
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
        <Text variant="B5" className="copyright">
          © 2023 Copyright &copy; All Rights Reserved.
        </Text>
        <div className="icons_list">
          <Link passHref href="mailto:philixbob@gmail.com">
            <AiOutlineMail size={15} />
          </Link>
          <Link
            passHref
            href="https://wa.me/2348108850572?text=Hi+Philix%2C+I%27m+just+visited+your+website."
          >
            <FaWhatsapp size={15} />
          </Link>
          <Link passHref href="tel:+2348108850572">
            <AiFillPhone size={15} />
          </Link>
          <Link passHref href="https://linkedin.com/in/eligbue-felix-362372124">
            <AiFillLinkedin size={15} />
          </Link>
          <Link passHref href="https://facebook.com/eligbue.felix.7">
            <AiFillFacebook size={15} />
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
  background-color: ${AppStyles.colors.backgroundLight};
  color: ${AppStyles.colors.offWhite2};
  padding: 20px 10px;
  @media ${AppStyles.breakpoints.sm} {
  }
  .inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    @media ${AppStyles.breakpoints.sm} {
      flex-direction: column;
    }

    .links {
      display: flex;
      @media ${AppStyles.breakpoints.sm} {
        padding-bottom: 20px;
      }
      a {
        color: ${AppStyles.colors.offWhite1};
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    .copyright {
      @media ${AppStyles.breakpoints.sm} {
        padding-bottom: 20px;
      }
    }
    .icons_list {
      display: flex;

      a {
        margin-right: 10px;
        color: ${AppStyles.colors.offWhite1};
        svg {
          color: ${AppStyles.colors.offWhite1};
        }
      }
    }
  }
`;
