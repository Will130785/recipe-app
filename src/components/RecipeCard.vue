<template>
    <router-link class="nav-link" :to="{name: 'recipe-show', params: {id: recipe._id}}">
    <div class="recipe-card">
        <div class="recipe-card-top">
            <figure>
                <img class="recipe-card-img" :src="recipe.image">
            </figure>
            <div class="recipe-card-top-content">
                <h2>{{recipe.name}}</h2>
                <span class="rating" v-for="(rating, index) in recipe.rating" :key="index">{{rating}}</span>
                <p class="description">{{recipe.description}}</p>
            </div>
        </div>

        <div class="recipe-card-bottom">
            <p>{{recipe.prepTime}}</p>
        </div>
    </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            recipe: Object
        }
    }
</script>

<style scoped lang="scss">
    .recipe-card {
        cursor: pointer;
        padding: 2rem;
        transition: all 0.2s linear;
        border-radius: 1rem;
        max-width: 60rem;
        margin: 2rem 0;
    }

    .recipe-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }

    .recipe-card-top {
        display: flex;
    }

    .recipe-card-img {
        height: 15rem;
        width: 15rem;
    }

    .recipe-card-top-content {
        margin-left: 3rem;
    }

    h2 {
        font-size: 3rem;
    }

    .rating {
        font-size: 4rem;
        margin-top: 2rem;
        color: green;
    }

    .description {
        font-size: 1.2rem;
    }

    .recipe-card-bottom {
        margin-top: 2rem;

        p {
            font-size: 1.4rem;
        }
    }
</style>