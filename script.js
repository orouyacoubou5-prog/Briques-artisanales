let texteDevis = "";

function toggleGallery() {
  const g = document.getElementById('gallery-container');
  g.style.display = (g.style.display === 'grid') ? 'none' : 'grid';
}

function openModal(src) {
  document.getElementById('modal-img').src = src;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function calculer() {
  const l = parseFloat(document.getElementById('longueur').value);
  const h = parseFloat(document.getElementById('hauteur').value);
  const typeSelect = document.getElementById('type');
  const briquesParSac = parseFloat(typeSelect.value);
  const nomBrique = typeSelect.options[typeSelect.selectedIndex].text;
  
  if (!l || !h || l <= 0 || h <= 0) {
    alert("Veuillez entrer des mesures valides.");
    return;
  }
  
  const surface = l * h;
  const nbBriques = Math.ceil(surface * 12.5);
  const nbSacs = Math.ceil(nbBriques / briquesParSac);
  
  texteDevis = `📐 Devis Briques Pèrèrè :\n- Type : ${nomBrique}\n- Surface : ${surface} m²\n- Briques : ~${nbBriques}\n- Ciment : ~${nbSacs} sac(s)`;

  const res = document.getElementById('resultat');
  res.innerHTML = "📐 <strong>Surface :</strong> " + surface + " m²<br>" +
                  "🧱 <strong>Briques estimées :</strong> Environ <strong>" + nbBriques + " briques</strong><br>" +
                  "📦 <strong>Ciment nécessaire :</strong> Environ <strong>" + nbSacs + " sac(s)</strong> (base : " + briquesParSac + " briques/sac)";
  res.style.display = 'block';
  document.getElementById('btn-copier').style.display = 'block';

  localStorage.setItem('dernierCalcul', JSON.stringify({
    longueur: l,
    hauteur: h,
    type: typeSelect.value,
    htmlResultat: res.innerHTML,
    devis: texteDevis
  }));
}

function copierDevis() {
  if (texteDevis) {
    navigator.clipboard.writeText(texteDevis).then(() => {
      alert("✅ Résultat copié ! Vous pouvez le coller sur WhatsApp ou dans vos notes.");
    });
  }
}

window.onload = function() {
  const sauvgarde = localStorage.getItem('dernierCalcul');
  if (sauvgarde) {
    const data = JSON.parse(sauvgarde);
    document.getElementById('longueur').value = data.longueur;
    document.getElementById('hauteur').value = data.hauteur;
    document.getElementById('type').value = data.type;
    
    const res = document.getElementById('resultat');
    res.innerHTML = data.htmlResultat;
    res.style.display = 'block';
    
    texteDevis = data.devis;
    document.getElementById('btn-copier').style.display = 'block';
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
