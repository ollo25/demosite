/* Données modifiables de la démo Generoso. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Generoso",
  type: "Restaurant italien",
  accroche: "Carbonara, pâtes à la truffe, parmigiana et spritz, à deux pas du canal Saint-Martin.",
  adresse: "46 quai de Jemmapes, 75010 Paris",
  acces: "Métro Goncourt (ligne 11) ou Jacques Bonsergent (ligne 5), environ 7 minutes à pied",
  telephone: "01 80 06 39 47",
  telephoneLien: "+33180063947",
  horaires: {
    lundi: [],
    mardi: [["12:00", "14:00"], ["18:30", "23:00"]],
    mercredi: [["12:00", "14:00"], ["18:30", "23:00"]],
    jeudi: [["12:00", "14:00"], ["18:30", "23:00"]],
    vendredi: [["12:00", "14:00"], ["18:30", "23:00"]],
    samedi: [["12:00", "14:00"], ["18:30", "23:00"]],
    dimanche: []
  },
  services: ["Salle et quelques tables en terrasse", "Options végétariennes", "Réservation en ligne", "LGBTQ+ friendly"],
  carteSource: "carte en ligne (TheFork, juillet 2024), à vérifier ; autres plats : prix d'exemple",
  carte: [
    {
      titre: "Antipasti",
      note: "",
      produits: [
        { nom: "Burrata caprese", desc: "Burrata, tomates, basilic, huile d'olive", prix: 14, source: "carte en ligne, à vérifier" },
        { nom: "Planche mixte", desc: "Charcuterie, fromages et légumes", prix: 28, source: "carte en ligne, à vérifier" },
        { nom: "Planche veg", desc: "Fromages et légumes", prix: 20, source: "carte en ligne, à vérifier" },
        { nom: "Parmigiana", desc: "Aubergines, sauce tomate, parmesan. Prix d'exemple", prix: 14, source: "Prix d'exemple (plat cité dans les avis)" }
      ]
    },
    {
      titre: "Primi",
      note: "",
      produits: [
        { nom: "Carbonara di Michele", desc: "La carbonara de la maison", prix: 24, source: "carte en ligne, à vérifier" },
        { nom: "Tagliatelle à la truffe", desc: "Crème de truffe, parmesan, speck croustillant. Prix d'exemple", prix: 26, source: "Prix d'exemple (plat vu en photo)" },
        { nom: "Risotto au safran et burrata", desc: "Basilic, parmesan râpé. Prix d'exemple", prix: 22, source: "Prix d'exemple (plat vu en photo)" },
        { nom: "Gnocchi tomate et basilic", desc: "Prix d'exemple", prix: 18, source: "Prix d'exemple (plat vu en photo)" }
      ]
    },
    {
      titre: "Dolci",
      note: "",
      produits: [
        { nom: "Tiramisu", desc: "Prix d'exemple", prix: 9, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Da bere",
      note: "Prix d'exemple",
      produits: [
        { nom: "Spritz", desc: "Aperol ou Select", prix: 10, source: "Prix d'exemple" },
        { nom: "Vin italien au verre", desc: "Selon l'arrivage du mur à vins", prix: 7, source: "Prix d'exemple" }
      ]
    }
  ],
  liens: {
    reservation: "https://restaurante.covermanager.com/generoso/",
    instagram: "https://www.instagram.com/generoso_paris/",
    facebook: "",
    site: ""
  }
};
