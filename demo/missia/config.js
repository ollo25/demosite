/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Missià",
  type: "Épicerie fine corse",
  accroche: "Charcuterie, fromages, vins et douceurs de Corse, et des sandwichs préparés au comptoir. Dans la petite boutique bleue de la rue Marguerite-de-Rochechouart.",
  adresse: "38 rue Marguerite-de-Rochechouart, 75009 Paris",
  acces: "Métro Anvers (ligne 2) ou Poissonnière (ligne 7), à quelques minutes à pied.",
  telephone: "09 61 60 59 92",
  telephoneLien: "+33961605992",
  horaires: {
    lundi: [],
    mardi: [["15:00", "19:30"]],
    mercredi: [["15:00", "19:30"]],
    jeudi: [["15:00", "19:30"]],
    vendredi: [["15:00", "19:30"]],
    samedi: [["15:00", "19:30"]],
    dimanche: []
  },
  services: ["Vente à emporter", "Sandwichs", "Plateaux apéritifs sur demande", "Conseils de préparation"],
  carteSource: "Prix d'exemple",
  carte: [
    {
      titre: "Charcuterie",
      note: "Prix au 100 g",
      produits: [
        { nom: "Lonzu", desc: "Filet de porc séché", prix: 9.5, source: "Prix d'exemple" },
        { nom: "Coppa", desc: "Échine séchée, tranchée à la demande", prix: 8.5, source: "Prix d'exemple" },
        { nom: "Prisuttu", desc: "Jambon sec affiné", prix: 11, source: "Prix d'exemple" },
        { nom: "Saucisson de porc corse", desc: "La pièce, environ 250 g", prix: 14, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Fromages",
      note: "",
      produits: [
        { nom: "Brocciu", desc: "Frais, selon la saison", prix: "4,50 € les 100 g", source: "Prix d'exemple" },
        { nom: "Tomme de brebis fumée à la myrte", desc: "", prix: "5,50 € les 100 g", source: "Prix d'exemple" },
        { nom: "Tomme de chèvre", desc: "", prix: "5 € les 100 g", source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Épicerie",
      note: "",
      produits: [
        { nom: "Farine de châtaigne", desc: "Le sachet de 500 g", prix: 9, source: "Prix d'exemple" },
        { nom: "Marrons confits", desc: "Le bocal", prix: 12, source: "Prix d'exemple" },
        { nom: "Herbes du maquis", desc: "Pour les daubes et les grillades", prix: 5.5, source: "Prix d'exemple" },
        { nom: "Miel de Corse", desc: "Le pot de 250 g", prix: 11, source: "Prix d'exemple" },
        { nom: "Biscuits secs (canistrelli)", desc: "Le sachet", prix: 6.5, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Sandwichs",
      note: "Préparés au comptoir",
      produits: [
        { nom: "Sandwich charcuterie corse", desc: "Coppa ou lonzu, fromage de brebis", prix: 9, source: "Prix d'exemple" },
        { nom: "Sandwich brocciu et herbes", desc: "", prix: 8, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Vins et apéritifs",
      note: "",
      produits: [
        { nom: "Cap Corse Mattei, blanc ou rouge", desc: "Apéritif au vin, la bouteille", prix: 19, source: "Prix d'exemple" },
        { nom: "Vin de Corse (Patrimonio, Ajaccio…)", desc: "La bouteille, à partir de", prix: 15, source: "Prix d'exemple" }
      ]
    }
  ],
  liens: {
    reservation: "",
    instagram: "https://www.instagram.com/missia_paris/",
    facebook: "",
    site: ""
  }
};
