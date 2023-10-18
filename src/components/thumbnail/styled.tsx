import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "image title" "image description";
  width: 200px;
`;

export const Image = styled.img`
  border-radius: 8px;
  grid-area: image;
  height: 45px;
  margin: 10px;
  width: 45px;
`;

const TruncatedText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Title = styled(TruncatedText)`
  grid-area: title;
  font-size: 16px;
  line-height: 20px;
`;

export const Description = styled(TruncatedText)`
  grid-area: description;
  font-size: 14px;
`;
