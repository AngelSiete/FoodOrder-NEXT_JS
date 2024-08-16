import Link from "next/link";
import logoImg from '@/assets/logo.png'
import classes from './header.module.css'
import Image from "next/image";

export default function Header(){
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/"><Image src={logoImg}priority></Image>FoodOrder-NEXT_JS</Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Browse the Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}