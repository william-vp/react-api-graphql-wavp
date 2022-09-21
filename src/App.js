import React from 'react';
import {GlobalStyle} from "./styles/GlobalStyles";

import {CategoriesList} from "./components/Category/CategoriesList";
import {PhotoCardList} from "./components/PhotoCardList";
import {Logo} from "./components/Logo";

export const App = () => <>
  <GlobalStyle/>
  <Logo/>
  <CategoriesList/>
  <PhotoCardList/>
</>
