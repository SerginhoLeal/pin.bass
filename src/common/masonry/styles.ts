import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ImageProps {
  height?:string;
};

const { width, height } = Dimensions.get('screen');

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Division = styled.View`
  width: ${parseInt(String(width / 2.04))}px;
`;

export const Image = styled.Image<ImageProps>`
  ${({ height }) => css`
    height: ${height}px;
  `};
  width: 100%;
  margin-bottom: 2px;
  border-radius: 2px;
`;