import { Text } from "@/comps";
import { styled } from "styled-components";
import Link from "next/link";
import { AppHelperFn, AppLinks } from "@/lib";

export default function ABook(props: {
  data: {
    id: string;
    title: string;
    desc: string;
    img_url: string;
  };
}) {
  return (
    <InLink passHref={false} href={`${AppLinks.books}/${props.data.id}`}>
      <Img src={props.data.img_url} />
      <CardTitle>
        <Text variant="B4" style={{ paddingBottom: "10px" }}>
          {props.data.title}
        </Text>
        <Text variant="B5">
          {AppHelperFn.truncate_string({ input: props.data.desc, length: 50 })}
        </Text>
      </CardTitle>
      {/* <Chapters data={props.data} /> */}
    </InLink>
  );
}

const InLink = styled(Link)`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  color: ${(props) => props.theme.colors.offWhite1};
  display: block;
  /* border-radius: 10px; */
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  /* align-items: center; */
  /* justify-items: center; */
  /* text-align: center; */
  /* height: fit-content; */
`;

const Img = styled.img`
  width: 100%;
  /* aspect-ratio: 25/9; */
  height: 150px;
  max-height: 400px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;

const CardTitle = styled.div`
  background-color: ${(props) => props.theme.colors.background3};
  color: ${(props) => props.theme.colors.offWhite2};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 15px;
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  /* background-color: orange; */
`;
