
document.addEventListener("DOMContentLoaded", function () {
    const afficherPlusBtn = document.getElementById("afficher_plus_acces");
    const listeAcces = document.getElementById("liste_acces");

    afficherPlusBtn.addEventListener("click", function () {
        listeAcces.style.display = "block";
        afficherPlusBtn.style.display = "none"; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const banniere = document.getElementById("banniere_cookie");
  const btnAccepter = document.getElementById("accepter_cookies");
  const btnRefuser = document.getElementById("refuser_cookies");

  const choixCookie = localStorage.getItem("etat_cookie");

  if (!choixCookie) {
    banniere.style.display = "block";
  }

  btnAccepter.addEventListener("click", function () {
    localStorage.setItem("etat_cookie", "accepté");
    banniere.style.display = "none";
  });

  btnRefuser.addEventListener("click", function () {
    localStorage.setItem("etat_cookie", "refusé");
    banniere.style.display = "none";
  });
});


  const avis = [
    {
      "nom": "Jean Dupont",
      "date": "2024-06-15",
      "commentaire": "Super qualité de peluches, mes enfants adorent !",
      "note": 5
    },
    {
      "nom": "Marie Martin",
      "date": "2024-06-18",
      "commentaire": "Livraison rapide et produits de qualité. Très satisfaite !",
      "note": 4
    },
    {
      "nom": "Paul Durand",
      "date": "2024-06-20",
      "commentaire": "Une large gamme de peluches, mais un peu cher.",
      "note": 3
    }
  ];

  const caseAvis = document.getElementById("case_avis");
  
  avis.forEach(avi => {
    const avisElt = document.createElement("div");
    avisElt.classList.add("avis");

    avisElt.innerHTML = `
      <h4>${avi.nom} - ${avi.date}</h4>
      <p>${avi.commentaire}</p>
      <p>Note: ${avi.note} / 5</p>
    `;

    caseAvis.appendChild(avisElt);
  });
  

