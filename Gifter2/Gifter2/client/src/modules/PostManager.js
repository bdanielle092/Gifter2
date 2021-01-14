const remoteURL = "http://localhost:3000"

export default {
    get(id) {
        return fetch(`${remoteURL}/api/post/${id}?_expand=user`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/api/post`).then(result => result.json())
    },

    delete(id) {
        return fetch(`${remoteURL}/recipes/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newPost) {
        return fetch(`${remoteURL}/api/post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }).then(data => data.json())
    },
    updated(editedRecipe) {
        return fetch(`${remoteURL}/recipes/${editedRecipe.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedRecipe)
        }).then(data => data.json())
    },
    getRecipesByUsername() {
        return fetch(`${remoteURL}/recipes?_expand=user`).then(result => result.json())
    },


}