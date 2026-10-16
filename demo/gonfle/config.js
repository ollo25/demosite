/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Gonflé",
  type: "Boulangerie",
  accroche: "Boulangerie rue de Belzunce, à deux pas de la gare du Nord. Croissants, pains au chocolat, flans, madeleines et pains, dès 7h du lundi au samedi.",
  adresse: "6 rue de Belzunce, 75010 Paris",
  acces: "Gare du Nord (métro 4 et 5, RER B et D) à 3 minutes à pied ; Poissonnière (ligne 7) à 6 minutes",
  telephone: "",
  telephoneLien: "",
  horaires: {
    lundi: [["07:00", "19:00"]],
    mardi: [["07:00", "19:00"]],
    mercredi: [["07:00", "19:00"]],
    jeudi: [["07:00", "19:00"]],
    vendredi: [["07:00", "18:00"]],
    samedi: [["07:00", "19:00"]],
    dimanche: []
  },
  services: ["À emporter", "Quelques tables en terrasse", "Petit déjeuner sur le pouce"],
  carteSource: "Prix d'exemple",
  carte: [
    {
      titre: "Viennoiseries",
      note: "",
      produits: [
        { nom: "Croissant", desc: "", prix: 1.7, source: "Prix d'exemple" },
        { nom: "Pain au chocolat", desc: "", prix: 1.9, source: "Prix d'exemple" },
        { nom: "Croissant noir à la vanille", desc: "Pâte au charbon, crème vanille", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Kouign-amann", desc: "", prix: 3.5, source: "Prix d'exemple" },
        { nom: "Cruffin praliné", desc: "", prix: 4.5, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Pâtisseries",
      note: "",
      produits: [
        { nom: "Flan vanille", desc: "La part", prix: 4, source: "avis, à vérifier" },
        { nom: "Tigré pistache", desc: "Fourré crème de pistache", prix: 4, source: "déduit d'un avis, à vérifier" },
        { nom: "Dôme citron noisette", desc: "", prix: 5.5, source: "carte en ligne, à vérifier" },
        { nom: "Madeleines vanille", desc: "Les trois", prix: 4, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Pains",
      note: "",
      produits: [
        { nom: "Baguette tradition", desc: "", prix: 1.4, source: "Prix d'exemple" },
        { nom: "Pain au levain", desc: "La tranche ou la miche", prix: "selon poids", source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
