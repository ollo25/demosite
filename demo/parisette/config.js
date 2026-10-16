/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Parisette",
  type: "Artisan fleuriste",
  accroche: "Des bouquets de saison, composés comme on cueille au jardin, rue de Lancry.",
  adresse: "46 rue de Lancry, 75010 Paris",
  acces: "Métro Jacques Bonsergent (ligne 5), à 3 minutes à pied",
  telephone: "01 74 64 23 39",
  telephoneLien: "+33174642339",
  horaires: {
    lundi: [],
    mardi: [["11:00", "19:00"]],
    mercredi: [["11:00", "19:00"]],
    jeudi: [["11:00", "19:00"]],
    vendredi: [["11:00", "20:00"]],
    samedi: [["11:00", "20:00"]],
    dimanche: []
  },
  services: ["Bouquets sur place ou sur commande", "Abonnements pour particuliers et professionnels", "Événements", "Ateliers"],
  carteSource: "Prix d'exemple (prestations relevées sur le blog, prix non publiés)",
  carte: [
    {
      titre: "En boutique",
      note: "",
      produits: [
        { nom: "Bouquet de saison", desc: "Fleurs de saison, composé devant vous selon l'occasion", prix: "dès 35 €", source: "Prix d'exemple" },
        { nom: "Brassée de fleurs séchées", desc: "Fleurs des champs séchées, qui tiennent des mois", prix: "dès 30 €", source: "Prix d'exemple" },
        { nom: "Plantes en pot", desc: "Fleuries ou feuillues, en pot de terre cuite", prix: "dès 15 €", source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Sur commande",
      note: "",
      produits: [
        { nom: "Abonnement floral", desc: "Une composition chaque semaine ou chaque mois, dans des vases chinés en brocante. Particuliers, restaurants, hôtels, bureaux", prix: "sur devis", source: "web:https://parisettefleurs.wordpress.com/abonnements/" },
        { nom: "Événements", desc: "Fleurs pour une fête, un dîner, une cérémonie", prix: "sur devis", source: "web:https://parisettefleurs.wordpress.com/" },
        { nom: "Ateliers", desc: "Couronne, herbier, guirlande de feuillage ou bouquet, au fil des saisons", prix: "sur demande", source: "web:https://parisettefleurs.wordpress.com/ateliers/" }
      ]
    }
  ],
  liens: {
    reservation: "",
    instagram: "https://www.instagram.com/parisette.fleurs/",
    facebook: "",
    site: "https://parisettefleurs.wordpress.com/"
  }
};
