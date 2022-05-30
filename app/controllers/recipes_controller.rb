class RecipesController < ApplicationController
  def index
    render inertia: 'RecipesList', props: {
        recipes: current_user.recipes
    }
  end

  def show
    render inertia: 'Recipe', props: {
        recipe: current_user.recipes.find(params[:id])
    }


  end
end
