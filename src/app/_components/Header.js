'use client'
import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import logoImg from '/public/images/logo.svg'
import appImg from '/public/images/app.svg'
import HeaderCSS from '../_components/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className="logo"><Link href='/'><Image src={logoImg} alt="logo"/> gyulgyul</Link></h1>
        <nav>
            <ul>
                <li><Link href='/#sec1'>HOME</Link></li>
                <li><Link href='/#sec4'>PROFILE</Link></li>
                <li><Link href='/#sec5'>PORTFOLIO</Link></li>
                <li><Link href='/#sec6'>CONTACT</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
