/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Mana Léon",
  type: "Restaurant thaï",
  accroche: "Cuisine thaïe faite maison, rue Sainte-Marthe : pad thaï, salade de bœuf au citron vert et riz gluant à la mangue.",
  adresse: "21 rue Sainte-Marthe, 75010 Paris",
  acces: "Métro Belleville (lignes 2 et 11) ou Colonel Fabien (ligne 2), quelques minutes à pied.",
  telephone: "06 12 67 28 21",
  telephoneLien: "+33612672821",
  horaires: {
    lundi: [["19:00", "22:15"]],
    mardi: [["12:00", "15:00"], ["19:00", "22:30"]],
    mercredi: [["12:00", "15:00"], ["19:00", "22:30"]],
    jeudi: [["12:00", "15:00"], ["19:00", "23:00"]],
    vendredi: [["12:00", "15:00"], ["19:00", "23:00"]],
    samedi: [["12:00", "15:00"], ["19:00", "23:00"]],
    dimanche: [["12:00", "15:00"], ["19:00", "22:00"]]
  },
  services: ["Sur place", "À emporter", "Ouvert tous les jours (le lundi, le soir seulement)"],
  carteSource: "Plats : prix d'exemple. Boissons : carte en ligne, à vérifier",
  carte: [
    {
      titre: "Les plats",
      note: "Prix d'exemple — plats cités par les clients, carte à confirmer",
      produits: [
        { nom: "Nems", desc: "Servis avec salade, menthe et sauce maison", prix: 8, source: "Prix d'exemple" },
        { nom: "Tom yum aux crevettes", desc: "Bouillon citronnelle, galanga, citron vert", prix: 9, source: "Prix d'exemple" },
        { nom: "Salade de bœuf", desc: "Bœuf grillé, citron vert, herbes fraîches, piment", prix: 14, source: "Prix d'exemple" },
        { nom: "Pad thaï", desc: "Nouilles de riz sautées, cacahuètes, pousses de soja, citron vert", prix: 14, source: "Prix d'exemple" },
        { nom: "Tigre qui pleure", desc: "Bœuf grillé tranché, sauce pimentée", prix: 17, source: "Prix d'exemple" },
        { nom: "Légumes sautés au wok", desc: "Selon le marché", prix: 12, source: "Prix d'exemple" },
        { nom: "Riz gluant à la mangue", desc: "Mangue fraîche, lait de coco, sésame", prix: 7, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Suppléments",
      note: "",
      produits: [
        { nom: "Riz gluant", desc: "", prix: 3, source: "carte en ligne, à vérifier" },
        { nom: "Riz thaï parfumé", desc: "", prix: 4, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Vins",
      note: "Au verre (12 cl), en pichet ou en bouteille",
      produits: [
        { nom: "Blanc · Chardonnay", desc: "25 cl 9 € · 50 cl 17 € · bouteille 23 €", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Rosé · Listel grain de gris", desc: "25 cl 9 € · 50 cl 17 €", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Rouge · Pinot noir", desc: "25 cl 9 € · 50 cl 17 € · bouteille 23 €", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Côtes du Rhône", desc: "25 cl 9 € · 50 cl 17 €", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Kir", desc: "Cassis, pêche, fraise ou mûre", prix: 7, source: "carte en ligne, à vérifier" },
        { nom: "Champagne Eric Legrand", desc: "La bouteille", prix: 67, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Bières et boissons fraîches",
      note: "Sodas à emporter : 2 €",
      produits: [
        { nom: "Singha (Thaïlande)", desc: "33 cl", prix: 5.5, source: "carte en ligne, à vérifier" },
        { nom: "Leffe", desc: "25 cl", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Thé froid au lait maison", desc: "33 cl", prix: 7, source: "carte en ligne, à vérifier" },
        { nom: "Café froid au lait maison", desc: "33 cl", prix: 7, source: "carte en ligne, à vérifier" },
        { nom: "Jus de coco", desc: "29 cl", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "Jus de fruits", desc: "Fruit de la passion, litchi…", prix: 4, source: "carte en ligne, à vérifier" },
        { nom: "Coca-Cola, Coca zéro, Schweppes, Oasis", desc: "33 cl", prix: 3.5, source: "carte en ligne, à vérifier" },
        { nom: "Eau pétillante", desc: "50 cl", prix: 5.5, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Boissons chaudes",
      note: "",
      produits: [
        { nom: "Café", desc: "", prix: 2.5, source: "carte en ligne, à vérifier" },
        { nom: "Café au lait", desc: "", prix: 4, source: "carte en ligne, à vérifier" },
        { nom: "Thé au jasmin ou thé vert", desc: "", prix: 5.5, source: "carte en ligne, à vérifier" },
        { nom: "Infusions", desc: "Gingembre, citron, menthe, hibiscus…", prix: 5.5, source: "carte en ligne, à vérifier" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
