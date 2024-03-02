import React from 'react'

const Blockchain = React.lazy(() => import('./views/Blockchain'))
const Solana = React.lazy(() => import('./views/Solana'))

const Milestones = React.lazy(() => import('./views/Milestones'))
const Team = React.lazy(() => import('./views/Team'))

const routes = [
  { path: '/blockchain-project', exact: true, name: 'Home' },
  { path: '/blockchain-project/blockchain', name: 'Blockchain', element: Blockchain },
  { path: '/blockchain-project/solana', name: 'Solana', element: Solana },
  { path: '/blockchain-project/milestones', name: 'Milestones', element: Milestones },
  { path: '/blockchain-project/team', name: 'Team', element: Team },
]

export default routes
