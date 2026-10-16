/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Lightea",
  type: "Bubble tea",
  accroche: "Bubble teas au thé infusé, perles de tapioca, crème brûlée et matcha. Sucre et glaçons à votre goût, à emporter ou sur place, tous les jours dès midi.",
  adresse: "98 rue du Faubourg-Poissonnière, 75010 Paris",
  acces: "Métro Poissonnière (ligne 7), à 2 min à pied. Gare du Nord à 8 min.",
  telephone: "01 42 96 16 34",
  telephoneLien: "+33142961634",
  horaires: {
    lundi: [["12:00", "21:00"]],
    mardi: [["12:00", "21:00"]],
    mercredi: [["12:00", "21:00"]],
    jeudi: [["12:00", "21:00"]],
    vendredi: [["12:00", "21:00"]],
    samedi: [["12:00", "20:00"]],
    dimanche: [["12:00", "20:00"]]
  },
  services: ["Sur place", "À emporter", "Livraison", "Sucre réglable", "Lait de soja ou de coco"],
  carteSource: "carte en ligne, à vérifier",
  carte: [
    { titre: "Milk Tea", note: "Prix en taille M / L", produits: [
      { nom: "Original Milk Tea", desc: "", prix: "4,29 / 4,99 €", source: "carte en ligne, à vérifier" },
      { nom: "Coconut Milk Tea", desc: "", prix: "4,29 / 4,99 €", source: "carte en ligne, à vérifier" },
      { nom: "Printemps Jasmin Milk Tea", desc: "", prix: "4,29 / 4,99 €", source: "carte en ligne, à vérifier" },
      { nom: "Taro Milk Tea", desc: "", prix: "4,29 / 4,99 €", source: "carte en ligne, à vérifier" },
      { nom: "Crème Brûlée Oréo Milk Tea", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Brown Sugar Crème Brûlée Milk Tea", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Taro Jasmin Milk Tea", desc: "Taille unique", prix: 5.59, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Fruit Tea", note: "Prix en taille M / L", produits: [
      { nom: "Thé au Citron", desc: "", prix: "3,29 / 3,99 €", source: "carte en ligne, à vérifier" },
      { nom: "Ananas Passion Fruit Tea", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Pamplemousse Jasmin Tea", desc: "", prix: "4,69 / 5,39 €", source: "carte en ligne, à vérifier" },
      { nom: "Popping Fruit Tea", desc: "Fraise, litchi, mangue, passion ou pêche", prix: "4,59 / 5,29 €", source: "carte en ligne, à vérifier" },
      { nom: "Litchi Ananas Jasmin Tea", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Pêche Litchi Lemon Tea", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Mangue Pamplemousse au lait de coco", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Fraises Litchi Smoothie", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Matcha, Taro, Brown Sugar", note: "", produits: [
      { nom: "Matcha Boba Milk Tea", desc: "M / L", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Matcha Crème Brûlée Milk Tea", desc: "M / L", prix: "5,29 / 5,99 €", source: "carte en ligne, à vérifier" },
      { nom: "Matcha Mangue Smoothie", desc: "", prix: 4.99, source: "carte en ligne, à vérifier" },
      { nom: "Taro Milk", desc: "", prix: 5.59, source: "carte en ligne, à vérifier" },
      { nom: "Taro Smoothie", desc: "M / L", prix: "5,29 / 5,99 €", source: "carte en ligne, à vérifier" },
      { nom: "Brown Sugar Boba Milk", desc: "", prix: 5.29, source: "carte en ligne, à vérifier" },
      { nom: "Oréo Brown Sugar Boba Milk", desc: "", prix: 5.59, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Crème Cheese", note: "Prix en taille M / L", produits: [
      { nom: "Thé Jasmin Crème Cheese", desc: "", prix: "4,59 / 5,19 €", source: "carte en ligne, à vérifier" },
      { nom: "Boba Milk Tea Crème Cheese", desc: "", prix: "4,99 / 5,59 €", source: "carte en ligne, à vérifier" },
      { nom: "Mangue Smoothie Crème Cheese", desc: "", prix: "4,99 / 5,69 €", source: "carte en ligne, à vérifier" },
      { nom: "Ananas Smoothie Crème Cheese", desc: "", prix: "4,99 / 5,69 €", source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Special café", note: "Avec café", produits: [
      { nom: "Coconut Latte", desc: "", prix: 5.69, source: "carte en ligne, à vérifier" },
      { nom: "Brown Sugar Boba Latte", desc: "", prix: 5.69, source: "carte en ligne, à vérifier" },
      { nom: "Matcha Latte", desc: "", prix: 5.69, source: "carte en ligne, à vérifier" },
      { nom: "Cacao Café Smoothie", desc: "", prix: 5.69, source: "carte en ligne, à vérifier" }
    ] },
    { titre: "Ice Cream", note: "", produits: [
      { nom: "Popping Sundae", desc: "", prix: 3.59, source: "carte en ligne, à vérifier" },
      { nom: "Brown Sugar Oréo Sundae", desc: "", prix: 3.99, source: "carte en ligne, à vérifier" },
      { nom: "Milk Shake mangue, taro ou Oréo", desc: "", prix: 4.99, source: "carte en ligne, à vérifier" },
      { nom: "Thé noir ou matcha Ice Cream", desc: "", prix: 4.99, source: "carte en ligne, à vérifier" }
    ] }
  ],
  liens: { reservation: "", instagram: "", facebook: "", site: "" }
};
