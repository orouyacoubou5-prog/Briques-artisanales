document.addEventListener("DOMContentLoaded", function () {
  const btnCalculer = document.getElementById("btn-calculer");
  const btnWhatsappCalc = document.getElementById("btn-whatsapp-calc");
  const resultatBox = document.getElementById("resultat");
  const totalBriquesElem = document.getElementById("totalBriques");

  let totalBriques = 0;
  let typeBriqueChoisi = "";

  if (btnCalculer) {
    btnCalculer.addEventListener("click", function () {
      const longueur = parseFloat(document.getElementById("longueur").value);
      const hauteur = parseFloat(document.getElementById("hauteur").value);
      typeBriqueChoisi = document.getElementById("typeBrique").value;

      if (!longueur || !hauteur || longueur <= 0 || hauteur <= 0) {
        alert("Veuillez entrer une longueur et une hauteur valides.");
        return;
      }

      // Calcul : environ 12.5 briques par m² (format standard 40x20 cm)
      const surface = longueur * hauteur;
      totalBriques = Math.ceil(surface * 12.5);

      totalBriquesElem.textContent = totalBriques;
      resultatBox.style.display = "block";
    });
  }

  if (btnWhatsappCalc) {
    btnWhatsappCalc.addEventListener("click", function () {
      const numeroTelephone = "2290169229198";
      const message = `Bonjour, je souhaite fabriquer environ ${totalBriques} unités de ${typeBriqueChoisi} sur mon chantier.`;
      const url = `https://wa.me/${numeroTelephone}?text=${encodeURIComponent(message)}`;
      
      window.open(url, "_blank");
    });
  }
});
