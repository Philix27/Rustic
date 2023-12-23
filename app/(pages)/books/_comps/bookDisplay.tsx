import { Text } from "@/comps";
import { styled } from "styled-components";
import Link from "next/link";
import { AppLinks, AppStyles } from "@/lib";
import { trpc } from "@/_trpc";

export function BookDisplay() {
  const { isLoading, data: books } = trpc.books.get_all.useQuery();

  if (isLoading) return <Wrapper>Loading...</Wrapper>;
  if (!books) return <Wrapper>No books available</Wrapper>;
  console.log("books54", books);
  return (
    <Wrapper>
      <GridWrapper>
        {books.map((val, index) => (
          <InLink
            passHref={false}
            href={`${AppLinks.books}/${val.id}`}
            key={index}
          >
            <Img src={val.img_url} />
            <div style={{ width: "100%" }}>
              <CardTitle>
                <Text variant="B2" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </Text>
                <Text variant="B4">{val.desc}</Text>
              </CardTitle>
              <ChapterTitle>
                <Text variant="B3" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </Text>
                <Text variant="B4">{val.desc}</Text>
              </ChapterTitle>
              <ChapterTitle>
                <Text variant="B3" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </Text>
                <Text variant="B4">{val.desc}</Text>
              </ChapterTitle>
              <ChapterTitle>
                <Text variant="B3" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </Text>
                <Text variant="B4">{val.desc}</Text>
              </ChapterTitle>
            </div>
          </InLink>
        ))}
      </GridWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
const GridWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${AppStyles.breakpoints.sm} {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const InLink = styled(Link)`
  background-color: ${AppStyles.colors.backgroundLight};
  color: ${AppStyles.colors.offWhite1};
  display: block;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: fit-content;
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 25/9;
  max-height: 400px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;

const CardTitle = styled.div`
  background-color: ${AppStyles.colors.background3};
  color: ${AppStyles.colors.offWhite2};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 15px;
`;
const ChapterTitle = styled.div`
  background-color: ${AppStyles.colors.backgroundLight};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 15px;
  border-bottom: solid 1px ${AppStyles.colors.grey1};
`;
