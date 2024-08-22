import Link from 'next/link'
import classes from './page.module.css'

export default function MealsPage(){
    return(
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your recipe</Link>
            </p>
        </header>
        <main className={classes.main}></main>
        </>
    )
}