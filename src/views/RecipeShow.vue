<template>
    <div class="show-card-container">
        <div class="show-card">
            <div class="show-card-header">
                <div class="show-card-header-left">
                    <img class="show-card-img" :src="recipe.image">
                </div>
                <div class="show-card-header-right">
                    <h2>{{recipe.name}}</h2>
                    <p>By {{recipe.author}}</p>
                    <span v-for="(rating, index) in recipe.rating" :key="index">{{rating}}</span>
                </div>
            </div>
            <div class="show-card-description">
                <p>{{recipe.description}}</p>
            </div>
            <div class="show-card-content">
                <div class="show-card-content-left">
                    <h3>Ingredients</h3>
                    <ul>
                        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ingredient}}</li>
                    </ul>
                </div>
                <div class="show-card-content-right">
                    <h3>Directions</h3>
                    <p v-for="(direction, index) in recipe.directions" :key="index">{{direction}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RecipeService from "../services/RecipeService"
    export default {
        props: ["id"],
        data(){
            return {
                recipe: {}
            }
        },
        created(){
            RecipeService.getRecipe(this.id)
            .then(response => {
                this.recipe = response.data
                console.log(this.recipe.name)
            })
            .catch(error => {
                console.log(error)
            })

        }
    }
</script>

<style scoped lang="scss">
    .show-card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .show-card {
        width: 70%;
    }

    .show-card-img {
        width: 100%;
    }

    .show-card-header {
        display: flex;
    }

    .show-card-header-left {
        width: 50%;
        padding: 1rem;
    }

    .show-card-header-right {
        padding: 1rem;
        width: 50%;

        h2 {
            font-size: 5rem;
        }

        p {
            margin: 2rem 0;
            font-size: 1.6rem;
        }

        span {
            font-size: 5rem;
            color: green;
        }
    }

    .show-card-description {
        padding: 1rem;
        font-size: 1.6rem;
    }

    .show-card-content {
        padding: 1rem;
        display: flex;

        h3 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
    }

    .show-card-content-left {
        width: 30%;
        padding: 1rem;

        ul {
            list-style: none;
            font-size: 1.4em;
        }

        li {
            margin-bottom: 1rem;
        }
        
    }

    .show-card-content-right {
        width: 70%;
        padding: 1rem;

        p {
            font-size: 1.4rem;
            margin-bottom: 2rem;
        }
    }
</style>