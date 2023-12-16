import { TextBody } from "@/comps/text";
import { AppStyles } from "@/lib";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
import { navLinkList } from "./links";

export default function NavLinksCard() {
  return (
    <Container>
      {navLinkList.map((v, i) => (
        <Link href={v.link} key={i}>
          <Item key={i}>
            <Icon style={{ backgroundColor: v.color }}>{v.icon}</Icon>
            <div>
              <TextBody variant={"three"}>{v.title}</TextBody>
              <TextBody variant={"four"}>{v.desc}</TextBody>
            </div>
          </Item>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  background-color: ${AppStyles.colors.background3};
  border: solid 0.1px ${AppStyles.colors.grey2};
  padding: 10px 0;
  position: absolute;
  top: 30px;
  width: 350px;
  /* width: content; */
  border-radius: 5px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 10px; */
  padding: 10px;
  &:hover {
    background-color: ${AppStyles.colors.backgroundDark};
  }
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${AppStyles.colors.offWhite1};

  svg {
    font-size: 20px;
  }
`;
