import { styled } from "styled-components";
import { AppStyles, trpc } from "@/lib";
import ABook from "./aBook";

export function BookDisplay() {
  const { isLoading, data: books } = trpc.books.get_all.useQuery();

  if (isLoading) return <Wrapper>Loading...</Wrapper>;
  if (!books) return <Wrapper>No books available</Wrapper>;
  return (
    <Wrapper>
      <div className="grid_wrapper">
        {books.map((val, index) => (
          <ABook data={val} key={index} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  .grid_wrapper {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* padding: 3rem; */
    column-gap: 20px;
    row-gap: 20px;
    height: fit-content;
    margin: 20px 0;
    @media ${AppStyles.breakpoints.sm} {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
`;
