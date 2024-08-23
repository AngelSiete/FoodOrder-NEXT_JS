import sql from 'better-sqlite3';

const db = sql('meals.db');

export function getMeals(){
    const meals = db.prepare('SELECT * FROM meals').all();
    return meals;
}

export function getMeal(slug){
    const meal = db.prepare('SELECT * FROM meals WHERE SLUG = ?').get(slug);
    return meal;
}