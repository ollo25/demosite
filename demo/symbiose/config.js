/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Symbiose",
  type: "Bar à tapas, bistro",
  accroche: "Bar à tapas et bistro rue de Paradis : tartares, entrecôte marinée, cookies maison, cocktails à 8 € pendant l'happy hour. Et la salle se privatise jusqu'à 50 personnes.",
  adresse: "11 rue de Paradis, 75010 Paris",
  acces: "Métro Gare de l'Est (lignes 4, 5, 7) ou Château d'Eau (ligne 4), à 5 minutes à pied.",
  telephone: "09 74 64 07 08",
  telephoneLien: "+33974640708",
  horaires: {
    lundi: [],
    mardi: [],
    mercredi: [],
    jeudi: [["17:00", "02:00"]],
    vendredi: [["17:00", "02:00"]],
    samedi: [["17:00", "02:00"]],
    dimanche: []
  },
  services: ["Sur place", "À emporter", "Privatisation jusqu'à 50 personnes", "Karaoké, fléchettes, blind test", "Titres-restaurant acceptés", "Accès fauteuil roulant"],
  carteSource: "carte en ligne, à vérifier",
  carte: [
    {
      titre: "Tapas à partager",
      note: "",
      produits: [
        { nom: "Frites", desc: "", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Wings maison", desc: "", prix: 6.5, source: "carte en ligne, à vérifier" },
        { nom: "Houmous", desc: "", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Boulettes maison", desc: "", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Cœur de burrata", desc: "Et son accompagnement", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Camembert rôti", desc: "Pour 4 personnes", prix: 12, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Tartares",
      note: "Frites ou salade",
      produits: [
        { nom: "Bœuf", desc: "Haché, coriandre, ail, échalote, marinade asiatique", prix: 19, source: "carte en ligne, à vérifier" },
        { nom: "Gambas", desc: "Infusion lait de coco, citronnelle, fruit de la passion", prix: 19, source: "carte en ligne, à vérifier" },
        { nom: "Saumon", desc: "Ananas Victoria, concombre, sésame grillé", prix: 21, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Plats chauds",
      note: "",
      produits: [
        { nom: "Poulet olive, citron confit", desc: "Riz", prix: 15.5, source: "carte en ligne, à vérifier" },
        { nom: "Katsu curry poulet", desc: "Riz, pomme de terre, carotte", prix: 16.5, source: "carte en ligne, à vérifier" },
        { nom: "Burger du chef", desc: "Haché main mariné, frites et salade", prix: 18, source: "carte en ligne, à vérifier" },
        { nom: "Entrecôte de bœuf", desc: "Marinade asiatique, sauce coco et poivres, frites et salade", prix: 21, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Salades",
      note: "",
      produits: [
        { nom: "Végétarienne", desc: "Roquette, poivron, aubergine, courgette, pignons, feta, pesto", prix: 11.5, source: "carte en ligne, à vérifier" },
        { nom: "Chèvre miel", desc: "2 bricks au chèvre, miel et noix", prix: 14, source: "carte en ligne, à vérifier" },
        { nom: "La Bufala", desc: "Mozzarella di bufala, tomates cerises, pesto", prix: 14.5, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Desserts",
      note: "",
      produits: [
        { nom: "Cookie maison", desc: "Gingembre-citron-chocolat blanc, menthe-chocolat noir ou épices-goji", prix: 3.5, source: "carte en ligne, à vérifier" },
        { nom: "Tiramisu", desc: "", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "Cheesecake chocolat blanc", desc: "Spéculoos, coulis", prix: 7, source: "carte en ligne, à vérifier" },
        { nom: "Planche de fromages", desc: "", prix: 18, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Cocktails",
      note: "Happy hour 17h – 21h : 8 €",
      produits: [
        { nom: "Spritz", desc: "Classique ou Saint-Germain", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Paradise", desc: "Gin, liqueur d'abricot, jus d'orange", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Espresso martini", desc: "", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Mojito", desc: "Classique, passion ou rouge", prix: 11, source: "carte en ligne, à vérifier" },
        { nom: "Prohibition", desc: "Bourbon, gingembre, cranberry, citron", prix: 11, source: "carte en ligne, à vérifier" },
        { nom: "Mocktails sans alcool", desc: "Virgin mojito, planter, Grand Canyon…", prix: 9, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Bières et vins",
      note: "",
      produits: [
        { nom: "Pression blonde", desc: "25 cl / 50 cl (50 cl à 6 € en happy hour)", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
        { nom: "Pelican", desc: "25 cl / 50 cl (50 cl à 8 € en happy hour)", prix: "6 € / 10 €", source: "carte en ligne, à vérifier" },
        { nom: "Côtes du Rhône, Roger Perrin", desc: "Le verre de 12,5 cl", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "Sancerre « Silex », Domaine de la Villaudière", desc: "Le verre de 12,5 cl", prix: 11, source: "carte en ligne, à vérifier" }
      ]
    }
  ],
  liens: {
    reservation: "https://www.privateaser.com/lieu/51369-symbiose",
    instagram: "https://www.instagram.com/symbiose.paradis",
    facebook: "https://www.facebook.com/profile.php?id=61554842908383",
    site: ""
  }
};
