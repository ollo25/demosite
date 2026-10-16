# Démos de sites vitrines — commerces des 9e, 10e et 11e

Maquettes de sites vitrines pour 22 commerces parisiens, à montrer au patron sur un téléphone.
Chaque démo est une page unique, en HTML, CSS et JavaScript simples, sans framework ni étape de build.

- Liste interne des démos : https://ollo25.github.io/demosite/
- Une démo : `https://ollo25.github.io/demosite/demo/[slug]/`
- Le site n'est pas référencé (`robots.txt` + balise `noindex` sur chaque page).
- Aucune photo du lieu n'est utilisée : les photos Google Maps ont servi uniquement à observer
  (couleurs, enseigne, matériaux). Les emplacements « Vos photos ici » attendent les photos du patron.
- Bas de chaque page : « Maquette, site non officiel ».

## Organisation

```
index.html                  liste interne des démos
robots.txt, .nojekyll       non-référencement, GitHub Pages sans Jekyll
assets/commun/statut.js     badge « Ouvert · jusqu'à 23h » (heure de Paris, gère l'après-minuit)
assets/commun/remplir.js    affiche le contenu de config.js dans la page
assets/commun/reset.css     reset CSS commun
assets/commun/statut.test.html  tests du badge (ouvrir dans un navigateur)
demo/[slug]/index.html      la démo (contenu aussi présent en dur, lisible sans JavaScript)
demo/[slug]/style.css       styles + direction artistique expliquée en commentaire en tête
demo/[slug]/config.js       toutes les données modifiables du lieu
demo/[slug]/fonts/          polices libres (SIL OFL, fichiers woff2)
data/[slug].json            relevés de recherche, avec la source de chaque information
```

« Confiance » : *photos nombreuses* = direction artistique tirée de nombreuses photos de la fiche Google Maps ;
*photos rares* = peu de photos exploitables ; *direction supposée* = déduite des textes (presse, guides, avis,
descriptions), sans observation directe des photos — à recaler sur place.

## Les démos

