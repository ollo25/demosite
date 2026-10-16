/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Cave Pétillance",
  type: "Caviste et bar à vins",
  accroche: "Champagnes de vignerons et vins de Bourgogne, à boire sur place avec une planche ou à emporter.",
  adresse: "19 rue Condorcet, 75009 Paris",
  acces: "Métro Poissonnière (ligne 7), à 5 minutes à pied",
  telephone: "01 42 00 56 80",
  telephoneLien: "+33142005680",
  horaires: {
    lundi: [],
    mardi: [["16:00", "23:00"]],
    mercredi: [["16:00", "23:00"]],
    jeudi: [["16:00", "23:00"]],
    vendredi: [["16:00", "23:00"]],
    samedi: [["11:00", "23:00"]],
    dimanche: [["16:00", "21:00"]]
  },
  services: ["Comptoir, tables et terrasse", "Vente à emporter", "Réservation en ligne", "Privatisation", "Toilettes accessibles en fauteuil roulant"],
  carteSource: "carte en ligne, à vérifier (exemple de carte publié par la cave, change selon les arrivages)",
  carte: [
    {
      titre: "À grignoter",
      note: "Exemple de carte : elle change selon les arrivages.",
      produits: [
        { nom: "Planche de fromages", desc: "", prix: 19, source: "carte en ligne, à vérifier" },
        { nom: "Demi saucisson", desc: "", prix: 7, source: "carte en ligne, à vérifier" },
        { nom: "Jambon ibérique", desc: "", prix: 23, source: "carte en ligne, à vérifier" },
        { nom: "Rillettes d'oie", desc: "", prix: 14, source: "carte en ligne, à vérifier" },
        { nom: "Saumon fumé", desc: "", prix: 16, source: "carte en ligne, à vérifier" },
        { nom: "Pinsa du chef", desc: "", prix: 13, source: "carte en ligne, à vérifier" },
        { nom: "Faux-filet de wagyu", desc: "Prix aux 100 grammes", prix: 24, source: "carte en ligne, à vérifier" },
        { nom: "Caviar iranien Beluga", desc: "30 grammes", prix: 150, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "À boire",
      note: "Au verre selon les bouteilles ouvertes du jour, ou à la bouteille.",
      produits: [
        { nom: "Champagnes de vignerons", desc: "Une soixantaine de maisons de vignerons", prix: "prix sur place", source: "carte en ligne, à vérifier" },
        { nom: "Bourgognes", desc: "Blancs et rouges, de Chablis à la Côte de Nuits", prix: "prix sur place", source: "carte en ligne, à vérifier" },
        { nom: "Jura, Piémont, Valais…", desc: "Une sélection de vins fins d'autres régions", prix: "prix sur place", source: "carte en ligne, à vérifier" }
      ]
    }
  ],
  liens: {
    reservation: "https://www.google.com/maps/reserve/v/dine/c/EHjVipIXmMs?source=pa&hl=fr-FR",
    instagram: "https://www.instagram.com/cavepetillance",
    facebook: "https://www.facebook.com/CavePetillance/",
    site: ""
  }
};
