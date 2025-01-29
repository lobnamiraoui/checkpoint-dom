// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    // Sélection des éléments du DOM
    const totalPriceElement = document.querySelector(".total");
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    const trashButtons = document.querySelectorAll(".fa-trash-alt");
    const heartButtons = document.querySelectorAll(".fa-heart");

    // Fonction pour mettre à jour le prix total
    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".card-body").forEach((card) => {
            let unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace(" $", ""));
            let quantity = parseInt(card.querySelector("p[id^='q']").textContent);
            total += unitPrice * quantity;
        });
        totalPriceElement.textContent = total + " $";
    }

    // Fonction pour augmenter la quantité
    plusButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let quantityElement = button.nextElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotal();
        });
    });

    // Fonction pour diminuer la quantité
    minusButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let quantityElement = button.previousElementSibling;
            let currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 0) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        });
    });

    // Fonction pour supprimer un produit
    trashButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.closest(".card-body").remove();
            updateTotal();
        });
    });

    // Fonction pour aimer un produit
    heartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
            if (button.classList.contains("liked")) {
                button.style.color = "red";
            } else {
                button.style.color = "black";
            }
        });
    });
});