| # | Nom | Type | Adresse | Démo | Concept | Éléments réels repris | Confiance | Carte | Horaires vérifiés |
|---|---|---|---|---|---|---|---|---|---|
| 1 | The Sunny Side | Café | 79 quai de Valmy, 75010 Paris | [demo/the-sunny-side/](https://ollo25.github.io/demosite/demo/the-sunny-side/) | Carreaux de ciment et soleil moutarde | carreaux de ciment bleu marine du comptoir, logo arrondi moutarde de la carte, soucoupes soleil, noms de plats rouge brique | photos nombreuses | carte réelle | oui |
| 2 | Parisette | Artisan fleuriste | 46 rue de Lancry, 75010 Paris | [demo/parisette/](https://ollo25.github.io/demosite/demo/parisette/) | Façade terre cuite et store à festons | terre cuite de la façade, store rayé avec « FLEURS » en capitales blanches, vert sapin de la porte voisine | photos nombreuses | prix d'exemple | oui |
| 3 | Di Giù | Pasticceria | 34 rue des Vinaigriers, 75010 Paris | [demo/di-giu/](https://ollo25.github.io/demosite/demo/di-giu/) | Pasticceria bleue et étiquettes de vitrine | bandeau crème et lettrage bleu « Di Giù », store bleu vif, chêne clair, mosaïque de rosier, étiquettes colorées de la vitrine | photos nombreuses | prix d'exemple | oui |
| 4 | Amulette | Café | 8 rue Sainte-Marthe, 75010 Paris | [demo/amulette/](https://ollo25.github.io/demosite/demo/amulette/) | Devanture bleu roi et carte en vitrine | bandeau bleu roi et enseigne serif blanche à fleurons, abat-jour froncé, banc rose, carte crème en vitrine, pois des tasses | photos nombreuses | prix d'exemple | oui |
| 5 | lemme lemme | Boutique gastronomique italienne | 12 rue Sainte-Marthe, 75010 Paris | [demo/lemme-lemme/](https://ollo25.github.io/demosite/demo/lemme-lemme/) | Devanture céladon et script bouclé | devanture céladon moulurée, enseigne en script blanc bouclé, oignon peint sur la vitrine, carrelage métro, comptoir bleu marine | photos nombreuses | prix d'exemple | oui |
| 6 | Mana Léon | Restaurant thaï | 21 rue Sainte-Marthe, 75010 Paris | [demo/mana-leon/](https://ollo25.github.io/demosite/demo/mana-leon/) | Enseigne bois et lettres dorées | enseigne bois brun à capitales dorées, guirlande de fanions, carte imprimée blanche à intitulés verts, ombrelle en papier huilé | photos nombreuses | prix d'exemple | oui |
| 7 | La Pampara | Épicerie fine et glaces artisanales | 9 rue Alibert, 75010 Paris | [demo/la-pampara/](https://ollo25.github.io/demosite/demo/la-pampara/) | Store rayé et cornet piñata | store rayé rouge et blanc à festons, « Épicerie gourmande » peint, bois miel, cornet de glace frangé, tôle emboutie, comptoir vert bouteille | photos nombreuses | prix d'exemple | oui |
| 8 | La Cave des Quais | Cave à vins et à manger | 15 rue Alibert, 75010 Paris | [demo/la-cave-des-quais/](https://ollo25.github.io/demosite/demo/la-cave-des-quais/) | Store olive et passerelle du canal | store vert olive à capitales blanches et passerelle en arc, menuiserie noire, guirlandes dorées, étagères vert olive, ardoise des huîtres | photos nombreuses | prix d'exemple | oui |
| 9 | Generoso | Restaurant italien | 46 quai de Jemmapes, 75010 Paris | [demo/generoso/](https://ollo25.github.io/demosite/demo/generoso/) | Mur brique et capitales dorées | mur rouge brique du bar, logo « GENEROSO vino & itinerari di gusto », mur à vins, cadres blancs de la salle | photos nombreuses | prix d'exemple | oui |
| 10 | Carburant | Bar et cave | 60 rue de Lancry, 75010 Paris | [demo/carburant/](https://ollo25.github.io/demosite/demo/carburant/) | Store marine et ardoise à la craie | store bleu marine « bar CARBURANT cave », quatre vitres peintes, ardoise noire des tireuses (noms roses, prix verts), étagères bleu électrique | photos nombreuses | prix d'exemple | oui |
| 11 | désordre | Bar | 103 rue de la Folie-Méricourt, 75011 Paris | [demo/desordre/](https://ollo25.github.io/demosite/demo/desordre/) | Devanture de nuit et carte machine à écrire | bandeau noir et bois teinté de la devanture, carte plastifiée tapée à la machine, mur vert bouteille, globes suspendus | photos nombreuses | carte réelle | oui |
| 12 | Au Bon Endroit Bar | Bar de quartier | 12 rue des Goncourt, 75011 Paris | [demo/au-bon-endroit/](https://ollo25.github.io/demosite/demo/au-bon-endroit/) | Néon rose et cible de fléchettes | store rouge à festons, néon rose, mur violet, fléchettes | photos nombreuses | carte réelle | oui |
| 13 | Gonflé | Boulangerie | 6 rue de Belzunce, 75010 Paris | [demo/gonfle/](https://ollo25.github.io/demosite/demo/gonfle/) | Store blanc et capitales rondes | store blanc, lettrage GONFLÉ en capitales rondes anthracite, chêne clair, étiquettes noires à la craie, vigne vierge | photos nombreuses | prix d'exemple | oui |
| 14 | IKA | Restaurant de curry japonais | 26 rue de Chabrol, 75010 Paris | [demo/ika/](https://ollo25.github.io/demosite/demo/ika/) | Noren blancs et calmar vert-de-gris | façade anthracite et bandeau rouge, noren blancs, disque de l'enseigne au calmar, chemins de table indigo à triangles, ardoise bilingue | photos nombreuses | prix d'exemple | non |
| 15 | Café de l'Église | Café-restaurant | 2 place Franz Liszt, 75010 Paris | [demo/cafe-de-l-eglise/](https://ollo25.github.io/demosite/demo/cafe-de-l-eglise/) | Store marine script et miroirs laiton | store bleu marine festonné au lettrage script, massif de fleurs, enduit pêche, miroirs dorés, plafond bleu ciel | photos nombreuses | carte réelle | oui |
| 16 | Lightea | Bubble tea | 98 rue du Faubourg-Poissonnière, 75010 Paris | [demo/lightea/](https://ollo25.github.io/demosite/demo/lightea/) | Mur citron et néon blanc | mur jaune citron, enseigne néon blanc sur caisson noir, feuillages, menu en vitrine à prix dans des ovales | photos nombreuses | carte réelle | oui |
| 17 | Aurélie Ribay Boulangère | Boulangerie | 36 bis rue de Dunkerque, 75010 Paris | [demo/aurelie-ribay/](https://ollo25.github.io/demosite/demo/aurelie-ribay/) | Store bordeaux, toucan et machine à écrire | store bordeaux à serif blanche, papier peint jungle au toucan, étiquettes tapées à la machine, vert d'eau | photos nombreuses | carte réelle | oui |
| 18 | Cave Pétillance | Caviste et bar à vins | 19 rue Condorcet, 75009 Paris | [demo/cave-petillance/](https://ollo25.github.io/demosite/demo/cave-petillance/) | Devanture de nuit et carte de la Champagne | store anthracite à petites lumières, lettrage blanc de la vitrine, carte de la Champagne peinte au mur, étagères en bois | photos nombreuses | carte réelle | oui |
| 19 | Missià | Épicerie fine corse | 38 rue Marguerite-de-Rochechouart, 75009 Paris | [demo/missia/](https://ollo25.github.io/demosite/demo/missia/) | Façade bleu pervenche et carte de Corse | mur bleu pervenche, nom fin espacé blanc, vitrine bleu nuit à inscription en arc, rouge des étiquettes | photos rares | prix d'exemple | oui |
| 20 | Symbiose | Bar à tapas, bistro | 11 rue de Paradis, 75010 Paris | [demo/symbiose/](https://ollo25.github.io/demosite/demo/symbiose/) | Carte imprimée chocolat et bandeau anthracite | carte imprimée blanche à titres brun chocolat, bandeau anthracite de la devanture au nom en serif blanche | photos nombreuses | carte réelle | oui |
| 21 | Le Dirty Queen | Bar | 12 rue de Paradis, 75010 Paris | [demo/le-dirty-queen/](https://ollo25.github.io/demosite/demo/le-dirty-queen/) | Néon vert et rose, carte à pois | enseigne néon « Le Dirty » vert / « Queen » rose, murs vert sapin, plateau vert à pois, lettres CARTE rose et jaune, feuille lilas | photos nombreuses | carte réelle | oui |
| 22 | Fruity Café | Café | 69 rue de Chabrol, 75010 Paris | [demo/fruity-cafe/](https://ollo25.github.io/demosite/demo/fruity-cafe/) | Vitrine pistache et script blanc | cadre vert pistache, guirlande d'eucalyptus et oranges, lanternes jaunes, « Fruity » en script blanc, carte encadrée de bois clair | photos nombreuses | carte réelle | non |

## Argument de vente, lieu par lieu

- **The Sunny Side** : Instagram seulement, aucun site ni téléphone sur Google ; 5,0 sur 190 avis : une carte en ligne lisible et les horaires suffiraient à convertir les passants du canal.
- **Parisette** : Seulement un blog WordPress gratuit (sans horaires, sans prix, adresse wordpress.com) : un vrai site avec horaires, offre et bouton Appeler.
- **Di Giù** : Aucun site, aucun téléphone, aucun réseau social sur Google ; 4,8 sur 116 avis.
- **Amulette** : Instagram seulement : aucun site, aucun téléphone sur Google, carte visible uniquement en vitrine ; 5,0 sur 79 avis et fermé lundi et mardi, des horaires clairs en ligne éviteraient les portes closes.
- **lemme lemme** : Instagram seulement, aucun site : 5,0 sur 85 avis mais rien en ligne pour savoir que l'on peut déjeuner (12h-14h30) et pas seulement acheter ; une page claire avec horaires de cuisine, carte et bouton d'appel.
- **Mana Léon** : Note 5,0 sur 135 avis mais aucun site web ni réseau social : les clients ne trouvent ni la carte ni les horaires ailleurs que sur Google.
- **La Pampara** : Aucun site, aucun réseau social sur Google (la fiche propose « Ajouter un site Web ») ; 4,6 sur 105 avis et des horaires différents le week-end (14h-19h) : une page avec horaires, formule du midi et glaces lèverait les doutes.
- **La Cave des Quais** : Instagram seulement : aucun site ; ouvert de 16h à 23h avec terrasse, 4,7 sur 162 avis : une page avec horaires du soir, huîtres et planches, et un bouton d'appel pour réserver les anniversaires.
- **Generoso** : Instagram seulement, aucun site : la réservation passe par Google/CoverManager mais aucune carte ni horaires lisibles hors Google ; 4,9 sur 260 avis.
- **Carburant** : Facebook seulement, aucun site ni téléphone sur Google ; l'offre change chaque semaine sur l'ardoise : une page simple avec horaires et ardoise à jour.
- **désordre** : Instagram seulement, aucun site : la carte des cocktails n'est visible nulle part en ligne hors photos de clients ; un site affiche horaires, carte et numéro.
- **Au Bon Endroit Bar** : Seulement une fiche Privateaser : pas de site à eux pour annoncer blind tests, matchs et happy hour, ni pour présenter la privatisation sans passer par une plateforme.
- **Gonflé** : Aucun site, aucun téléphone, aucun réseau social sur Google malgré 484 avis ; seul le nom avec des emojis.
- **IKA** : Instagram seulement, aucun site ; horaires Google contradictoires (le restaurant n'apparaît ouvert que le vendredi) : une page claire avec horaires et carte rassurerait les clients du quartier des gares.
- **Café de l'Église** : Le site actuel est une page modèle DISH/eatbu avec la carte en PDF de 9 Mo (illisible sur téléphone) ; la démo met la vraie carte en HTML, la réservation et l'horaire en un coup d'œil.
- **Lightea** : Aucun site web : la fiche Google affiche « Ajouter un site Web ». La carte n'existe qu'en tableau photographié par les clients.
- **Aurélie Ribay Boulangère** : Aucun site web : la fiche Google affiche « Ajouter un site Web ». Les formules du midi et les galettes ne sont visibles que sur place.
- **Cave Pétillance** : La fiche Google (4,8 sur 287 avis) ne renvoie qu'à Instagram ; il existe un site Zenchef générique (cavepetillance.fr) que Google ne connaît pas. Une page à leur image, avec la carte des grignotages, les producteurs et la réservation, pourrait devenir le lien de la fiche.
- **Missià** : Instagram seulement, aucun site : pas de liste de produits ni d'horaires lisibles hors Google.
- **Symbiose** : Fiche Privateaser seulement en guise de site ; réservation de groupe à mettre en avant sur un vrai site.
- **Le Dirty Queen** : Sur Google, seul un Linktree (4,7 sur 261 avis) : la carte n'y est qu'en PDF, les horaires et la réservation sont éparpillés entre Google, Joy et Privateaser. Une page unique avec carte, happy hour, soirées et réservation.
- **Fruity Café** : 5,0 sur 601 avis, Instagram seulement, aucun téléphone, et Google affiche « Fermé » tous les jours : des passants de Gare du Nord pensent que le café est fermé. Corriger la fiche et lui donner un vrai site avec horaires et carte.

## Points à vérifier avec chaque patron

### The Sunny Side
- [À VÉRIFIER] Téléphone : aucun numéro sur Google, boutons Appeler masqués
- [À VÉRIFIER] Prix des boissons (espresso, latte, latte à la datte, matcha) : prix d'exemple
- [À VÉRIFIER] Prix du Bournous, du Bazness et du dip labneh harissa à la rose : non lisibles sur la photo
- [À VÉRIFIER] Descriptions du Bournous et du Bazness reformulées à partir du glossaire de la carte
- [À VÉRIFIER] Carte relevée sur une photo d'août 2026 : vérifier qu'elle est à jour
- [À VÉRIFIER] Vente de pots à emporter (dukkah, sweet harissa, granola) : déduite de la carte et d'une photo
- [À VÉRIFIER] Accès métro déduit du plan

### Parisette
- [À VÉRIFIER] Tous les prix (bouquets dès 35 €, fleurs séchées dès 30 €, plantes dès 15 €) sont des prix d'exemple
- [À VÉRIFIER] Plantes en pot : déduites des photos (pots sur le trottoir, conifère en pot)
- [À VÉRIFIER] URL Instagram reconstituée à partir de l'identifiant cité sur le blog
- [À VÉRIFIER] Nom à afficher : 'Parisette' (blog) ou 'Parisette Fleurs' (Google)
- [À VÉRIFIER] Livraison : non mentionnée, non affichée
- [À VÉRIFIER] Accès métro déduit du plan

### Di Giù
- [À VÉRIFIER] Téléphone : aucun sur Google, boutons Appeler masqués (Itinéraire à la place)
- [À VÉRIFIER] Orthographe : « Di Giú » sur Google, « Di Giù » sur l'enseigne (la démo suit l'enseigne)
- [À VÉRIFIER] Horaire du mercredi : 8h (bloc principal) ou 9h (bloc secondaire) ?
- [À VÉRIFIER] Prix des étiquettes relevés en déc. 2025 et juil. 2026
- [À VÉRIFIER] Prix d'exemple : cannolo, tarte au citron, viennoiseries, brioches, focaccia, pizza, glaces
- [À VÉRIFIER] Glaces et sorbets : l'été seulement (avis)
- [À VÉRIFIER] Panettone : période de vente à confirmer
- [À VÉRIFIER] Instagram éventuel non trouvé
- [À VÉRIFIER] Accès métro déduit du plan

### Amulette
- [À VÉRIFIER] Téléphone : aucun numéro sur Google, boutons Appeler masqués
- [À VÉRIFIER] Carte : rubriques réelles (À manger, Pâtisseries au comptoir, Les cafés) mais intitulés des produits déduits des avis et photos, tous les prix sont des prix d'exemple
- [À VÉRIFIER] Thés et infusions : rubrique ajoutée d'après les avis (théière, infusion)
- [À VÉRIFIER] À emporter : déduit
- [À VÉRIFIER] Accès métro déduit du plan
- [À VÉRIFIER] Horaires : vérifier les horaires d'hiver

### lemme lemme
- [À VÉRIFIER] Carte du déjeuner et de l'aperitivo : intitulés déduits des photos et des avis, tous les prix sont des prix d'exemple
- [À VÉRIFIER] Ateliers et apéritifs de groupe : mentionnés sur Instagram et Privateaser, modalités à confirmer
- [À VÉRIFIER] Couleur exacte de la façade (céladon de jour, bleu clair de nuit)
- [À VÉRIFIER] Réservation : aucun lien propre trouvé, la démo renvoie au téléphone
- [À VÉRIFIER] Accès métro déduit du plan

### Mana Léon
- [À VÉRIFIER] Carte des plats et prix : les prix des plats sont des prix d'exemple (seule la page des boissons était lisible).
- [À VÉRIFIER] Noms exacts des plats (ex. « Tigre qui pleure », « Salade de bœuf ») et descriptions.
- [À VÉRIFIER] Prix des boissons relevés sur une photo d'avril 2026 : à confirmer.
- [À VÉRIFIER] Vente à emporter : déduite de la mention « soda à emporter » sur la carte.
- [À VÉRIFIER] Accès métro : déduit (Belleville / Colonel Fabien).
- [À VÉRIFIER] Instagram ou autre réseau éventuel non trouvé sur la fiche.
- [À VÉRIFIER] Réservation par téléphone possible ? (aucun lien de réservation).

### La Pampara
- [À VÉRIFIER] Prix de la formule : 8 € sur une ardoise de 2022, 8,50 € dans un avis plus récent ; la démo affiche 8,50 €
- [À VÉRIFIER] Prix des glaces, milkshakes, citronnade et boissons : prix d'exemple
- [À VÉRIFIER] Composition des sandwichs : déduite des avis
- [À VÉRIFIER] Couleur de la devanture : rouge en 2020, bois naturel depuis au moins 2022 ; la démo suit le bois
- [À VÉRIFIER] Instagram ou Facebook éventuels : aucun lien sur Google
- [À VÉRIFIER] Week-end 14h-19h d'après Google : à confirmer
- [À VÉRIFIER] Accès métro déduit du plan

### La Cave des Quais
- [À VÉRIFIER] Huîtres : formule relevée sur une ardoise de décembre 2024 (3 huîtres et un verre de vin blanc, 10 €), à confirmer pour la saison
- [À VÉRIFIER] Planches, petites assiettes, verres et bouteilles : intitulés génériques, prix d'exemple
- [À VÉRIFIER] Réservation (anniversaires, salle du fond) : aucun lien, la démo renvoie au téléphone
- [À VÉRIFIER] Terrasse sur plancher : vue en mai 2026, vérifier qu'elle est maintenue
- [À VÉRIFIER] Accès métro déduit du plan

### Generoso
- [À VÉRIFIER] Carte relevée sur TheFork (mise à jour juillet 2024) : burrata 14 €, planches 28 € / 20 €, carbonara 24 € à confirmer
- [À VÉRIFIER] Prix d'exemple : parmigiana, tagliatelle à la truffe, risotto safran burrata, gnocchi, tiramisu, spritz, vin au verre
- [À VÉRIFIER] Descriptions courtes des plats déduites des photos
- [À VÉRIFIER] Lien de réservation : page CoverManager restaurante.covermanager.com/generoso/ (partenaire du bouton Google) ; garder ou remplacer par le lien Google
- [À VÉRIFIER] Concerts : thème cité dans 5 avis, fréquence non connue
- [À VÉRIFIER] Accès métro déduit du plan
- [À VÉRIFIER] Phrase « mieux vaut réserver le week-end » : déduite (petite salle)

### Carburant
- [À VÉRIFIER] Téléphone : aucun numéro sur Google, boutons Appeler masqués (Itinéraire à la place)
- [À VÉRIFIER] Tarifs de pression lus sur l'ardoise (oct. 2024), associés aux styles par déduction
- [À VÉRIFIER] Prix d'exemple : canettes, vin nature, mezcal, planche fromage et charcuterie, cidre
- [À VÉRIFIER] Nombre de tireuses (10 comptées sur la photo)
- [À VÉRIFIER] Retransmission des matchs : citée dans un avis
- [À VÉRIFIER] Merch (t-shirts ?) cité dans les avis, non repris
- [À VÉRIFIER] Accès métro déduit du plan

### désordre
- [À VÉRIFIER] Prix et liste des cocktails (relevés sur une photo de mai 2025)
- [À VÉRIFIER] Pression et cidre : bières servies, contenances et prix (prix d'exemple dans la démo)
- [À VÉRIFIER] Prix du jus de fruits (3,50 €, partiellement masqué sur la photo)
- [À VÉRIFIER] Réservation / privatisation : par Instagram uniquement ? (aucun lien de réservation dédié)
- [À VÉRIFIER] Fréquence des DJ sets
- [À VÉRIFIER] Accès métro (déduit)
- [À VÉRIFIER] Graphie du nom : tout en minuscules « désordre » (comme sur Google et la porte)

### Au Bon Endroit Bar
- [À VÉRIFIER] Adresse Instagram exacte (déduite : @aubonendroitbar)
- [À VÉRIFIER] Horaires du happy hour : 18h-20h (Privateaser, tableau) ou 17h-20h (texte Privateaser)
- [À VÉRIFIER] Prix de la carte (relevés sur Privateaser)
- [À VÉRIFIER] Accroche « Jeux, bières & mauvaise foi » reprise de la fiche Privateaser : la garder ?
- [À VÉRIFIER] Agenda « Prochainement » à tenir à jour (dates relevées sur Privateaser le 16/10/2026)
- [À VÉRIFIER] Terrasse (éphémère selon Privateaser) : non mentionnée dans la démo
- [À VÉRIFIER] Fréquence des soirées stand-up

### Gonflé
- [À VÉRIFIER] Numéro de téléphone (absent de Google : bouton Appeler masqué)
- [À VÉRIFIER] Tous les prix (prix d'exemple, étiquettes en partie illisibles)
- [À VÉRIFIER] Instagram éventuel
- [À VÉRIFIER] Horaire du vendredi (18h) différent des autres jours
- [À VÉRIFIER] Présence de tables en terrasse

### IKA
- [À VÉRIFIER] Horaires : la démo reprend le bloc « Vente à emporter » (lun-ven 12h15-18h, sam 12h30-15h) ; le bloc principal Google n'affiche que le vendredi, à corriger avec la patronne
- [À VÉRIFIER] Prix de l'ardoise peu lisibles : entrées 5 €, currys 14 €, desserts 4 € à confirmer
- [À VÉRIFIER] Menu déjeuner : composition et prix illisibles
- [À VÉRIFIER] Sauces de la brochette de poulet illisibles
- [À VÉRIFIER] Parfums des mochi selon la saison
- [À VÉRIFIER] Boissons (thé vert, umeshu) : prix d'exemple
- [À VÉRIFIER] « La patronne cuisine et sert elle-même » : déduit des avis
- [À VÉRIFIER] Accès métro déduit du plan
- [À VÉRIFIER] Horaires selon d'autres sources : Bonjour RATP indique 12h15–18h du lundi au samedi, Time Out 9h–18h en semaine et 9h–15h le samedi ; à trancher avec la patronne.

### Café de l'Église
- [À VÉRIFIER] Horaires : Google (7h–2h, dim. 8h–minuit) ou site/carte (8h–2h, dim. 9h–1h) ?
- [À VÉRIFIER] Prix des plats (appariement déduit du PDF) et sélection de plats à mettre en avant
- [À VÉRIFIER] Prix des entrées (non repris faute de lecture sûre) et tarifs happy hour
- [À VÉRIFIER] Le petit déjeuner est servi à partir de 8h selon la carte, alors que Google indique une ouverture à 7h
- [À VÉRIFIER] Accès métro (déduit : Poissonnière ligne 7, gare du Nord)
- [À VÉRIFIER] Souhaitent-ils afficher l'email et la mention des fromages Marie Quatrehomme ?
- [À VÉRIFIER] Lien de réservation DISH toujours actif

### Lightea
- [À VÉRIFIER] Prix (relevés sur photo de sept. 2025) et boissons toujours à la carte
- [À VÉRIFIER] Plateforme de livraison derrière le bouton « Commander » (Uber Eats, Deliveroo ?) pour ajouter un lien
- [À VÉRIFIER] Compte Instagram ou TikTok éventuel
- [À VÉRIFIER] Accès métro (déduit)
- [À VÉRIFIER] Orthographe souhaitée du nom : LIGHTEA (enseigne) ou Lightea
- [À VÉRIFIER] Les perles sont-elles préparées sur place ? (non affirmé sur la démo)

### Aurélie Ribay Boulangère
- [À VÉRIFIER] Fermeture le dimanche et le lundi (absents de la fiche Google)
- [À VÉRIFIER] Prix des formules (ardoise de nov. 2023) et prix de vitrine (janv. 2026)
- [À VÉRIFIER] Prix d'exemple : baguette, kouign-amann, flan, viennoiserie pistache, cookie
- [À VÉRIFIER] Nature des « pains spéciaux » et des farines (cités dans les avis) pour les mettre en avant
- [À VÉRIFIER] Commandes pour événements : délai et modalités
- [À VÉRIFIER] Accès métro (déduit)
- [À VÉRIFIER] Compte Instagram éventuel

### Cave Pétillance
- [À VÉRIFIER] Site existant cavepetillance.fr (Zenchef) non relié à Google : savoir s'ils veulent le remplacer ou le garder
- [À VÉRIFIER] Lien de réservation : celui de la fiche Google (Zenchef) ; préférer leur lien Zenchef direct
- [À VÉRIFIER] Carte des grignotages : « exemple de menu » publié sur leur site, change selon les arrivages
- [À VÉRIFIER] Prix des vins et champagnes au verre et à la bouteille : non publiés, « prix sur place »
- [À VÉRIFIER] Liste des producteurs reprise du site : certaines références rares peuvent ne plus être disponibles
- [À VÉRIFIER] Horaires vente à emporter légèrement différents sur Google (jeudi dès 15h, samedi jusqu'à 23h30)
- [À VÉRIFIER] Accès métro déduit du plan
- [À VÉRIFIER] Facebook trouvé par recherche web (même nom, publications « Rue Condorcet ») : confirmer
- [À VÉRIFIER] Noms des producteurs : relevés en capitales sans accents sur leur site, orthographe harmonisée (accents, traits d'union, ex. Clandestin, Pertois-Moriset, Rémi Jobard) : à relire avec la cave

### Missià
- [À VÉRIFIER] Horaires Google 15h–19h30 du mardi au samedi : étonnant pour une sandwicherie, vérifier s'il y a une ouverture le matin ou le midi.
- [À VÉRIFIER] Tous les prix et la liste des produits sont des exemples (aucune carte disponible).
- [À VÉRIFIER] Les sandwichs sont-ils toujours proposés ? (vitrine récente : « Produits corses » à la place de « Sandwicherie »).
- [À VÉRIFIER] Plateaux apéritifs sur demande : à confirmer.
- [À VÉRIFIER] Accès métro déduit de la position (Anvers / Poissonnière).
- [À VÉRIFIER] Le patron souhaite-t-il afficher la tête de Maure ou son logo ?
- [À VÉRIFIER] Vendredi : un relevé Google du 16 octobre 2026 affichait 16h30–19h30 (au lieu de 15h–19h30) ; horaire exceptionnel probable, à confirmer avec le patron.

### Symbiose
- [À VÉRIFIER] Liens Instagram et Facebook
- [À VÉRIFIER] Prix de la carte (relevés en ligne)
- [À VÉRIFIER] Horaires : ouvert seulement jeudi, vendredi, samedi d'après Google
- [À VÉRIFIER] Animations (karaoké, fléchettes, blind test) et capacité de privatisation

### Le Dirty Queen
- [À VÉRIFIER] Créneaux happy hour : Google (mar-ven 17h-20h, sam 19h-21h) et Privateaser (lun-sam 17h-20h) ne disent pas la même chose
- [À VÉRIFIER] Carte : prix Privateaser (non datés) ; détail des pressions et des gin tonics d'après une photo de carte de mai 2024
- [À VÉRIFIER] Prix du Doragon et des hot-dogs non trouvés
- [À VÉRIFIER] Lien de réservation : celui du Linktree (Privateaser) ; Google utilise Joy
- [À VÉRIFIER] Don de 5 % des bénéfices à Amnesty International (carte 2024) : toujours d'actualité ?
- [À VÉRIFIER] DQ Cabaret (soirées drag et burlesque) : rythme des soirées
- [À VÉRIFIER] Façade non observée
- [À VÉRIFIER] Accès métro déduit du plan
- [À VÉRIFIER] Le lien Privateaser du Linktree porte l'identifiant « ginette-et-georgette » (ancien nom de l'établissement dans Privateaser ?) : vérifier avec le patron qu'il réserve bien au Dirty Queen, sinon le retirer de config.js (liens.reservation).

### Fruity Café
- [À VÉRIFIER] HORAIRES : Google affiche « Fermé » les 7 jours ; horaires de la démo supposés (lun-ven 8h-18h, sam-dim 8h30-18h) à partir d'un seul jour connu
- [À VÉRIFIER] Ouverture le dimanche : inconnue
- [À VÉRIFIER] Téléphone : aucun sur Google, boutons Appeler masqués
- [À VÉRIFIER] Carte des boissons relevée sur une photo de février 2024 : prix à confirmer, chiffres coupés pour macchiato, cappuccino, latte, flat white
- [À VÉRIFIER] Pâtisseries, smoothies, jus : prix d'exemple
- [À VÉRIFIER] Sandwichs et nachos cités dans les avis : à confirmer
- [À VÉRIFIER] Accès métro déduit du plan
- [À VÉRIFIER] Aucune source web indépendante trouvée le 16/10/2026 pour confirmer les horaires : à demander en priorité.

## Modifier une démo : `config.js`

Tout ce qui change souvent est dans `demo/[slug]/config.js` :

```js
window.CONFIG = {
  nom: "The Sunny Side",
  accroche: "…",
  adresse: "79 quai de Valmy, 75010 Paris",   // sert aussi au lien Itinéraire
  telephone: "01 23 45 67 89",                 // affiché
  telephoneLien: "+33123456789",               // utilisé dans le lien tel: ; vide = boutons Appeler masqués
  horaires: {
    lundi: [["12:00", "15:00"], ["19:00", "23:00"]],  // deux services
    mardi: [],                                        // tableau vide = fermé
    vendredi: [["18:00", "02:00"]],                   // après minuit : écrire l'heure de fermeture telle quelle
    // … les 7 jours
  },
  carte: [
    { titre: "Entrées", note: "", produits: [
      { nom: "Burrata", desc: "tomates anciennes", prix: 12, source: "carte en ligne, à vérifier" }
    ] }
  ],
  liens: { reservation: "", instagram: "https://www.instagram.com/…", facebook: "", site: "" }
};
```

- Prix : un nombre (`12`, `4.5`) s'affiche « 12 € », « 4,50 € » ; un texte (`"au poids"`) s'affiche tel quel.
- Un lien vide masque automatiquement le bouton correspondant (réservation, Instagram, Facebook, Appeler).
- Le badge ouvert/fermé et le jour du jour dans les horaires se recalculent tout seuls (heure de Paris, chaque minute).
- Le HTML contient aussi le contenu en dur (pour un affichage sans JavaScript et pour l'aperçu des liens) :
  après un gros changement (nouvelle carte, nouveaux horaires), mettre aussi à jour le texte correspondant dans `index.html`.

## Ajouter une nouvelle démo

1. Copier un dossier proche du nouveau lieu : `cp -r demo/the-sunny-side demo/nouveau-lieu`.
2. Modifier `demo/nouveau-lieu/config.js` (nom, adresse, téléphone, horaires, carte, liens).
3. Dans `index.html` de la démo : `<title>`, meta description, balises `og:`, textes en dur (accroche, carte, horaires, « Le lieu »).
4. Dans `style.css` : la palette (variables en tête du fichier) et les polices. Nouvelle police :
   `npm i @fontsource/nom-de-la-police` dans un dossier temporaire, copier 2 ou 3 fichiers
   `files/*-latin-*.woff2` dans `fonts/`, puis adapter les `@font-face`.
5. Ajouter une ligne dans `/index.html` (liste interne) et créer `data/nouveau-lieu.json`.
6. Tester en local : `python3 -m http.server 8000` à la racine, puis http://localhost:8000/demo/nouveau-lieu/.
   Chemins toujours relatifs (`../../assets/commun/statut.js`), jamais de `/` au début.

## Publier sur GitHub Pages

1. Pousser sur la branche `main` : `git add -A && git commit -m "…" && git push origin main`.
2. Sur GitHub, dépôt `ollo25/demosite` → **Settings** → **Pages**.
3. *Build and deployment* → *Source* : **Deploy from a branch**.
4. *Branch* : **main**, dossier **/ (root)** → **Save**.
5. Attendre une à deux minutes : le site est servi sur https://ollo25.github.io/demosite/ (le fichier `.nojekyll`
   évite le traitement Jekyll). Chaque nouveau push republie automatiquement.

## Règles suivies

- Aucune information inventée présentée comme réelle (ni historique, ni chef, ni récompense, ni avis, ni note).
  Les produits relevés sur une carte en ligne sont marqués `source: "carte en ligne, à vérifier"` dans `config.js` ;
  sinon des intitulés génériques avec la mention « Prix d'exemple ».
- Alcool : informations objectives et mention « L'abus d'alcool est dangereux pour la santé, à consommer avec modération. »
- Restauration : « Informations sur les allergènes disponibles sur demande. »
- Aucune iframe, aucun traceur, aucun cookie, aucune ressource externe (polices hébergées dans chaque démo).
- Mobile d'abord (375 px), boutons de 44 px minimum, moins de 300 ko par démo.
