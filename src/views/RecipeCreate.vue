<template>
    <div class="create-form-container">
        <form class="create-form" v-on:submit.prevent="handleSubmit">
            <h2>Enter new recipe</h2>
            <div class="form-group">
                <label for="name">Recipe name</label>
                <input type="text" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="image">Enter image URL</label>
                <input type="text" id="image" v-model="image">
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" id="author" v-model="author">
            </div>
            <div class="form-group">
                <label for="rating">Rating</label>
                <select id="rating" v-model="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="name">Description</label>
                <input type="description" id="description" v-model="description">
            </div>
            <div class="form-group">
                <label for="time">Prep time</label>
                <input type="text" id="time" v-model="time">
            </div>
            <div class="form-group">
                <label for="ingredients">Ingredients (Seperate each ingredient with a |)</label>
                <input type="text" id="ingredients" v-model="ingredients">
            </div>
            <div class="form-group">
                <label for="directions">Directions (Seperate each step with a |</label>
                <input type="text" id="directions" v-model="directions">
            </div>
            <button class="submit-btn">Submit</button>
        </form>
    </div>
</template>

<script>
    import RecipeService from "../services/RecipeService"
    export default {
        data(){
            return {
                name: this.name,
                image: this.image,
                author: this.author,
                rating: this.rating,
                description: this.description,
                time: this.time,
                ingredients: this.ingredients,
                directions: this.directions
            }

        },
        methods: {
            handleSubmit(){
                //Compile form data
                const dataObj = {
                    name: this.name,
                    image: this.image,
                    author: this.author,
                    rating: this.rating,
                    description: this.description,
                    time: this.time,
                    ingredients: this.ingredients,
                    directions: this.directions
                }

                //Pass form data to setRecipe post request
                RecipeService.setRecipe(dataObj)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error)
                })

                //Clear form after data is sent
                this.name = null
                this.image = null
                this.author = null
                this.rating = null
                this.description = null
                this.time = null
                this.ingredients = null
                this.directions = null
            }
        }
    }
</script>

<style scoped lang="scss">
    .create-form-container {
        height: 90rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .create-form {
        width: 60%;
        padding: 5rem;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
        border-radius: 1rem;

        h2 {
            text-align: center;
            margin-bottom: 2rem;
        }
    }

    .form-group {
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;

        input {
            padding: .5rem;
            margin: 1rem 0;
        }

        select {
            padding: .5rem;
            margin: 1rem 0;
        }
    }

    .submit-btn {
        width: 100%;
        border: none;
        border-radius: .5rem;
        background-color: #46730e;
        color: #fff;
        font-size: 1.6rem;
        padding: .7rem;
        margin-top: 2rem;
        transition: all .3s;
    }

    .submit-btn:hover {
        cursor: pointer;
        background-color: #315800;
    }
</style>