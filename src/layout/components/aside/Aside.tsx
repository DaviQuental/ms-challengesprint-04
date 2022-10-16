import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IconType } from 'react-icons';
import { MdEmail } from 'react-icons/md';
import { IoMdCart } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';

import { AsideStyles, MenuStyles } from './Aside.styles';
import { IconTypes } from './Aside.types';
import { COLORS } from '../../../common'

const pages = [
  {
    id: 0,
    href: '/',
    icon: MdEmail,
    name: 'Emails'
  },
  {
    id: 1,
    href: '/products',
    icon: IoMdCart,
    name: 'Products'
  },
  {
    id: 2,
    href: '/add-product',
    icon: FaCartPlus,
    name: 'Add Products'
  }
]

const IconComponent: React.FC<IconTypes> = ({ CustomizedIcon }): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false)

  const handleOnMouseEnter = () => setIsHovered(true)
  const handleOnMouseLeave = () => setIsHovered(false)
  
  return (
    <CustomizedIcon 
      fontSize={50} color={ isHovered ? 'white' : "#727481" } 
      onMouseEnter={handleOnMouseEnter} 
      onMouseLeave={handleOnMouseLeave}
    />
  )
}

export const AsideComponent: React.FC = () => {
  const date = new Date()

  return (
    <AsideStyles>
      <MenuStyles>
        {pages.map(({ href, icon, id}) => (
          <Link to={href} key={id}>
            <IconComponent CustomizedIcon={icon} />
          </Link>
        ))}
      </MenuStyles>
    </AsideStyles>
  );
}
