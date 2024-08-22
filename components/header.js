import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import NavLink from "./nav-link";
import classes from './header.module.css'

export default function Header(){
    
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/"><Image src={logoImg}priority></Image>FoodOrder-NEXT_JS</Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse all Meals </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Browse our Communities </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}