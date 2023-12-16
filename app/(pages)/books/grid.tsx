import { useRouter } from "next/navigation";
import { TextBody, TextHeader } from "../../comps/text";
import { styled } from "styled-components";
import { AppProjects } from "../../lib/docs/registryProject";
import Link from "next/link";
import { AppLinks, AppStyles } from "@/lib/utils";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function ProjectsList() {
  const sortedItems = AppProjects.filter((item) => {
    return item.category == "web";
  });

  const router = useRouter();

  return (
    <Wrapper>
      <GridWrapper>
        {AppProjects.map((val, index) => (
          <InLink
            passHref={false}
            href={`${AppLinks.books}/${val.id}`}
            key={index}
          >
            <Img src={val.cover_image} />
            <div style={{ width: "100%" }}>
              <CardTitle>
                <TextBody variant="two" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </TextBody>
                <TextBody variant="four">{val.subtitle}</TextBody>
              </CardTitle>
              <ChapterTitle>
                <TextBody variant="three" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </TextBody>
                <TextBody variant="four">{val.subtitle}</TextBody>
              </ChapterTitle>
              <ChapterTitle>
                <TextBody variant="three" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </TextBody>
                <TextBody variant="four">{val.subtitle}</TextBody>
              </ChapterTitle>
              <ChapterTitle>
                <TextBody variant="three" style={{ paddingBottom: "10px" }}>
                  {val.title}
                </TextBody>
                <TextBody variant="four">{val.subtitle}</TextBody>
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
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  /* height: 100px; */
  aspect-ratio: 25/9;
  max-height: 400px;
  object-fit: cover;
  overflow: hidden;
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
