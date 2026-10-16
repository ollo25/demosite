/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "Au Bon Endroit Bar",
  type: "Bar de quartier",
  accroche: "Jeux, bières & mauvaise foi. Fléchettes, beer pong, blind tests et matchs sur écran géant, rue des Goncourt.",
  adresse: "12 rue des Goncourt, 75011 Paris",
  acces: "Métro Goncourt (ligne 11) à 2 minutes ; Belleville et République à 10 minutes",
  telephone: "07 49 72 83 72",
  telephoneLien: "+33749728372",
  horaires: {
    lundi: [],
    mardi: [["18:00", "01:00"]],
    mercredi: [["18:00", "01:00"]],
    jeudi: [["18:00", "02:00"]],
    vendredi: [["18:00", "02:00"]],
    samedi: [["18:00", "02:00"]],
    dimanche: []
  },
  services: ["Happy hour 18h – 20h", "Fléchettes", "Beer pong", "Jeux de société", "Blind tests", "Matchs sur écran géant", "Planches", "Privatisation jusqu'à 80 personnes"],
  carteSource: "carte en ligne, à vérifier",
  carte: [
    {
      titre: "À la pression",
      note: "Prix en happy hour (mardi – samedi, 18h – 20h) indiqués en dessous",
      produits: [
        { nom: "Pinte ABE Beer", desc: "Happy hour : 4,50 €", prix: 5.5, source: "carte en ligne, à vérifier" },
        { nom: "Pinte de cidre", desc: "Happy hour : 7 €", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Pinte de blanche", desc: "Happy hour : 7 €", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Pinte IPA", desc: "Happy hour : 7 €", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Pinte de Chouffe", desc: "Happy hour : 8 €", prix: 9, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Au verre",
      note: "",
      produits: [
        { nom: "Cocktails classiques", desc: "Happy hour : 6,50 €", prix: 8, source: "carte en ligne, à vérifier" },
        { nom: "Verre de vin", desc: "", prix: 4.5, source: "carte en ligne, à vérifier" },
        { nom: "Bouteille de vin", desc: "", prix: 25, source: "carte en ligne, à vérifier" },
        { nom: "Shooter", desc: "", prix: 3.5, source: "carte en ligne, à vérifier" },
        { nom: "Punch", desc: "Le litre, à commander avant la soirée", prix: 35, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "À grignoter",
      note: "",
      produits: [
        { nom: "Planche mixte", desc: "", prix: 14, source: "carte en ligne, à vérifier" },
        { nom: "Saucisson", desc: "", prix: 7.5, source: "carte en ligne, à vérifier" },
        { nom: "Croque", desc: "", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "Tartinade de légumes", desc: "", prix: 6, source: "carte en ligne, à vérifier" }
      ]
    }
  ],
  liens: {
    reservation: "https://www.privateaser.com/lieu/39463-au-bon-endroit-bar",
    instagram: "https://www.instagram.com/aubonendroitbar/",
    facebook: "",
    site: ""
  }
};
