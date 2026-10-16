/* Données modifiables de la démo IKA. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "IKA",
  type: "Restaurant de curry japonais",
  accroche: "Curry poulet, poulpe, boulettes de bœuf ou légumes, servi avec riz et pickles. Sur place dans une salle minuscule, ou à emporter.",
  adresse: "26 rue de Chabrol, 75010 Paris",
  acces: "Métro Gare de l'Est (lignes 4, 5 et 7), à 5 minutes à pied",
  telephone: "09 83 30 13 01",
  telephoneLien: "+33983301301",
  horaires: {
    lundi: [["12:15", "18:00"]],
    mardi: [["12:15", "18:00"]],
    mercredi: [["12:15", "18:00"]],
    jeudi: [["12:15", "18:00"]],
    vendredi: [["12:15", "18:00"]],
    samedi: [["12:30", "15:00"]],
    dimanche: []
  },
  services: ["Sur place ou à emporter", "Fait maison", "Un curry aux légumes"],
  carteSource: "ardoise devant la porte (photo janv. 2026), à vérifier ; boissons : prix d'exemple",
  carte: [
    {
      titre: "Les entrées",
      note: "",
      produits: [
        { nom: "Shiitake farcis", desc: "Stuffed shiitake", prix: 5, source: "carte en ligne, à vérifier (ardoise, prix peu lisible)" },
        { nom: "Aubergines marinées", desc: "Pickled eggplant", prix: 5, source: "carte en ligne, à vérifier (ardoise, prix peu lisible)" },
        { nom: "Entrée du jour", desc: "Today's special", prix: 5, source: "carte en ligne, à vérifier (ardoise, prix peu lisible)" }
      ]
    },
    {
      titre: "Les currys",
      note: "Servis avec riz et pickles",
      produits: [
        { nom: "Curry poulet", desc: "Japanese curry, chicken", prix: 14, source: "carte en ligne, à vérifier (ardoise)" },
        { nom: "Curry poulpe", desc: "Japanese curry, octopus", prix: 14, source: "carte en ligne, à vérifier (ardoise)" },
        { nom: "Curry boulettes de bœuf", desc: "Japanese curry, beef meatballs", prix: 14, source: "carte en ligne, à vérifier (ardoise)" },
        { nom: "Curry légumes", desc: "Japanese curry, vegetables", prix: 14, source: "carte en ligne, à vérifier (ardoise)" },
        { nom: "Brochettes de poulet grillé", desc: "Grilled chicken, sauce au choix", prix: 14, source: "carte en ligne, à vérifier (ardoise)" },
        { nom: "Plat du jour", desc: "Today's special", prix: 14, source: "carte en ligne, à vérifier (ardoise)" }
      ]
    },
    {
      titre: "Les desserts",
      note: "",
      produits: [
        { nom: "Mochi matcha et chocolat", desc: "", prix: 4, source: "carte en ligne, à vérifier (photo mars 2024, prix de l'ardoise peu lisible)" },
        { nom: "Mochi de saison", desc: "", prix: 4, source: "carte en ligne, à vérifier (ardoise)" },
        { nom: "Dessert du jour", desc: "Today's special", prix: 4, source: "carte en ligne, à vérifier (ardoise)" }
      ]
    },
    {
      titre: "Menu déjeuner",
      note: "De 12h à 15h",
      produits: [
        { nom: "Entrée, curry, dessert", desc: "Lunch menu", prix: "prix sur place", source: "carte en ligne, à vérifier (ardoise, composition et prix illisibles)" }
      ]
    },
    {
      titre: "À boire",
      note: "Prix d'exemple",
      produits: [
        { nom: "Thé vert japonais", desc: "", prix: 3, source: "Prix d'exemple" },
        { nom: "Umeshu, liqueur de prune", desc: "Japon", prix: 6, source: "Prix d'exemple (liqueur de prune citée dans un avis)" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "https://www.instagram.com/ika.restaurant/", facebook: "", site: "" }
};
