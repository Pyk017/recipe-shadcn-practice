import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Recipe } from "@/app/page"

type RecipeProp = {
    recipe: Recipe
}

function RecipeCard({ recipe }: RecipeProp) {
  return (
    <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Avatar>
                  <AvatarImage src={`/img/${recipe.image}`} alt="recipe img" />
                  <AvatarFallback>
                    {recipe.title?.slice(0, 2)}
                  </AvatarFallback>
              </Avatar>
              <div>
                 <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
  )
}

export default RecipeCard
