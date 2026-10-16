/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "The Sunny Side",
  type: "Café",
  accroche: "Bagnats, cakes maison et latte à la datte, au bord du canal Saint-Martin.",
  adresse: "79 quai de Valmy, 75010 Paris",
  acces: "Métro Jacques Bonsergent (ligne 5), à 4 minutes à pied",
  telephone: "",
  telephoneLien: "",
  horaires: {
    lundi: [["09:00", "17:30"]],
    mardi: [["09:00", "17:30"]],
    mercredi: [["09:00", "17:30"]],
    jeudi: [["09:00", "17:30"]],
    vendredi: [["09:00", "17:30"]],
    samedi: [["09:30", "18:00"]],
    dimanche: [["09:30", "18:00"]]
  },
  services: ["Sur place", "À emporter", "Options végétariennes et vegan", "Cake sans gluten", "LGBTQ+ friendly"],
  carteSource: "carte en ligne, à vérifier (boissons : prix d'exemple)",
  carte: [
    {
      titre: "All the day brunch",
      note: "",
      produits: [
        { nom: "Granola", desc: "Fromage blanc, granola maison figues-chocolat, compotée de fraise, huile d'olive, réduction de balsamique. Yaourt soja ou coco +1 €", prix: 10.5, source: "carte en ligne, à vérifier" },
        { nom: "L'œuf qui chante", desc: "Œuf bio à la coque, pain aux céréales ou aux fruits secs, dukkah maison", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "La brioche bronzée", desc: "Brioche toastée croustillante, parfumée à la fleur d'oranger", prix: 11, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Bagnats",
      note: "",
      produits: [
        { nom: "Bagnat du soleil", desc: "Omelette bio à la ciboulette et au parmesan, golden labneh, sweet harissa, oignons caramélisés, herbes fraîches, dukkah maison", prix: 13, source: "carte en ligne, à vérifier" },
        { nom: "Le Bournous", desc: "Le houmous habillé à la tunisienne", prix: "prix sur place", source: "carte en ligne, à vérifier" },
        { nom: "Le Bazness", desc: "Le bagnat qui donne envie de revenir", prix: "prix sur place", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Dip",
      note: "Servi avec du pain",
      produits: [
        { nom: "Labneh harissa à la rose", desc: "Labneh fouetté, harissa douce à la rose, pistaches, menthe fraîche, pétales de rose, huile d'olive", prix: "prix sur place", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Cakes",
      note: "",
      produits: [
        { nom: "Banana chocolate bread", desc: "Caramel de dattes", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Sorgho cake", desc: "Sorgho, noisette, amande, halva maison. Sans gluten", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Cookies", desc: "", prix: "4 € / 4,50 €", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "À boire",
      note: "Prix d'exemple",
      produits: [
        { nom: "Espresso", desc: "", prix: 2.5, source: "Prix d'exemple" },
        { nom: "Latte", desc: "", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Latte à la datte", desc: "", prix: 5.5, source: "Prix d'exemple" },
        { nom: "Matcha latte", desc: "", prix: 5.5, source: "Prix d'exemple" }
      ]
    }
  ],
  liens: { reservation: "", instagram: "https://www.instagram.com/thesunnysideparis/", facebook: "", site: "" }
};
