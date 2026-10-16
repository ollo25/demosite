/*
 * statut.js — badge « Ouvert / Fermé » partagé par toutes les démos.
 *
 * Lit window.CONFIG.horaires, au format :
 *   { lundi: [["12:00","15:00"],["19:00","23:00"]], mardi: [], ... }
 * Un tableau vide veut dire fermé ce jour-là.
 * Une plage qui finit avant son début (ex. ["18:00","02:00"]) se termine
 * le lendemain : à 1h du matin le samedi, le lieu est encore ouvert
 * grâce à la plage du vendredi.
 *
 * L'heure utilisée est TOUJOURS celle de Paris (Intl, fuseau Europe/Paris),
 * jamais celle du téléphone.
 *
 * Effets sur la page :
 *  - tout élément [data-statut] reçoit le texte (« Ouvert · jusqu'à 23h »)
 *    et l'attribut data-ouvert="oui" ou "non" (pratique pour la couleur) ;
 *  - dans les listes d'horaires, l'élément [data-jour="vendredi"] du jour
 *    reçoit la classe « aujourdhui » et aria-current="date".
 * Mise à jour automatique chaque minute.
 */
(function () {
  "use strict";

  // Ordre des jours tel que renvoyé par Date.getDay() : 0 = dimanche
  var JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  var MINUTES_SEMAINE = 7 * 24 * 60;

  // Correspondance entre le jour anglais renvoyé par Intl et notre index
  var INDEX_ANGLAIS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  var formatParis = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  });

  // Renvoie { jour: 0..6, minutes: minutes depuis minuit } à l'heure de Paris
  function heureParis(date) {
    var morceaux = {};
    formatParis.formatToParts(date || new Date()).forEach(function (p) {
      morceaux[p.type] = p.value;
    });
    var heures = parseInt(morceaux.hour, 10) % 24;
    return {
      jour: INDEX_ANGLAIS[morceaux.weekday],
      minutes: heures * 60 + parseInt(morceaux.minute, 10)
    };
  }

  // "19:30" -> 1170
  function enMinutes(texte) {
    var p = texte.split(":");
    return parseInt(p[0], 10) * 60 + parseInt(p[1], 10);
  }

  // 1170 -> "19h30", 1380 -> "23h", 1440 -> "minuit"
  function formatHeure(minutes) {
    minutes = minutes % (24 * 60);
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    if (h === 0 && m === 0) return "minuit";
    return h + "h" + (m ? (m < 10 ? "0" : "") + m : "");
  }

  // Transforme les horaires en plages [début, fin] en minutes depuis dimanche 0h
  function plagesSemaine(horaires) {
    var plages = [];
    JOURS.forEach(function (nom, index) {
      (horaires[nom] || []).forEach(function (plage) {
        var debut = index * 1440 + enMinutes(plage[0]);
        var fin = index * 1440 + enMinutes(plage[1]);
        if (fin <= debut) fin += 1440; // fermeture après minuit
        plages.push({ debut: debut, fin: fin });
      });
    });
    return plages;
  }

  /*
   * Calcule le statut pour une date donnée (par défaut : maintenant).
   * Renvoie { ouvert: true/false, texte: "..." }.
   * Exposée pour les tests (statut.test.html).
   */
  function calculer(horaires, date) {
    var ici = heureParis(date);
    var maintenant = ici.jour * 1440 + ici.minutes;
    var plages = plagesSemaine(horaires || {});

    if (!plages.length) return { ouvert: false, texte: "Fermé" };

    // 1. Sommes-nous dans une plage ? (on teste aussi la semaine précédente
    //    pour la plage du samedi soir qui déborde sur le dimanche)
    for (var i = 0; i < plages.length; i++) {
      var p = plages[i];
      var t = maintenant;
      if (t < p.debut && t + MINUTES_SEMAINE < p.fin) t += MINUTES_SEMAINE;
      if (t >= p.debut && t < p.fin) {
        return { ouvert: true, texte: "Ouvert · jusqu'à " + formatHeure(p.fin) };
      }
    }

    // 2. Sinon, on cherche la prochaine ouverture
    var attenteMin = Infinity;
    var prochaine = null;
    plages.forEach(function (p) {
      var attente = (p.debut - maintenant + MINUTES_SEMAINE) % MINUTES_SEMAINE;
      if (attente < attenteMin) {
        attenteMin = attente;
        prochaine = p;
      }
    });

    var jourOuverture = Math.floor(prochaine.debut / 1440) % 7;
    var heure = formatHeure(prochaine.debut);
    var quand;
    if (jourOuverture === ici.jour && attenteMin < 1440) {
      quand = "ouvre à " + heure;
    } else if (jourOuverture === (ici.jour + 1) % 7) {
      quand = "ouvre demain à " + heure;
    } else {
      quand = "ouvre " + JOURS[jourOuverture] + " à " + heure;
    }
    return { ouvert: false, texte: "Fermé · " + quand };
  }

  // Met à jour le badge et le jour courant dans la page
  function majPage() {
    var config = window.CONFIG || {};
    var statut = calculer(config.horaires || {});

    document.querySelectorAll("[data-statut]").forEach(function (el) {
      el.textContent = statut.texte;
      el.setAttribute("data-ouvert", statut.ouvert ? "oui" : "non");
    });

    var jour = JOURS[heureParis().jour];
    document.querySelectorAll("[data-jour]").forEach(function (el) {
      var estAujourdhui = el.getAttribute("data-jour") === jour;
      el.classList.toggle("aujourdhui", estAujourdhui);
      if (estAujourdhui) el.setAttribute("aria-current", "date");
      else el.removeAttribute("aria-current");
    });
  }

  // Accessible aux autres scripts et aux tests
  window.Statut = {
    calculer: calculer,
    heureParis: heureParis,
    formatHeure: formatHeure,
    JOURS: JOURS,
    majPage: majPage
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", majPage);
  } else {
    majPage();
  }
  setInterval(majPage, 60 * 1000);
})();
