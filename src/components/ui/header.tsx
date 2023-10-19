import React from 'react'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react'
import { Card } from './card'
import { Button } from './button'

const Header = () =>  {
  return (
    <Card className='flex justify-between items-center p-[1.875rem]'>
      <Button size="icon" variant="outline">
        <MenuIcon/>
      </Button>
      <h1 className='text-lg font-semibold'><span className='text-primary'>FSW</span> Store</h1>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon/>
      </Button>
    </Card>
  )
}

export default Header
