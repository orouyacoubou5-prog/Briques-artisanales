function calculerBriques() {
  // Récupérer les valeurs tapées par l'utilisateur
  let longueur = document.getElementById("length").value;
  let hauteur = document.getElementById("height").value;
  let resultat = document.getElementById("resultat");

  // Vérifier si les champs sont bien remplis
  if (longueur === "" || hauteur === "" || longueur <= 0 || hauteur <= 0) {
    resultat.style.color = "red";
    resultat.innerText = "Veuillez entrer une longueur et une hauteur valides.";
    return;
  }

  // Calcul : Surface en m² (Longueur x Hauteur)
  let surface = longueur * hauteur;

  // On compte environ 13 briques par m²
  let nombreDeBriques = Math.ceil(surface * 13);

  // Affichage du résultat
  resultat.style.color = "green";
  resultat.innerText = "Pour " + surface + " m², il vous faudra environ " + nombreDeBriques + " briques.";
}
