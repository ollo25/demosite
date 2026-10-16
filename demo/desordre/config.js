/* Données modifiables de la démo. Modifier ici, pas dans le HTML. */
window.CONFIG = {
  nom: "désordre",
  type: "Bar",
  accroche: "Cocktails, pression et rock des années 60, du mardi au samedi jusqu'à 2h.",
  adresse: "103 rue de la Folie-Méricourt, 75011 Paris",
  acces: "Métro Goncourt (ligne 11) à 3 minutes, République (lignes 3, 5, 8, 9, 11) à 8 minutes",
  telephone: "09 74 64 19 91",
  telephoneLien: "+33974641991",
  horaires: {
    lundi: [],
    mardi: [["18:00", "02:00"]],
    mercredi: [["18:00", "02:00"]],
    jeudi: [["18:00", "02:00"]],
    vendredi: [["18:00", "02:00"]],
    samedi: [["18:00", "02:00"]],
    dimanche: []
  },
  services: ["Service au bar", "DJ sets certains soirs", "Sans alcool à la carte", "LGBTQ+ friendly"],
  carteSource: "carte en ligne, à vérifier",
  carte: [
    {
      titre: "Cocktails",
      note: "",
      produits: [
        { nom: "Negroni", desc: "Gin, vermouth rouge, Campari", prix: 9, source: "carte en ligne, à vérifier" },
        { nom: "Bramble", desc: "Gin, citron, liqueur de mûre, sucre", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Anna's", desc: "Gin, citron, orgeat, Angostura", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Mai Tai", desc: "Rhums, orgeat, triple sec, citron", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Bloody Mary", desc: "Vodka, tomate, Worcester, citron, Tabasco", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Dark & Stormy", desc: "Rhum, ginger beer, citron vert, Angostura", prix: 10, source: "carte en ligne, à vérifier" },
        { nom: "Apricot Hill", desc: "Vodka, liqueur d'abricot, orgeat, citron", prix: 11, source: "carte en ligne, à vérifier" },
        { nom: "Dragon Punch", desc: "Mezcal, Chartreuse jaune, citron, orgeat, Tabasco", prix: 12, source: "carte en ligne, à vérifier" },
        { nom: "Gin tonic, mules", desc: "Moscow, London, Irish… Hard+Soft", prix: 9, source: "carte en ligne, à vérifier" }
      ]
    },
    {
      titre: "Pression & cidre",
      note: "Prix d'exemple, à confirmer",
      produits: [
        { nom: "Blonde pression", desc: "25 cl", prix: 4.5, source: "Prix d'exemple" },
        { nom: "Blonde pression", desc: "50 cl", prix: 8, source: "Prix d'exemple" },
        { nom: "Cidre", desc: "33 cl", prix: 6, source: "Prix d'exemple" }
      ]
    },
    {
      titre: "Sans alcool",
      note: "",
      produits: [
        { nom: "Athletic IPA ou Golden Lager (<0,5 %)", desc: "33 cl", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "Archipel Kombucha", desc: "33 cl", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "Club Maté", desc: "33 cl", prix: 6, source: "carte en ligne, à vérifier" },
        { nom: "Coca-Cola, Perrier, limonade", desc: "33 cl", prix: 4.5, source: "carte en ligne, à vérifier" },
        { nom: "Ginger beer", desc: "20 cl", prix: 3.5, source: "carte en ligne, à vérifier" },
        { nom: "Sirop", desc: "33 cl", prix: 2.5, source: "carte en ligne, à vérifier" },
        { nom: "Jus de fruits", desc: "20 cl", prix: 3.5, source: "carte en ligne, à vérifier" }
      ]
    }
  ],
  liens: {
    reservation: "",
    instagram: "https://www.instagram.com/desordre.bar/",
    facebook: "",
    site: ""
  }
};
