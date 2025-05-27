import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/Components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your favourite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="">Share Your Favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>  {/** handle loading states */}
      </main>
    </>
  );
}
