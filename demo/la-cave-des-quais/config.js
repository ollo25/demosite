/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "La Cave des Quais",
  type: "Cave à vins et à manger",
  accroche: "Vins naturels à boire sur place ou à emporter, planches et cuisine spontanée, tous les soirs sauf le dimanche.",
  adresse: "15 rue Alibert, 75010 Paris",
  acces: "Métro Goncourt (ligne 11) ou Jacques Bonsergent (ligne 5), à 5 minutes à pied",
  telephone: "09 53 37 33 12",
  telephoneLien: "+33953373312",
  horaires: {
    lundi: [["16:00", "23:00"]],
    mardi: [["16:00", "23:00"]],
    mercredi: [["16:00", "23:00"]],
    jeudi: [["16:00", "23:00"]],
    vendredi: [["16:00", "23:00"]],
    samedi: [["16:00", "23:00"]],
    dimanche: []
  },
  services: ["Sur place ou à emporter", "Terrasse", "Entrée accessible en fauteuil roulant"],
  carteSource: "Huîtres : carte en ligne, à vérifier ; le reste : prix d'exemple",
  carte: [
    {
      titre: "Les huîtres",
      note: "Marennes-Oléron, en direct du producteur, sur place",
      produits: [
        { nom: "3 huîtres et un verre de vin blanc", desc: "", prix: 10, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "À manger",
      note: "Cuisine spontanée, selon le marché",
      produits: [
        { nom: "Planche de fromages", desc: "", prix: 16, source: "Prix d'exemple" },
        { nom: "Planche de charcuterie", desc: "", prix: 16, source: "Prix d'exemple" },
        { nom: "Planche mixte", desc: "Fromages, charcuterie, terrine, pickles", prix: 22, source: "Prix d'exemple" },
        { nom: "Saucisson sec", desc: "", prix: 8, source: "Prix d'exemple" },
        { nom: "Petite assiette du moment", desc: "", prix: 10, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "À boire",
      note: "Vins naturels, sélection qui change souvent",
      produits: [
        { nom: "Verre de vin", desc: "Blanc, rouge, orange ou bulles", prix: "dès 6 €", source: "Prix d'exemple" },
        { nom: "Bouteille sur place", desc: "", prix: "dès 30 €", source: "Prix d'exemple" },
        { nom: "Bouteille à emporter", desc: "Prix caviste", prix: "dès 14 €", source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "https://www.instagram.com/lacavedesquais/", facebook: "", site: "" }
};
