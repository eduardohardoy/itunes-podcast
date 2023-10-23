import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
`;

export const Image = styled.img`
  border-radius: 8px;
  grid-area: image;
  height: 45px;
  margin: 10px;
  width: 45px;
`;

const TruncatedText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const Title = styled(TruncatedText)`
  color: #ffffff;
  font-size: 16px;
  grid-area: title;
  line-height: 20px;
`;

export const Description = styled(TruncatedText)`
  font-size: 14px;
  grid-area: description;
`;
