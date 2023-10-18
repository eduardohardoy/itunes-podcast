import styled from "styled-components";

interface ICellProps {
  isClickable?: boolean;
  maxLines?: number;
}

export const Table = styled.table``;

export const Header = styled.th``;

export const Row = styled.tr``;

export const Cell = styled.td<ICellProps>`
  ${(props) =>
    props.isClickable
      ? `
    text-decoration: underline;
    cursor: pointer;
  `
      : ""}

  ${({ maxLines }) =>
    maxLines
      ? `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2;
  -webkit-box-orient: vertical;
  `
      : ""}
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;
