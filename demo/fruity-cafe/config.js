/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Fruity Café",
  type: "Café",
  accroche: "Matcha, black sesame latte, smoothies et cookies faits maison, à deux pas de la gare du Nord.",
  adresse: "69 rue de Chabrol, 75010 Paris",
  acces: "Métro Poissonnière (ligne 7), à 2 minutes ; gare du Nord et gare de l'Est à pied",
  telephone: "",
  telephoneLien: "",
  /* Horaires à confirmer : Google affiche « Fermé » tous les jours */
  horaires: {
    lundi: [["08:00", "18:00"]],
    mardi: [["08:00", "18:00"]],
    mercredi: [["08:00", "18:00"]],
    jeudi: [["08:00", "18:00"]],
    vendredi: [["08:00", "18:00"]],
    samedi: [["08:30", "18:00"]],
    dimanche: [["08:30", "18:00"]]
  },
  services: ["Sur place ou à emporter", "Petite terrasse", "Lait de vache ou végétal", "Fondant sans gluten", "Wifi"],
  carteSource: "carte en ligne, à vérifier (photo de la carte, février 2024) ; pâtisseries : prix d'exemple",
  carte: [
    {
      titre: "Cafés",
      note: "",
      produits: [
        { nom: "Expresso", desc: "", prix: 1.5, source: "carte en ligne, à vérifier" },
        { nom: "Allongé", desc: "", prix: 1.5, source: "carte en ligne, à vérifier" },
        { nom: "Americano", desc: "", prix: 1.5, source: "carte en ligne, à vérifier" },
        { nom: "Double dose", desc: "", prix: 2.8, source: "carte en ligne, à vérifier" },
        { nom: "Cappuccino", desc: "", prix: 3.5, source: "carte en ligne, à vérifier" },
        { nom: "Latte", desc: "", prix: 4, source: "carte en ligne, à vérifier" },
        { nom: "Flat white", desc: "", prix: 5, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Boissons au lait",
      note: "Lait de vache ou végétal. 30 cl / 60 cl.",
      produits: [
        { nom: "Matcha latte", desc: "", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
        { nom: "Matcha latte aromatisé", desc: "", prix: "6 € / 9 €", source: "carte en ligne, à vérifier" },
        { nom: "Dirty matcha", desc: "", prix: "6 € / 9 €", source: "carte en ligne, à vérifier" },
        { nom: "Black sesame latte", desc: "", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
        { nom: "Sweet potato latte", desc: "", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
        { nom: "Golden latte", desc: "Curcuma, gingembre, poivre, lait", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
        { nom: "Chai latte", desc: "Thé noir, cardamome, cannelle, gingembre, lait", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
        { nom: "Dirty chai", desc: "", prix: "6 € / 9 €", source: "carte en ligne, à vérifier" },
        { nom: "Latte aromatisé", desc: "", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
        { nom: "Chocolat", desc: "", prix: "4 € / 7 €", source: "carte en ligne, à vérifier" },
        { nom: "Chocolat viennois", desc: "", prix: "4,50 € / 7,50 €", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Infusions",
      note: "30 cl / 60 cl.",
      produits: [
        { nom: "Thé, infusion, rooibos", desc: "", prix: "3 € / 6 €", source: "carte en ligne, à vérifier" },
        { nom: "Thé glacé maison", desc: "", prix: "4 € / 7 €", source: "carte en ligne, à vérifier" },
        { nom: "Carcadet", desc: "", prix: "4 €", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Fait maison",
      note: "Prix d'exemple",
      produits: [
        { nom: "Cookie", desc: "", prix: 3.5, source: "Prix d'exemple" },
        { nom: "Fondant au chocolat", desc: "Existe sans gluten", prix: 4, source: "Prix d'exemple" },
        { nom: "Muffin", desc: "", prix: 3.5, source: "Prix d'exemple" },
        { nom: "Smoothie", desc: "Selon les fruits du jour", prix: 6.5, source: "Prix d'exemple" },
        { nom: "Jus frais à l'extracteur", desc: "", prix: 6, source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "https://instagram.com/fruitycafe.paris", facebook: "", site: "" }
};
