/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Amulette",
  type: "Café",
  accroche: "Café, gâteaux faits sur place et granola maison, derrière la devanture bleue de la rue Sainte-Marthe.",
  adresse: "8 rue Sainte-Marthe, 75010 Paris",
  acces: "Métro Colonel Fabien (ligne 2) ou Belleville (lignes 2 et 11), à 7 minutes à pied",
  telephone: "",
  telephoneLien: "",
  horaires: {
    lundi: [],
    mardi: [],
    mercredi: [["08:30", "17:00"]],
    jeudi: [["08:30", "17:00"]],
    vendredi: [["08:30", "17:00"]],
    samedi: [["09:30", "17:30"]],
    dimanche: [["09:30", "17:30"]]
  },
  services: ["Sur place", "À emporter", "Chiens bienvenus"],
  carteSource: "Prix d'exemple (rubriques reprises de la carte affichée en vitrine)",
  carte: [
    {
      titre: "À manger",
      note: "",
      produits: [
        { nom: "Granola maison", desc: "Yaourt, fruits de saison, beurre de noisette", prix: 9, source: "Prix d'exemple" },
        { nom: "Œufs brouillés", desc: "Sur pain grillé", prix: 11, source: "Prix d'exemple" },
        { nom: "Tartine du moment", desc: "", prix: 10, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Pâtisseries au comptoir",
      note: "Faites sur place",
      produits: [
        { nom: "Croissant", desc: "", prix: 2.2, source: "Prix d'exemple" },
        { nom: "Cake du moment", desc: "La part", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Cake marbré", desc: "La part", prix: 4, source: "Prix d'exemple" },
        { nom: "Cookie", desc: "", prix: 3.5, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Les cafés",
      note: "",
      produits: [
        { nom: "Espresso", desc: "", prix: 2.5, source: "Prix d'exemple" },
        { nom: "Flat white", desc: "", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Latte, chaud ou glacé", desc: "", prix: 5, source: "Prix d'exemple" },
        { nom: "Golden latte", desc: "", prix: 5.5, source: "Prix d'exemple" },
        { nom: "Matcha latte", desc: "", prix: 5.5, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Thés et infusions",
      note: "Servis en théière",
      produits: [
        { nom: "Thé", desc: "", prix: 5, source: "Prix d'exemple" },
        { nom: "Infusion", desc: "", prix: 4.5, source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "https://www.instagram.com/amulette.cafe/", facebook: "", site: "" }
};
