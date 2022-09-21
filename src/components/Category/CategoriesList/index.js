import React, {Fragment, useEffect, useState} from 'react';
import {Category} from "../index";
import {List, Item} from "./styles";

const LOADING_SRC = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921';

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, []);

  return {categories, loading};
}

export const CategoriesList = () => {
  const {categories, loading} = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false);


  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return <List fixed={fixed}>
      {loading ?
        <Item key='loading'><Category cover={LOADING_SRC} emoji={'Cargando...'}/></Item>
        :
        categories.map(category => {
          return <Item key={category.id}>
            <Category {...category}/>
          </Item>
        })}
    </List>
  }

  return <Fragment>
    {renderList()}
    {showFixed && renderList(true)}
  </Fragment>;

}
