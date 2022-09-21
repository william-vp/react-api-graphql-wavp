import React from 'react';
import {PhotoCard} from "../PhotoCard";

import db from '../../../api/db.json'

/*const withPhotos = graphql(gql`
  query getPhotos{
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`);

export const PhotoCardList = withPhotos(PhotoCardListComponent);*/

export const PhotoCardList = () => {
  return (<ul>
    {db.photos.map((item) => {
      return <PhotoCard key={item.id} {...item} />
    })}
  </ul>)
}
