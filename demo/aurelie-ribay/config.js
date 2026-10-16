/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Aurélie Ribay Boulangère",
  type: "Boulangerie",
  accroche: "Boulangerie à l'angle des rues de Dunkerque et de Maubeuge, à deux pas de la gare du Nord. Pains spéciaux, viennoiseries, flan, formules du midi.",
  adresse: "36 bis rue de Dunkerque, 75010 Paris",
  acces: "Métro Gare du Nord (lignes 4 et 5, RER B, D, E), à 3 min à pied. Métro Poissonnière (ligne 7) à 5 min.",
  telephone: "01 48 78 73 56",
  telephoneLien: "+33148787356",
  horaires: {
    lundi: [],
    mardi: [["07:30", "19:30"]],
    mercredi: [["07:30", "19:30"]],
    jeudi: [["07:30", "19:30"]],
    vendredi: [["07:30", "19:30"]],
    samedi: [["07:30", "19:00"]],
    dimanche: []
  },
  services: ["À emporter", "Formules du midi", "Commandes pour événements", "Galettes et couronnes en janvier"],
  carteSource: "carte en ligne, à vérifier (étiquettes de vitrine) + prix d'exemple",
  carte: [
    { titre: "Viennoiseries", note: "", produits: [
      { nom: "Croissant", desc: "", prix: 1.5, source: "carte en ligne, à vérifier" },
      { nom: "Pain au chocolat", desc: "", prix: 1.8, source: "carte en ligne, à vérifier" },
      { nom: "Triskell", desc: "", prix: 2, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Pâtisseries", note: "", produits: [
      { nom: "Tartelette aux pommes", desc: "", prix: 2.7, source: "carte en ligne, à vérifier" },
      { nom: "Moelleux pommes pécans", desc: "", prix: 2.7, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Pains", note: "", produits: [
      { nom: "Pain de mie", desc: "Au poids", prix: "10 € le kg", source: "carte en ligne, à vérifier" },
      { nom: "Baguette", desc: "Prix d'exemple", prix: 1.4, source: "Prix d'exemple" },
      { nom: "Pains spéciaux", desc: "Selon la fournée", prix: "selon le pain", source: "Prix d'exemple" }
    ] },
    { titre: "Le midi", note: "Formules : plat + boisson + dessert", produits: [
      { nom: "Formule sandwich", desc: "Sandwich seul à partir de 5,40 €", prix: "9,20 / 9,60 €", source: "carte en ligne, à vérifier" },
      { nom: "Formule quiche", desc: "", prix: 7.9, source: "carte en ligne, à vérifier" },
      { nom: "Formule pizza", desc: "", prix: 8.6, source: "carte en ligne, à vérifier" },
      { nom: "Salade, scone et café", desc: "", prix: 14.5, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Aussi en vitrine", note: "Prix d'exemple", produits: [
      { nom: "Kouign-amann", desc: "", prix: 3.2, source: "Prix d'exemple" },
      { nom: "Flan, la part", desc: "", prix: 3.5, source: "Prix d'exemple" },
      { nom: "Viennoiserie à la pistache", desc: "", prix: 3.2, source: "Prix d'exemple" },
      { nom: "Cookie", desc: "", prix: 2.8, source: "Prix d'exemple" }
    ] },
    { titre: "En janvier", note: "Pour l'Épiphanie", produits: [
      { nom: "Galette des rois", desc: "4, 6 ou 8 personnes", prix: "18 / 27 / 36 €", source: "carte en ligne, à vérifier" },
      { nom: "Couronne des rois", desc: "La pièce", prix: 15, source: "carte en ligne, à vérifier" }
    ] }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
