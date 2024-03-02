import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDrop, cilGroup, cilMap, cilPencil } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const nav = [
  {
    component: CNavTitle,
    name: 'DOCUMENTATION',
  },
  {
    component: CNavItem,
    name: 'BLOCKCHAIN',
    to: '/blockchain-project/blockchain',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'SOLANA',
    to: '/blockchain-project/solana',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'ABOUT PROJECT',
  },
  {
    component: CNavItem,
    name: 'MILESTONES',
    to: '/blockchain-project/milestones',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TEAM',
    to: '/blockchain-project/team',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
]

export default nav
