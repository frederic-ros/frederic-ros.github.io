# frederic-ros.com

Site personnel de Frédéric Ros, publié par GitHub Pages à l'adresse
https://frederic-ros.com.

## Ce que contient ce dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | La page d'accueil : présentation, livres, vulgarisation, recherche, contact |
| `clusterlab/index.html` | La page du companion du livre et la procédure d'accès (l'adresse imprimée dans le livre) |
| `404.html` | La page affichée pour une adresse inconnue |
| `assets/style.css` | L'apparence du site (couleurs, polices, mise en page, mode sombre) |
| `assets/site.js` | La bascule français / anglais |
| `assets/icone.svg` | L'icône de l'onglet |
| `CNAME` | Le nom de domaine (ne pas modifier) |

## Modifier le site

Tout se fait directement sur GitHub : ouvrez le fichier, cliquez sur le crayon
(« Edit this file »), modifiez, puis « Commit changes ». Le site est à jour une à deux
minutes plus tard.

Chaque texte existe deux fois, en français et en anglais :

```html
<p class="fr">Texte en français.</p>
<p class="en">Text in English.</p>
```

Modifiez toujours les deux. Pour un mot court, la même règle s'applique avec
`<span class="fr">…</span><span class="en">…</span>`.

**Ajouter un livre, un article ou un logiciel** : dans `index.html`, copiez un bloc
`<li> … </li>` de la liste concernée (repérez les commentaires `<!-- Pour ajouter … -->`),
collez-le juste en dessous, puis remplacez le titre, le lien et le texte.

**À compléter** :
- l'adresse LinkedIn (`VOTRE-PROFIL` dans `index.html`) ;
- le lien Amazon du livre, quand il sera en vente (ligne en commentaire dans `index.html`) ;
- le nom exact du dépôt public du companion, s'il diffère de `clusterlab-companion`
  (dans `clusterlab/index.html`).

Le site ne charge rien depuis un service tiers (pas de police externe, pas de mesure
d'audience) et ne dépose aucun cookie : seul le choix de langue est mémorisé dans le
navigateur du visiteur.
