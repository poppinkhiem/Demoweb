import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Transaction',
    path: '/transaction',
    icon: <IoIcons.IoIosAnalytics/>,
    cName: 'nav-text'
  },
  {
    title: 'Card',
    path: '/card',
    icon: <AiIcons.AiFillCreditCard/>,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'User',
    path: '/login',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },

  
];
