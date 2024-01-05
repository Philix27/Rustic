import { styled } from "styled-components";

export const MarkdownStyledComp = styled.div`
  padding: 10px 15px;
  margin: 20px;
  color: ${(props) => props.theme.colors.offWhite1};
  width: fit-content;

  h1 {
    font-size: 2.8rem;
    font-weight: 300;
    padding-top: 20px;
    color: ${(props) => props.theme.colors.offWhite1};
  }

  h3 {
    padding: 10px 0;
    color: ${(props) => props.theme.colors.offWhite1};
  }

  p {
    text-align: justify;
    text-justify: inter-word;
    margin: 10px 0;
    color: ${(props) => props.theme.colors.offWhite1};
    line-height: 1.3;
    font-weight: 400;
  }
  img {
    padding: 10 auto;
    width: fit-content;
    border-radius: 8px;
    max-width: 100%;
    height: auto;
  }

  ul {
    // list-style: lower-alpha;
    color: ${(props) => props.theme.colors.offWhite2};
    font-weight: 300;
    padding: 5px;
    li {
      list-style: disc;
      padding: 5px;
      // line-height: 1.8;
      margin-left: 20px;
    }
  }

  ol {
    color: ${(props) => props.theme.colors.offWhite2};
    font-weight: 200;
    li {
      list-style: decimal;
      padding: 5px;
      margin-left: 20px;
    }
  }

  table {
    color: ${(props) => props.theme.colors.offWhite1};
    font-weight: 200;

    th,
    td {
      padding: 10px;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: ${(props) => props.theme.colors.backgroundDark};
    }

    th {
      background-color: ${(props) => props.theme.colors.backgroundDark};
      color: white;
      font-weight: 300;
    }
  }

  hr {
    margin-bottom: 10px;
  }
`;
