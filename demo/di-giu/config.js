/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Di Giù",
  type: "Pasticceria",
  accroche: "Pâtisserie italienne : cannoli, maritozzi, pasticciotti, panettone au levain, et focaccia barese pour le salé.",
  adresse: "34 rue des Vinaigriers, 75010 Paris",
  acces: "Métro Jacques Bonsergent (ligne 5), à 4 minutes à pied",
  telephone: "",
  telephoneLien: "",
  horaires: {
    lundi: [],
    mardi: [],
    mercredi: [["09:00", "18:30"]],
    jeudi: [["08:00", "18:30"]],
    vendredi: [["08:00", "18:30"]],
    samedi: [["08:00", "18:30"]],
    dimanche: [["08:00", "18:30"]]
  },
  services: ["À emporter", "Boîtes à gâteaux", "Salé le midi"],
  carteSource: "Prix d'exemple, sauf pasticciotto (étiquette en vitrine, à vérifier)",
  carte: [
    {
      titre: "Dolci",
      note: "",
      produits: [
        { nom: "Pasticciotto", desc: "Spécialité des Pouilles : pâte sucrée, crème pâtissière", prix: 4.2, source: "carte en ligne, à vérifier" },
        { nom: "Cannolo siciliano", desc: "Ricotta, pistache, orange confite", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Maritozzo", desc: "Brioche romaine fendue, garnie de crème", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Tiramisù", desc: "", prix: 6, source: "Prix d'exemple" },
        { nom: "Paris-Turin", desc: "Pâte à choux, crème pralinée", prix: 6.5, source: "Prix d'exemple" },
        { nom: "Tarte au citron meringuée", desc: "", prix: 5.5, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Le matin",
      note: "",
      produits: [
        { nom: "Croissant", desc: "", prix: 1.6, source: "Prix d'exemple" },
        { nom: "Pain au chocolat", desc: "", prix: 1.9, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Salé",
      note: "",
      produits: [
        { nom: "Focaccia barese", desc: "Tomates, olives, origan", prix: 4, source: "Prix d'exemple" },
        { nom: "Pizza, à la part", desc: "", prix: 4.5, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "En saison",
      note: "",
      produits: [
        { nom: "Panettone au levain", desc: "", prix: "prix en boutique", source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
