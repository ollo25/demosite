/* Données modifiables de la démo Carburant. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Carburant",
  type: "Bar et cave",
  accroche: "Dix tireuses de bières artisanales, un mur de canettes à emporter, du vin nature et du mezcal. Rue de Lancry, à deux minutes du canal.",
  adresse: "60 rue de Lancry, 75010 Paris",
  acces: "Métro Jacques Bonsergent (ligne 5), à 3 minutes à pied",
  telephone: "",
  telephoneLien: "",
  horaires: {
    lundi: [],
    mardi: [["18:00", "00:00"]],
    mercredi: [["18:00", "00:00"]],
    jeudi: [["18:00", "00:00"]],
    vendredi: [["18:00", "02:00"]],
    samedi: [["18:00", "02:00"]],
    dimanche: []
  },
  services: ["Sur place ou à emporter", "Bières à la pression, canettes et bouteilles", "Vin nature, mezcal", "Fromage et charcuterie"],
  carteSource: "tarifs de pression relevés sur l'ardoise (photo oct. 2024), à vérifier ; reste : prix d'exemple",
  carte: [
    {
      titre: "À la pression",
      note: "Tarifs relevés sur l'ardoise, 25 cl / 50 cl",
      produits: [
        { nom: "Légères : lager, pils, blanche", desc: "Selon le fût du moment", prix: "4,50 € / 8,50 €", source: "carte en ligne, à vérifier (tarif lu sur l'ardoise, catégorie déduite)" },
        { nom: "IPA, sour, saison", desc: "Brasseries artisanales françaises et étrangères", prix: "5,50 € / 10,50 €", source: "carte en ligne, à vérifier (tarif lu sur l'ardoise, catégorie déduite)" },
        { nom: "Fortes : stout impérial, triple", desc: "Servies en verre à pied", prix: "6 € / 11,50 €", source: "carte en ligne, à vérifier (tarif lu sur l'ardoise, catégorie déduite)" },
        { nom: "Cidre", desc: "", prix: "4,50 € / 8,50 €", source: "carte en ligne, à vérifier (cidre lu sur l'ardoise, prix supposé)" }
      ]
    },
    {
      titre: "La cave",
      note: "Prix d'exemple",
      produits: [
        { nom: "Canettes et bouteilles de bière artisanale", desc: "IPA, sour, stout, sur place ou à emporter", prix: "de 4 € à 9 €", source: "Prix d'exemple" },
        { nom: "Vin nature au verre", desc: "", prix: 6, source: "Prix d'exemple" },
        { nom: "Mezcal", desc: "", prix: 8, source: "Prix d'exemple" },
        { nom: "Larmes de liqueur de chipotle", desc: "Relevé sur l'ardoise", prix: 2, source: "carte en ligne, à vérifier (ardoise, photo oct. 2024)" }
      ]
    },
    {
      titre: "À grignoter",
      note: "Prix d'exemple",
      produits: [
        { nom: "Planche fromage et charcuterie", desc: "", prix: 14, source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "", facebook: "https://www.facebook.com/Carburantbar", site: "" }
};
