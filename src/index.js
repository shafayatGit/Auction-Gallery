export const addFavorite = product => {
    localStorage.setItem("favorite", JSON.stringify(product))
}