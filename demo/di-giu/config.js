/* Données modifiables de la démo Di Giù. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Di Giù",
  type: "Pasticceria",
  accroche: "Maritozzi, pasticciotti, cannoli et panettone au levain, et pour le midi focaccia barese et pizza à la part.",
  adresse: "34 rue des Vinaigriers, 75010 Paris",
  acces: "Métro Jacques Bonsergent (ligne 5), à 4 minutes à pied",
  telephone: "",
  telephoneLien: "",
  horaires: {
    lundi: [],
    mardi: [],
    mercredi: [["08:00", "18:30"]],
    jeudi: [["08:00", "18:30"]],
    vendredi: [["08:00", "18:30"]],
    samedi: [["08:00", "18:30"]],
    dimanche: [["08:00", "18:30"]]
  },
  services: ["À emporter", "Sucré toute la journée, salé le midi", "Glaces et sorbets l'été"],
  carteSource: "étiquettes de la vitrine (photos déc. 2025 et juil. 2026), à vérifier ; reste : prix d'exemple",
  carte: [
    {
      titre: "Dolci",
      note: "",
      produits: [
        { nom: "Maritozzo", desc: "Pâte à brioche moelleuse, chantilly, crème pâtissière", prix: 6.5, source: "carte en ligne, à vérifier (étiquette vitrine, juil. 2026)" },
        { nom: "Pasticciotto", desc: "Spécialité apulienne : pâte sucrée, crème pâtissière", prix: 4.9, source: "carte en ligne, à vérifier (étiquette vitrine, déc. 2025)" },
        { nom: "Paris-Turin", desc: "Invention franco-italienne : chou au cacao, crème au gianduja, praliné croustillant maison", prix: 6.9, source: "carte en ligne, à vérifier (étiquette vitrine, déc. 2025)" },
        { nom: "Tiramisu au four", desc: "Frolla montata, crème au mascarpone, biscuit Sacher imbibé au café", prix: 6.9, source: "carte en ligne, à vérifier (étiquette vitrine, déc. 2025)" },
        { nom: "Cannolo siciliano", desc: "Ricotta. Prix d'exemple", prix: 5, source: "Prix d'exemple (cité dans les avis)" },
        { nom: "Tarte au citron meringuée", desc: "Prix d'exemple", prix: 5.5, source: "Prix d'exemple (vue en photo)" }
      ]
    },
    {
      titre: "Le matin",
      note: "Prix d'exemple",
      produits: [
        { nom: "Croissant", desc: "", prix: 1.8, source: "Prix d'exemple" },
        { nom: "Pain au chocolat", desc: "", prix: 2, source: "Prix d'exemple" },
        { nom: "Brioches assorties", desc: "Roulées à la cannelle, à la crème", prix: 3.5, source: "Prix d'exemple (vues en photo)" }
      ]
    },
    {
      titre: "Salé",
      note: "Prix d'exemple",
      produits: [
        { nom: "Focaccia barese", desc: "Tomates, olives, origan", prix: 4.5, source: "Prix d'exemple (citée dans les avis)" },
        { nom: "Pizza à la part", desc: "", prix: 4.5, source: "Prix d'exemple (citée dans les avis)" }
      ]
    },
    {
      titre: "Selon la saison",
      note: "Prix d'exemple",
      produits: [
        { nom: "Panettone au levain", desc: "Pour les fêtes", prix: "prix en boutique", source: "avis" },
        { nom: "Glaces et sorbets", desc: "L'été, en cornet ou en bac", prix: "4 € le cornet", source: "Prix d'exemple (photos août 2026, avis)" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
