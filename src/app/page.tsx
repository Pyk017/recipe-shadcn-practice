import RecipeCard from "@/components/RecipeCard";

export interface Recipe {
  title?: string, 
  image?: string, 
  time?: number, 
  description?: string,
  vegan?: boolean, 
  id?: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");

  //? delay response
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return result.json();
}


export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        { recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
