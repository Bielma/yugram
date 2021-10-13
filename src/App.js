import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCartList } from './components/ListOfPhotoCart'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo/>
    <ListOfCategories />
    <PhotoCartList />
  </div>
)
