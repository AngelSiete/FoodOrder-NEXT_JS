import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export function getMeals() {
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
}

export function getMeal(slug) {
  const meal = db.prepare("SELECT * FROM meals WHERE SLUG = ?").get(slug);
  return meal;
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) console.log(error);
  });
  meal.image = `/images/${fileName}`;
  db.prepare(
    `
        INSERT INTO meals
        (title, summary,instructions,creator,creator_email,image,slug)
        VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug)
        `
  ).run(meal);
}
