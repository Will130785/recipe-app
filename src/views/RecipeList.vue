<template>
    <div class="recipe-list-page">
        <h1>Take a look at our recipes</h1>
        <RecipeCard v-for="recipe in recipes" :key="recipe._id" :recipe="recipe" />
    </div>
</template>

<script>
    import RecipeService from "../services/RecipeService"
    import RecipeCard from "../components/RecipeCard"
    export default {
        components: {
            RecipeCard
        },
        data(){
            return {
                recipes: []
            }
        },
        created(){
            RecipeService.getRecipes()
            .then(response => {
                this.recipes = response.data
                console.log(this.recipes)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style scoped lang="scss">
    .recipe-list-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;
    }

    h1 {
        margin-bottom: 3rem;
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000;
    }

</style>