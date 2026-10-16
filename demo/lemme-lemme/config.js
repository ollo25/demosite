/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "lemme lemme",
  type: "Boutique gastronomique italienne",
  accroche: "Épicerie fine, cave à vin et déjeuner italien fait maison, au 12 rue Sainte-Marthe.",
  adresse: "12 rue Sainte-Marthe, 75010 Paris",
  acces: "Métro Colonel Fabien (ligne 2) ou Belleville (lignes 2 et 11), à 7 minutes à pied",
  telephone: "09 82 63 10 10",
  telephoneLien: "+33982631010",
  /* Horaires de la boutique. Cuisine : du lundi au samedi, 12h à 14h30 (texte dans le HTML). */
  horaires: {
    lundi: [["11:00", "15:00"]],
    mardi: [["11:00", "19:30"]],
    mercredi: [["11:00", "19:30"]],
    jeudi: [["11:00", "19:30"]],
    vendredi: [["11:00", "19:30"]],
    samedi: [["11:00", "19:30"]],
    dimanche: []
  },
  services: ["Déjeuner sur place", "Épicerie fine", "Cave à vin", "Aperitivo", "Ateliers"],
  carteSource: "Prix d'exemple",
  carte: [
    {
      titre: "Le déjeuner",
      note: "Du lundi au samedi, de 12h à 14h30",
      produits: [
        { nom: "Parmigiana di melanzane", desc: "Aubergines, sauce tomate, parmesan", prix: 14, source: "Prix d'exemple" },
        { nom: "Pâtes du jour", desc: "Selon l'arrivage, par exemple ravioli épinards et parmesan", prix: 16, source: "Prix d'exemple" },
        { nom: "Vitello tonnato", desc: "Veau, sauce au thon, câpres", prix: 15, source: "Prix d'exemple" },
        { nom: "Mozzarella, tomates cerises, basilic", desc: "Huile d'olive", prix: 12, source: "Prix d'exemple" },
        { nom: "Tiramisu", desc: "", prix: 7, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Aperitivo",
      note: "",
      produits: [
        { nom: "Planche de charcuterie et fromages", desc: "Coupés à la trancheuse", prix: 18, source: "Prix d'exemple" },
        { nom: "Verre de vin italien", desc: "Blanc, rouge ou orange, selon la cave", prix: "dès 6 €", source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "https://www.instagram.com/lemmelemme_paris/", facebook: "", site: "" }
};
