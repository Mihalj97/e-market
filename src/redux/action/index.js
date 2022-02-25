// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}
// For Delete Item From Cart
export const deleteCart = (product) => {
    return {
        type: "DELETE_ITEM",
        payload: product
    }
}