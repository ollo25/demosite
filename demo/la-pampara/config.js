/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "La Pampara",
  type: "Épicerie fine et glaces artisanales",
  accroche: "Sandwichs à emporter le midi, glaces et sorbets, biscuits, charcuterie et vins, sous le store rayé de la rue Alibert.",
  adresse: "9 rue Alibert, 75010 Paris",
  acces: "Métro Goncourt (ligne 11) ou Jacques Bonsergent (ligne 5), à 5 minutes à pied",
  telephone: "01 42 06 88 18",
  telephoneLien: "+33142068818",
  horaires: {
    lundi: [["11:00", "19:00"]],
    mardi: [["11:00", "19:00"]],
    mercredi: [["11:00", "19:00"]],
    jeudi: [["11:00", "19:00"]],
    vendredi: [["11:00", "19:00"]],
    samedi: [["14:00", "19:00"]],
    dimanche: [["14:00", "19:00"]]
  },
  services: ["À emporter", "Formule du midi", "Glaces et sorbets", "Idées cadeaux"],
  carteSource: "Prix d'exemple, sauf formule (avis, à vérifier)",
  carte: [
    {
      titre: "Le midi, à emporter",
      note: "",
      produits: [
        { nom: "Formule", desc: "Sandwich, panini ou salade, une boisson et un dessert", prix: 8.5, source: "avis, à vérifier" },
        { nom: "Sandwich vietnamien", desc: "Poulet mariné, crudités, coriandre", prix: 6.5, source: "Prix d'exemple" },
        { nom: "Sandwich charcuterie italienne", desc: "", prix: 6.5, source: "Prix d'exemple" },
        { nom: "Sandwich végétarien", desc: "", prix: 6, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Glaces, sorbets, milkshakes",
      note: "Parfums selon la saison",
      produits: [
        { nom: "Une boule", desc: "Cornet ou pot", prix: 3.5, source: "Prix d'exemple" },
        { nom: "Deux boules", desc: "", prix: 5.5, source: "Prix d'exemple" },
        { nom: "Trois boules", desc: "", prix: 7, source: "Prix d'exemple" },
        { nom: "Milkshake", desc: "", prix: 6.5, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "À boire, à grignoter",
      note: "",
      produits: [
        { nom: "Expresso", desc: "Noisette ou café au lait", prix: 2, source: "Prix d'exemple" },
        { nom: "Citronnade", desc: "", prix: 4, source: "Prix d'exemple" },
        { nom: "Limonade italienne", desc: "", prix: 3.5, source: "Prix d'exemple" },
        { nom: "Cookie maison", desc: "", prix: 3, source: "Prix d'exemple" },
        { nom: "Part de tarte", desc: "", prix: 4.5, source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
