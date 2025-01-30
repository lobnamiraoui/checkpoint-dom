// Compteurs pour la quantité de chaque produit
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

// Prix des produits
const price1 = 100;  // Prix du produit 1
const price2 = 20;   // Prix du produit 2
const price3 = 50;   // Prix du produit 3

// Fonction pour augmenter la quantité du produit 1
function inc1() {
  counter1++;
  updatecounter1();
  updateTotal();
}

// Fonction pour augmenter la quantité du produit 2
function inc2() {
  counter2++;
  updatecounter2();
  updateTotal();
}

// Fonction pour augmenter la quantité du produit 3
function inc3() {
  counter3++;
  updatecounter3();
  updateTotal();
}

// Fonction pour diminuer la quantité du produit 1
function dec1() {
  if (counter1 > 0) {
    counter1--;
  }
  updatecounter1();
  updateTotal();
}

// Fonction pour diminuer la quantité du produit 2
function dec2() {
  if (counter2 > 0) {
    counter2--;
  }
  updatecounter2();
  updateTotal();
}

// Fonction pour diminuer la quantité du produit 3
function dec3() {
  if (counter3 > 0) {
    counter3--;
  }
  updatecounter3();
  updateTotal();
}

// Mise à jour de l'affichage de la quantité pour le produit 1
function updatecounter1() {
  document.getElementById("q1").innerHTML = counter1;
}

// Mise à jour de l'affichage de la quantité pour le produit 2
function updatecounter2() {
  document.getElementById("q2").innerHTML = counter2;
}

// Mise à jour de l'affichage de la quantité pour le produit 3
function updatecounter3() {
  document.getElementById("q").innerHTML = counter3;
}

// Calcul et mise à jour du total
function updateTotal() {
  let total = 0;

  total += price1 * counter1;
  total += price2 * counter2;
  total += price3 * counter3;

  document.querySelector(".total").textContent = total + " $";
}
function removeProd1(){
  let card = document.getElementById('card1');
  card.remove();
}
function removeProd2(){
  let card = document.getElementById('card2');
  card.remove();
}
function removeProd3(){
  let card = document.getElementById('card3');
  card.remove();
}

  
    // Ajouter/enlever un produit des favoris ❤️
    document.querySelectorAll(".favorite-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        this.classList.toggle("liked"); // Ajoute/enlève la classe "liked"
      });
    });
