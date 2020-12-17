const axios = require("axios");

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    getRecipes(){
        return apiClient.get("/recipes");
    },
    getRecipe(id){
        console.log(id);
        return apiClient.get(`/recipes/${id}`);
    },
    setRecipe(data){
        console.log(data);
        return apiClient.post(`/recipes`, {
            body: data
        })
    }
}