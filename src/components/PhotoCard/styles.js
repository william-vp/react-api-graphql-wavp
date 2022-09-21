import styled from "styled-components";
import {fadeIn} from "../../styles/animation";

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  display: block;
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin-top: 10px;
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  ${fadeIn({time: '2s', type: 'ease'})}
`

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;

  & svg {
    margin: 4px;
  }
`
