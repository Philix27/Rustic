"use client";
import { useRouter } from "next/navigation";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AppTopNavbar, Text } from "@/comps";
import { AppStyles, AppBlogs } from "@/lib";
import styled from "styled-components";

export default function BlogComp() {
  const router = useRouter();

  return (
    <>
      <AppTopNavbar title={"Blogs"} icons={[]} />
      <Wrapper>
        <div className="content_wrapper">
          {AppBlogs.map((val, index) => (
            <Card key={index} onClick={() => router.push(`/blogs/${val.id}`)}>
              <div className="content">
                <div>
                  <Text variant="B4">{val.title}</Text>
                  <SecondContent>
                    <AiOutlineClockCircle />
                    <Text variant="B4">{val.start_date}</Text>
                  </SecondContent>
                  <Text variant="B4">{val.subtitle}</Text>
                </div>
              </div>
              <Img src={val.cover_image} alt="cover" />
            </Card>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 20px;
  .content_wrapper {
    display: flex;
    flex-direction: column;
    padding: 3rem;
    row-gap: 10px;
    width: 80%;
    border-radius: 10px;
    @media ${AppStyles.breakpoints.sm} {
      width: 100%;
    }
  }
`;

const Card = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.1px #979797a7;
  padding-bottom: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: #970000;
    border-bottom: solid 2px red;
    p,
    svg {
      color: #970000;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    text-align: left;
  }
`;
const Img = styled.img`
  width: 100px;
  height: 75px;
  object-fit: cover;
  overflow: hidden;
  /* border-radius: 25px; */
`;

const SecondContent = styled.div`
  display: flex;
  padding-bottom: 10px;
  color: #ffffff;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  /* padding: 0 20px; */
`;
