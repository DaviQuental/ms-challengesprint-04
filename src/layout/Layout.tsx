import React from 'react';

import { Outlet } from "react-router-dom";

import { AsideComponent } from './components'

import { LayoutStyles } from './Layout.styles'

export const LayoutComponent: React.FC = () => {
  return (
    <LayoutStyles>
      <AsideComponent/>
      <Outlet/>
    </LayoutStyles>
  )
}
