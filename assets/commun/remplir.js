/*
 * remplir.js — affiche les données de config.js dans la page.
 *
 * Le HTML de chaque démo contient déjà le contenu en dur (lisible sans
 * JavaScript). Ce script le remplace par les valeurs de window.CONFIG,
 * pour qu'il suffise de modifier config.js.
 *
 * Attributs reconnus dans le HTML :
 *   data-champ="nom"            -> texte = CONFIG.nom (chemins possibles : "liens.instagram")
 *   data-lien="tel"             -> href = "tel:" + CONFIG.telephoneLien (masqué si pas de numéro)
 *   data-lien="itineraire"      -> href = Google Maps (recherche de CONFIG.adresse)
 *   data-lien="reservation"     -> href = CONFIG.liens.reservation (masqué si vide)
 *   data-lien="instagram" / "facebook" / "site" -> idem avec CONFIG.liens.*
 *   <ul data-horaires>          -> liste des 7 jours, du lundi au dimanche
 *   <div data-carte>            -> la carte (sections, intitulés, prix)
 */
(function () {
  "use strict";

  var C = window.CONFIG;
  if (!C) return;

  var ORDRE = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

  // Lit une valeur dans CONFIG à partir d'un chemin "liens.instagram"
  function lire(chemin) {
    return chemin.split(".").reduce(function (objet, cle) {
      return objet == null ? undefined : objet[cle];
    }, C);
  }

  // 4.5 -> "4,50 €" ; 12 -> "12 €" ; "sur demande" -> "sur demande"
  function prix(valeur) {
    if (typeof valeur !== "number") return valeur || "";
    var texte = valeur % 1 === 0 ? String(valeur) : valeur.toFixed(2).replace(".", ",");
    return texte + " €";
  }

  // [["12:00","15:00"],["19:00","23:00"]] -> "12h – 15h · 19h – 23h"
  function plages(liste) {
    if (!liste || !liste.length) return "Fermé";
    var f = window.Statut ? window.Statut.formatHeure : function (x) { return x; };
    function min(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
    return liste.map(function (p) {
      return f(min(p[0])) + " – " + f(min(p[1]));
    }).join(" · ");
  }

  function creer(balise, classe, texte) {
    var el = document.createElement(balise);
    if (classe) el.className = classe;
    if (texte != null) el.textContent = texte;
    return el;
  }

  // 1. Textes simples
  document.querySelectorAll("[data-champ]").forEach(function (el) {
    var valeur = lire(el.getAttribute("data-champ"));
    if (valeur != null && valeur !== "") el.textContent = valeur;
  });

  // 2. Liens
  var adresseEncodee = encodeURIComponent(C.adresse || "");
  document.querySelectorAll("[data-lien]").forEach(function (el) {
    var type = el.getAttribute("data-lien");
    var href = "";
    if (type === "tel") href = C.telephoneLien ? "tel:" + C.telephoneLien : "";
    else if (type === "itineraire") href = "https://www.google.com/maps/search/?api=1&query=" + adresseEncodee;
    else href = (C.liens && C.liens[type]) || "";

    if (href) {
      el.setAttribute("href", href);
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  // 3. Horaires de la semaine
  document.querySelectorAll("[data-horaires]").forEach(function (liste) {
    if (!C.horaires) return;
    liste.innerHTML = "";
    ORDRE.forEach(function (jour) {
      var li = creer("li", "horaire");
      li.setAttribute("data-jour", jour);
      li.appendChild(creer("span", "horaire-jour", jour.charAt(0).toUpperCase() + jour.slice(1)));
      li.appendChild(creer("span", "horaire-heures", plages(C.horaires[jour])));
      liste.appendChild(li);
    });
  });

  // 4. Carte : sections > lignes (nom, description, prix)
  document.querySelectorAll("[data-carte]").forEach(function (bloc) {
    if (!C.carte || !C.carte.length) return;
    var niveau = bloc.getAttribute("data-carte-titre") || "h3";
    bloc.innerHTML = "";
    C.carte.forEach(function (section) {
      var sec = creer("section", "carte-section");
      sec.appendChild(creer(niveau, "carte-titre", section.titre));
      if (section.note) sec.appendChild(creer("p", "carte-note", section.note));
      var ul = creer("ul", "carte-liste");
      (section.produits || []).forEach(function (produit) {
        var li = creer("li", "carte-ligne");
        li.appendChild(creer("span", "carte-nom", produit.nom));
        li.appendChild(creer("span", "carte-prix", prix(produit.prix)));
        if (produit.desc) li.appendChild(creer("span", "carte-desc", produit.desc));
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      bloc.appendChild(sec);
    });
  });

  // 5. Le badge et le jour courant sont recalculés une fois la page remplie
  if (window.Statut) window.Statut.majPage();
})();
