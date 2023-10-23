import styled from "styled-components";

interface ICellProps {
  changeCursor?: "pointer" | "default";
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

  text-align: ${(props) => props.$textAlign || "center"};

  cursor: ${(props) => props.$changeCursor || "default"};

  ${(props) =>
    props.$maxLines
      ? `
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            line-clamp: 2;
            margin: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
          `
      : ""};
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;
