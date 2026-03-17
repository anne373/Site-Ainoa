# Ainoa Coiffure — Site Web

Site vitrine du salon **Ainoa Coiffure & Onglerie**, situé au 44 Bd Charles de Gaulle, 37540 Saint-Cyr-sur-Loire.

---

## Présentation

Site statique (HTML/CSS/JS pur, sans framework) présentant les services du salon, une galerie de créations, un carrousel de photos et un accès direct à la prise de rendez-vous en ligne via Planity.

**Technologies utilisées :**
- HTML5 sémantique
- CSS3 (variables CSS, Flexbox, Grid, media queries mobile-first)
- JavaScript vanilla (ES6+)
- Google Fonts : Playfair Display, Montserrat
- Google Maps (iframe embarquée)
- Planity (prise de RDV externe)

---

## Structure des fichiers

```
Site-Ainoa/
│
├── index.html                  ← Page d'accueil principale
│
├── assets/
│   ├── css/
│   │   ├── style.css           ← Styles de la page d'accueil (mobile-first)
│   │   └── headspa_style.css   ← Styles de la page Head SPA
│   │
│   ├── js/
│   │   └── main.js             ← Menu mobile + carrousel automatique
│   │
│   └── images/
│       ├── logo-ainoa.png      ← Logo du salon
│       ├── carousel/           ← Photos du carrousel héros (image1 à image7)
│       ├── gallery/            ← Photos de la galerie "Nos Créations"
│       └── models/             ← Réservé aux photos d'inspiration / modèles
│
└── templates/
    └── head-spa.html           ← Page dédiée aux soins Head SPA (tarifs)
```

---

## Pages

### `index.html` — Page d'accueil
Contient les sections suivantes (dans l'ordre) :

| Section | Ancre | Description |
|---------|-------|-------------|
| Header | — | Logo + navigation desktop + bouton RDV + hamburger mobile |
| Héros | `#hero` | Carrousel automatique (7 photos) + titre + bouton RDV |
| Head SPA | `#head-spa` | Présentation du service avec lien vers la sous-page |
| Galerie | `#gallery` | Grille de photos des créations du salon |
| Contact | `#contact` | Réseaux sociaux, adresse, téléphone, horaires + carte Google Maps |
| Footer | — | Adresse, téléphone, horaires, copyright |

### `templates/head-spa.html` — Soins Head SPA
Page dédiée aux trois formules de soins Head SPA avec tarifs et durées :
- Soin Relaxant (45–70 min / 60–75 €)
- Soin Profond (60–90 min / 100–115 €)
- Traitant et Relaxant (90–120 min / 160–175 €)

---

## Ajouter ou modifier des photos

### Carrousel héros
Déposer les fichiers dans `assets/images/carousel/` en les nommant `image1.jpg`, `image2.png`, etc.
Puis ajouter un bloc dans `index.html` :
```html
<div class="carousel-slide">
    <img src="assets/images/carousel/image8.jpg" alt="Description">
</div>
```

### Galerie "Nos Créations"
Déposer les fichiers dans `assets/images/gallery/` puis ajouter dans `index.html` :
```html
<div class="photo-item">
    <img src="assets/images/gallery/ma-photo.jpg" alt="Description">
</div>
```

---

## Informations du salon

| | |
|---|---|
| **Adresse** | 44 Bd Charles de Gaulle, 37540 Saint-Cyr-sur-Loire |
| **Téléphone** | 02 47 49 87 29 |
| **Horaires** | Mardi – Vendredi : 9h–19h / Samedi : 9h–17h |
| **Réservation** | [planity.com/ainoa-37540-saint-cyr-sur-loire](https://www.planity.com/ainoa-37540-saint-cyr-sur-loire) |
| **Facebook** | [AINOA Coiffure Onglerie](https://www.facebook.com/p/AINOA-Coiffure-Onglerie-100053444964982/) |
| **Instagram** | [@ainoa.coiffure37](https://www.instagram.com/ainoa.coiffure37/) |

---

## Journal des mises à jour

### v2.0 — Mars 2026
- Refactorisation complète de la structure du projet
- Création de l'arborescence `assets/` (css/, js/, images/)
- Extraction du JavaScript inline vers `assets/js/main.js`
- Réécriture du CSS dans `assets/css/style.css` (approche mobile-first)
- Ajout du bouton "Prendre RDV" directement dans le header desktop
- Adresse, téléphone et horaires ajoutés de façon proéminente dans le footer
- Correction de la `<div>` non fermée dans la section contact
- Renommage des images (suppression des espaces et accents dans les noms de fichiers)
- Carrousel étendu à 7 photos (renommées `image1` à `image7`)
- Galerie enrichie : 5 photos affichées au lieu d'une seule
- Suppression des anciens dossiers `images/` et `static/` devenus inutiles
- Mise à jour du chemin CSS dans `templates/head-spa.html`

### v1.0 — 2024
- Mise en ligne initiale du site
- Page d'accueil avec carrousel, section Head SPA, galerie et contact
- Sous-page tarifs Head SPA (`templates/head-spa.html`)
- Menu hamburger fonctionnel sur mobile
