import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Article, Button, Img, ImgWrapper} from "./styles";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useNearScreen} from "../../hooks/useNearScreen";

export const PhotoCard = ({id, likes = 0, src}) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (<Article ref={element}>
    {show && <Fragment>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt=""/>
        </ImgWrapper>
      </a>

      <Button onClick={() => setLiked(!liked)}>
        <Icon size={'20px'}/> {likes} likes
      </Button>
    </Fragment>}
  </Article>)
}
