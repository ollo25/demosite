/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Le Dirty Queen",
  type: "Bar",
  accroche: "Gin, cocktails et bières craft sous les néons, karaoké et baby-foot au sous-sol.",
  adresse: "12 rue de Paradis, 75010 Paris",
  acces: "Métro Château d'Eau (ligne 4) ou Gare de l'Est (lignes 4, 5, 7), à 5 minutes à pied",
  telephone: "09 74 64 02 93",
  telephoneLien: "+33974640293",
  horaires: {
    lundi: [["17:00", "02:00"]],
    mardi: [["17:00", "02:00"]],
    mercredi: [["17:00", "02:00"]],
    jeudi: [["17:00", "02:00"]],
    vendredi: [["17:00", "02:00"]],
    samedi: [["19:00", "02:00"]],
    dimanche: []
  },
  happyHour: "Du mardi au vendredi de 17h à 20h, le samedi de 19h à 21h",
  services: ["Karaoké et baby-foot gratuits", "Sous-sol voûté privatisable", "Groupes jusqu'à 100 personnes", "Gâteau d'anniversaire accepté"],
  carteSource: "carte en ligne, à vérifier (Privateaser et photo de la carte de mai 2024)",
  carte: [
    {
      titre: "À la pression",
      note: "Prix de la pinte. Happy hour entre parenthèses.",
      produits: [
        { nom: "Blonde", desc: "Kloster, 5°", prix: "5 € (4 €)", source: "carte en ligne, à vérifier" },
        { nom: "IPA", desc: "Rouget de Lisle, 6°", prix: "7,50 € (6,50 €)", source: "carte en ligne, à vérifier" },
        { nom: "Blonde belge", desc: "Cuvée des Trolls, 7°", prix: "8 € (6,50 €)", source: "carte en ligne, à vérifier" },
        { nom: "Ambrée", desc: "Ninkasi Pale Ale, 5°", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Blanche", desc: "Rouget de Lisle, 4,8°", prix: 7.5, source: "carte en ligne, à vérifier" },
        { nom: "Cidre", desc: "Magners, 4,5°", prix: 8, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Gin tonic",
      note: "Demandez le gin tonic du moment.",
      produits: [
        { nom: "Concombre", desc: "Gin Hendrick's, tonic au sureau, concombre frais, poivre gris", prix: "10 € (6 €)", source: "carte en ligne, à vérifier" },
        { nom: "Pamplemousse", desc: "Gin Tanqueray, tonic à la rose, pamplemousse frais", prix: "10 € (6 €)", source: "carte en ligne, à vérifier" },
        { nom: "Romarin fumé", desc: "Gin d'Azur, tonic, romarin frais", prix: "10 € (6 €)", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Cocktails",
      note: "",
      produits: [
        { nom: "Cocktail", desc: "", prix: "8 € (6 €)", source: "carte en ligne, à vérifier" },
        { nom: "Fruity Pinky", desc: "Création de la maison", prix: 7, source: "carte en ligne, à vérifier" },
        { nom: "The Substance", desc: "Création de la maison", prix: 9, source: "carte en ligne, à vérifier" },
        { nom: "Doragon", desc: "Saké, confiture de yuzu", prix: "prix au bar", source: "carte en ligne, à vérifier" },
        { nom: "Cocktail sans alcool", desc: "", prix: "6 € (5 €)", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "À plusieurs",
      note: "",
      produits: [
        { nom: "Litre de cocktail", desc: "", prix: 30, source: "carte en ligne, à vérifier" },
        { nom: "Mètre de shots", desc: "", prix: 30, source: "carte en ligne, à vérifier" },
        { nom: "Shot", desc: "", prix: 3.5, source: "carte en ligne, à vérifier" },
        { nom: "Vin", desc: "Le verre / la bouteille", prix: "5 € / 27 €", source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "À grignoter",
      note: "",
      produits: [
        { nom: "Nachos salsa ou cheddar", desc: "", prix: 4, source: "carte en ligne, à vérifier" },
        { nom: "Nachos guacamole", desc: "", prix: 5, source: "carte en ligne, à vérifier" },
        { nom: "Assiette de falafels", desc: "", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Hot-dog végétarien ou vegan", desc: "", prix: "prix au bar", source: "carte en ligne, à vérifier" }
      ]
    }
  ],
  liens: {
    reservation: "https://www.privateaser.com/lieu/40207-ginette-et-georgette/booking-widget",
    instagram: "https://www.instagram.com/ledirtyqueen/",
    facebook: "",
    site: ""
  }
};
