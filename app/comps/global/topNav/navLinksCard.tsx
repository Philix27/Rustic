import { AppStyles } from "@/lib";
import { Text } from "@/comps";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
import { navLinkList } from "./links";

export default function NavLinksCard() {
  return (
    <Container>
      {navLinkList.map((v, i) => (
        <Link href={v.link} key={i} className="link">
          <Item key={i}>
            <Icon bgColor={v.color}>{v.icon}</Icon>
            <div>
              <Text variant={"B5"}>{v.title}</Text>
              <Text variant={"B6"}>{v.subtitle}</Text>
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
  z-index: 3;

  .link {
    color: ${AppStyles.colors.offWhite1};

  }
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
const Icon = styled.div<{ bgColor: string }>`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${AppStyles.colors.offWhite1};
  background-color: ${(props) => props.bgColor};

  svg {
    font-size: 20px;
  }
`;
