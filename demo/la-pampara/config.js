/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "La Pampara",
  type: "Épicerie fine et glaces artisanales",
  accroche: "Épicerie gourmande rue Alibert : sandwichs faits maison le midi, glaces artisanales, biscuits, charcuterie et vins.",
  adresse: "9 rue Alibert, 75010 Paris",
  acces: "Métro Goncourt (ligne 11) ou Jacques Bonsergent (ligne 5), à deux pas du canal Saint-Martin.",
  telephone: "01 42 06 88 18",
  telephoneLien: "+33142068818",
  horaires: {
    lundi: [["11:00", "19:00"]],
    mardi: [["11:00", "19:00"]],
    mercredi: [["11:00", "19:00"]],
    jeudi: [["11:00", "19:00"]],
    vendredi: [["11:00", "19:00"]],
    samedi: [["14:00", "19:00"]],
    dimanche: [["14:00", "19:00"]]
  },
  services: ["À emporter", "Sandwichs le midi", "Idées cadeaux"],
  carteSource: "Prix d'exemple",
  carte: [
    {
      titre: "Le midi",
      note: "Préparations faites maison",
      produits: [
        { nom: "Sandwich du jour", desc: "Pain croustillant, charcuterie de la boutique, crudités", prix: 8.5, source: "Prix d'exemple" },
        { nom: "Sandwich végétarien", desc: "Légumes, fromage, herbes fraîches", prix: 8, source: "Prix d'exemple" },
        { nom: "Boisson fraîche", desc: "", prix: 3, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Glaces artisanales",
      note: "Parfums selon la saison",
      produits: [
        { nom: "Cornet ou pot, 1 boule", desc: "", prix: 3.5, source: "Prix d'exemple" },
        { nom: "Cornet ou pot, 2 boules", desc: "", prix: 6, source: "Prix d'exemple" },
        { nom: "Pot à emporter, 500 ml", desc: "", prix: 12, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Le sucré",
      note: "",
      produits: [
        { nom: "Cookie", desc: "", prix: 3, source: "Prix d'exemple" },
        { nom: "Part de tarte", desc: "", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Fondant", desc: "", prix: 4, source: "Prix d'exemple" },
        { nom: "Biscuits en sachet", desc: "Amandes, sésame…", prix: "selon le sachet", source: "Prix d'exemple" }
      ]
    },
    {
      titre: "L'épicerie",
      note: "",
      produits: [
        { nom: "Charcuterie à la coupe", desc: "", prix: "au poids", source: "Prix d'exemple" },
        { nom: "Vins", desc: "Sélection en rayon", prix: "dès 9 €", source: "Prix d'exemple" },
        { nom: "Épices, condiments, conserves", desc: "", prix: "en rayon", source: "Prix d'exemple" },
        { nom: "Fruits et légumes", desc: "Cagettes devant la boutique", prix: "au poids", source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
