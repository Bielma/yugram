import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCartList } from './components/ListOfPhotoCart'
import { PhotoCard } from './components/PhotoCard'
import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCartList />
  </div>
)
