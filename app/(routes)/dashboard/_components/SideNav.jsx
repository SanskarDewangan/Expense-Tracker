"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
function SideNav() {
    const id = useParams();
    const menuList = [
        {
            id:1,
            name:'Dashboard',
            icon:LayoutGrid,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Budgets',
            icon:PiggyBank,
            path:'/dashboard/budgets'
        },
        {
            id:3,
            name:'Expenses',
            icon:ReceiptText,
            path:'/dashboard/expenses/id'
        },
        {
            id:4,
            name:'Upgrade',
            icon:ShieldCheck,
            path:'/dashboard/upgrade'
        }
    ]
    const path = usePathname();
    
  return (
    <div className='h-screen p-5 border shadow-sm'>
        <Image src={'/logo.svg'}
            alt='logo'
            width={160}
            height={100}
        />
        <div>
            {menuList.map((menu,index)=>(
                <Link href={menu.path} key={menu.id}>
                <h2 className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-5 cursor-pointer rounded-md ${path == menu.path ? 'text-primary  bg-blue-100' :  'hover:text-primary hover:bg-blue-100'}`}>
                    <menu.icon/>
                    {menu.name}
                </h2></Link>
            ))}
        </div>
        <div className='fixed bottom-10 p-5 flex gap-2 items-center'>
            <UserButton />
            Profile
        </div>
    </div>
  )
}

export default SideNav