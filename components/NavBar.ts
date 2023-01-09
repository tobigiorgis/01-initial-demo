import React from 'react'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {

    const menuItems = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Pricing', href: '/pricing'}
    ]
    

    return (
        <nav className={styles['menuContainer']}>
            {
                menuItems.map(( {text, href } ) => (
                    <ActiveLink key={href} text={text} href={href} />
                ))
            }
            {/* <ActiveLink text='Home' href='/' />
            <ActiveLink text='About' href='/about' />
            <ActiveLink text='Contact' href='/contact' /> */}
        </nav>
    )
}
