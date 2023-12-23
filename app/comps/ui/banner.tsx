// "use client"
import { Text, TextHeader } from "@/comps";
import { styled } from "styled-components";

export const Landing = (props: {
  imgUrl: string;
  title: string;
  subtitle: string;
  opacity: number;
}) => {
  return (
    <Wrapper
      id="home"
      style={{
        zIndex: "-1",
        backgroundImage: `linear-gradient(rgba(31, 44, 90, 0.2), rgba(4, 9, 30, ${
          props.opacity ? props.opacity : 0.1
        })), url(${props.imgUrl})`,
      }}
    >
      <Content>
        <TextHeader variant="three">{props.title}</TextHeader>
        <Text variant="B3">{props.subtitle}</Text>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-start;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Content = styled.div`
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  color: #fff;
`;
