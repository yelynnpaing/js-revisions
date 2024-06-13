import Swal from "sweetalert2";
import { cartCount, cartItemCount, cartItemTemplate, totalCost } from "../js/selectors"

export const createCartItem = (product, quantity) => {
    const template = cartItemTemplate.content.cloneNode(true);
    template.querySelector(".cart-item-image").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-quantity").innerText = quantity;
    return template;
}

export const countCartItem = () => {
    const totalItemInCart = document.querySelectorAll(".cart-item").length;
    return totalItemInCart;
}

export const updateCountCardItem = () => {
    const totalItem = countCartItem();
    cartItemCount.innerText = totalItem;
    cartCount.innerText = totalItem;
}

export const calculateTotalCostInCart = () => {
    const total = [...document.querySelectorAll(".cart-item-price")].reduce(
      (pv, cv) => pv + parseFloat(cv.innerText),
      0
    );
    return total;
}

export const updateCartTotalCost = () => {
    const cartCostTotal = calculateTotalCostInCart().toFixed(3);
    totalCost.innerText = cartCostTotal;
}

export const handleCartItemGroup = (event) => {
    if (event.target.classList.contains("card-item-delete")) {
        const currentCartItem = event.target.closest(".cart-item");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                currentCartItem.remove();
                updateCartTotalCost();
                updateCountCardItem();
            }
        });

        // if (window.confirm("Are you sure want to delete ?")){
        //     currentCartItem.remove();
        //     updateCartTotalCost();
        //     updateCountCardItem();
        // };
    }
}