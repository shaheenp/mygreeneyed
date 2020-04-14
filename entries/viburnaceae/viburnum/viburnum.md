---
permalink: /viburnaceae/viburnum/
layout: genus
title: Viburnum
commonname: viburnum genus
family: Viburnaceae
---

Leaves:
  - opposite
  - simple
  - rarely palmately lobed
  - variable shaped
    - lanceolate to rounded
    - entire to serrated
  - often rough & thick
  - often prominent veins

Flowers:
  - inflorescence -- axillary or terminal
  - compound umbel (flat-topped or convex clusters)
  - radial
  - corolla (petals)
    - 5 lobed
    - rotate (disc-shaped) to campanulate (tubular)
  - 5 stamen
  - white to pinkish

Fruit:
  - drupe w/ 1 compressed stone

Other notes:
  - shrubs or small trees
  - deciduous or evergreen
  - many popular ornamentals
  - ~scented flowers
  - over 50 species & cultivars
  - native species to PNW include *V. edule* & *V. ellipticum*

Entries:
{% assign family = site.data.nav | where: "title", page.family | first %}
{% assign genus = family.items | where: "title", page.title | first %}
{% for species in genus.items %}
  - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
{% endfor %}
