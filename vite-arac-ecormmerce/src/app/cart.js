import Swal from "sweetalert2";
import { cartCount, cartItemCount, cartItemTemplate, productGroup, totalCost } from "../js/selectors"

export const createCartItem = (product, quantity) => {
    const template = cartItemTemplate.content.cloneNode(true);
    template.querySelector(".cart-item-image").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-quantity").innerText = quantity;
    template.querySelector(".cart-item-cost").innerText = product.price * quantity;
    template.querySelector(".cart-item").setAttribute("cart-product-id", product.id);
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
    const total = [...document.querySelectorAll(".cart-item-cost")].reduce(
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
        const currentProductId = currentCartItem.getAttribute("cart-product-id");
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
                const currentProduct = productGroup.querySelector(
                  `[product-id='${currentProductId}']`
                );
                if (currentProduct) {
                    const currentProductCartBtn = currentProduct.querySelector(
                      ".product-add-to-cart-btn"
                    );
                    currentProductCartBtn.removeAttribute("disabled");
                    currentProductCartBtn.innerText = "Add to Cart";
                }
            }
        });

        // if (window.confirm("Are you sure want to delete ?")){
        //     currentCartItem.remove();
        //     updateCartTotalCost();
        //     updateCountCardItem();
        // };
    } else if (event.target.classList.contains("cart-q-add")) {
        const currentCartItem = event.target.closest(".cart-item");
        const currentPrice = currentCartItem.querySelector(".cart-item-price");
        const currentCost = currentCartItem.querySelector(".cart-item-cost");
        const currentQuantity = currentCartItem.querySelector(".cart-item-quantity");

        currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
        currentCost.innerText =
          (currentQuantity.innerText * currentPrice.innerText).toFixed(3);
        updateCartTotalCost();
    } else if (event.target.classList.contains("cart-q-sub")) {
        const currentCartItem = event.target.closest(".cart-item");
        const currentPrice = currentCartItem.querySelector(".cart-item-price");
        const currentCost = currentCartItem.querySelector(".cart-item-cost");
        const currentQuantity = currentCartItem.querySelector(
          ".cart-item-quantity"
        );

        if (currentQuantity.innerText > 1) {
            currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
        currentCost.innerText =
          currentQuantity.innerText * currentPrice.innerText;
        updateCartTotalCost();
        }
    }
}