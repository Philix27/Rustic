import { TextBody } from "@/comps/text";
import { AppStyles } from "@/lib";
import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";
import { styled } from "styled-components";
import { navLinkList } from "./links";

export default function TopNavLinks() {
  return (
    <Container>
      {navLinkList.map((v, i) => (
        <Link href={v.link}>
          <Item key={i}>
            <Icon>{v.icon}</Icon>
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
  background-color: ${AppStyles.colors.backgroundLight};
  border: solid 0.1px ${AppStyles.colors.grey2};
  padding: 10px 0;
  position: absolute;
  top: 30px;
  width: 300px;
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
  margin-right: 20px;
  color: ${AppStyles.colors.offWhite1};
`;
