/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Café de l'Église",
  type: "Café-restaurant",
  accroche: "Du premier café au dernier verre, face à l'église Saint-Vincent-de-Paul. Terrasse sur la place Franz-Liszt, ouvert tous les jours.",
  adresse: "2 place Franz Liszt, 75010 Paris",
  acces: "Métro Poissonnière (ligne 7), à 3 min à pied. Gare du Nord à 5 min.",
  telephone: "01 42 47 01 23",
  telephoneLien: "+33142470123",
  horaires: {
    lundi: [["07:00", "02:00"]],
    mardi: [["07:00", "02:00"]],
    mercredi: [["07:00", "02:00"]],
    jeudi: [["07:00", "02:00"]],
    vendredi: [["07:00", "02:00"]],
    samedi: [["07:00", "02:00"]],
    dimanche: [["08:00", "00:00"]]
  },
  services: ["Terrasse chauffée", "Petit déjeuner", "Brunch le week-end", "Tapas dès 17h", "Privatisation", "À emporter", "Accès fauteuil roulant", "Wi-Fi", "Animaux acceptés"],
  carteSource: "carte en ligne, à vérifier",
  carte: [
    { titre: "Le matin", note: "Petit déjeuner de 8h à 11h30", produits: [
      { nom: "Petit déjeuner", desc: "Jus d'orange, boisson chaude, viennoiserie, tartine beurre et confiture maison", prix: 8.5, source: "carte en ligne, à vérifier" },
      { nom: "Petit déjeuner complet", desc: "Le même, avec œufs au plat ou omelette nature", prix: 13, source: "carte en ligne, à vérifier" },
      { nom: "Croissant ou pain au chocolat", desc: "", prix: 2.5, source: "carte en ligne, à vérifier" },
      { nom: "Pancakes aux fruits rouges et mascarpone", desc: "", prix: 9, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Brunch", note: "Samedi et dimanche, de 10h à 16h", produits: [
      { nom: "Le brunch de l'Église", desc: "Boisson chaude, orange pressée, viennoiserie, pancakes, fromage blanc au muesli, brioche salée, salade d'avocat, œufs brouillés au bacon", prix: 27, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Entrées et planches", note: "", produits: [
      { nom: "Escargots de Bourgogne", desc: "Par 6 / par 12", prix: "12 € / 22 €", source: "carte en ligne, à vérifier" },
      { nom: "Planche de l'Église", desc: "Comté, saint-nectaire, croustillants de mozzarella, jambon cru, saucisson, houmous, frites de patate douce", prix: 25, source: "carte en ligne, à vérifier" },
      { nom: "Planche de fromages Marie Quatrehomme", desc: "Saint-nectaire, camembert, comté, chèvre", prix: 19, source: "carte en ligne, à vérifier" },
      { nom: "Planche mixte fromages et charcuterie", desc: "", prix: 21, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Plats", note: "", produits: [
      { nom: "Cuisse de canard confite maison", desc: "Pommes grenaille ail et persil", prix: 23, source: "carte en ligne, à vérifier" },
      { nom: "Tartare de bœuf", desc: "Frites maison et salade", prix: 18, source: "carte en ligne, à vérifier" },
      { nom: "Entrecôte, sauce poivre", desc: "Frites maison et haricots verts", prix: 29, source: "carte en ligne, à vérifier" },
      { nom: "Santa burger", desc: "Haché de bœuf, foie gras, oignons confits, frites maison", prix: 22, source: "carte en ligne, à vérifier" },
      { nom: "Filet de daurade à la provençale", desc: "Aïoli, courgettes, carottes, chou-fleur, œuf", prix: 21, source: "carte en ligne, à vérifier" },
      { nom: "Risotto, poêlée de poulpe", desc: "Crème pesto d'épinards, coulis de poivrons", prix: 18, source: "carte en ligne, à vérifier" },
      { nom: "Chicken salad", desc: "Romaine, tomates cerises, parmesan, avocat, poulet croustillant, sauce caesar", prix: 18, source: "carte en ligne, à vérifier" },
      { nom: "Croque-monsieur, salade", desc: "+0,50 € avec frites", prix: 13, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Tapas", note: "À partir de 17h", produits: [
      { nom: "Frites de patate douce, sauce tartare", desc: "", prix: 7, source: "carte en ligne, à vérifier" },
      { nom: "Crispy chicken laqué teriyaki", desc: "", prix: 7, source: "carte en ligne, à vérifier" },
      { nom: "Brick chèvre et miel", desc: "", prix: 7, source: "carte en ligne, à vérifier" },
      { nom: "Assortiment de 3 tapas au choix", desc: "", prix: 18, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Desserts", note: "", produits: [
      { nom: "Baba au rhum maison", desc: "", prix: 10, source: "carte en ligne, à vérifier" },
      { nom: "Tarte Tatin", desc: "Pot de crème fraîche et caramel beurre salé", prix: 9, source: "carte en ligne, à vérifier" },
      { nom: "Crème brûlée maison à la vanille", desc: "", prix: 8.5, source: "carte en ligne, à vérifier" },
      { nom: "Café ou thé gourmand", desc: "", prix: 9, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Au comptoir", note: "", produits: [
      { nom: "Café, décaféiné", desc: "", prix: 2.7, source: "carte en ligne, à vérifier" },
      { nom: "Café crème, latte", desc: "", prix: 5.2, source: "carte en ligne, à vérifier" },
      { nom: "Cappuccino", desc: "", prix: 6.5, source: "carte en ligne, à vérifier" },
      { nom: "Thés et infusions", desc: "", prix: 5.2, source: "carte en ligne, à vérifier" },
      { nom: "Orangeade ou citronnade maison", desc: "", prix: 6.5, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Le soir", note: "", produits: [
      { nom: "Cocktails classiques", desc: "Aperol Spritz, Mojito, Espresso Martini, Peach Beauty…", prix: 10, source: "carte en ligne, à vérifier" },
      { nom: "Cocktails signature", desc: "Porn Star Martini, French 75, All In…", prix: 12, source: "carte en ligne, à vérifier" },
      { nom: "Mocktails sans alcool", desc: "", prix: 8, source: "carte en ligne, à vérifier" },
      { nom: "Blanche de l'Église, pression", desc: "Bière blanche 4,5 %, 25 cl / 50 cl", prix: "5 € / 8 €", source: "carte en ligne, à vérifier" },
      { nom: "Verre de vin", desc: "Blanc, rosé ou rouge, 12 cl", prix: 6.5, source: "carte en ligne, à vérifier" },
      { nom: "Coupe de champagne", desc: "12 cl", prix: 12, source: "carte en ligne, à vérifier" }
    ] }
  ],
  liens: {
    reservation: "https://reserve.dish.co/287467",
    instagram: "https://www.instagram.com/cafedelegliseparis",
    facebook: "",
    site: ""
  }
};
