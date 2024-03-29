import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch(
      'https://petgram-server-edsf8xpy2.now.sh/categories'
    ).then(res => res.json())
      .then(response => setCategories(response))
    setLoading(false)
  }, [])

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)



  useEffect(() => {
    const onScroll = e => {
      const show = window.scrollY > 200
      showFixed != show &&
        setShowFixed(show)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scrol', onScroll)
  }, [showFixed])
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => <Item key={category.id}><Category   {...category} /></Item>)
      }
    </List>
  )
  if (loading) {
    return (<h1>Cargando...</h1>)
  } else {

    return (
      <>
        {renderList()}
        {showFixed && renderList(true)}
      </>
    )
  }
}
