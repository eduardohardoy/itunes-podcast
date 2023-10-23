import styled from "styled-components";

interface ICellProps {
  isClickable?: boolean;
  maxLines?: number;
  textAlign?: "center" | "left" | "right";
  flex?: number;
}

export const Table = styled.table``;

export const Header = styled.th`
  color: #5b5b5b;
  height: 40px;
`;

export const Row = styled.tr`
  height: 80px;
`;

export const Cell = styled.td<ICellProps>`
  color: #5b5b5b;

  ${(props) =>
    props.textAlign
      ? `
    text-align: right;
`
      : ""}

  ${(props) =>
    props.isClickable
      ? `
    cursor: pointer;
    text-decoration: underline;
  `
      : ""}

  ${({ maxLines }) =>
    maxLines
      ? `
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* number of lines to show */
    display: -webkit-box;
    line-clamp: 2;
    margin: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ""}
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;
