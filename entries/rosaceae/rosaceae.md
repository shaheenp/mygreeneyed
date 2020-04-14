---
permalink: /rosaceae/
layout: family
title: Rosaceae
commonname: rose family
---

Leaves:
  - mostly alternate
  - simple or palmately or pinnately compound
  - stipules (except *Spirea*)
  - leaves or leaflets
  - ~w/ serrate marginss
  - ~oval

Flowers:
  - inflorescence -- usually indeterminate
  - raceme, cyme or solitary, axillary or terminal Radially symmetric Perfect
  - 5-parted
  - petals distinct, short clawed
  - many stamens
  - pistils -- numerous to 1
  - enlarged receptacle (hypanthium) bearing sepals, petals and stamens on its margin
  - ovary various

Fruit:
  - varied (follicle, capsule, achene, drupelet, drupe, pome)

Other notes:
  - very diverse and economically important
  - trees, shrubs, herbs
  - aromatic
  - ~thorny

Entries:
{% assign family = site.data.nav | where: "title", page.title | first %}
{% for genus in family.items %}
  {% if genus.url %}
  - [{{ genus.title }}]({{ genus.url | relative_url }}){:.italic}
  {% else %}
  - {{ genus.title }}
  {% endif %}
  {% if genus.items[0] %}
  {% for species in genus.items %}
    - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
  {% endfor %}
  {% endif %}
{% endfor %}
