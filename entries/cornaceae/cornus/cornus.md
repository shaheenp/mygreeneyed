---
permalink: /cornaceae/cornus/
layout: genus
title: Cornus
commonname: dogwood genus
family: Cornaceae
---

Leaves:
  - opposite (alternate in one species)
  - simple
  - arcuate venation (veins arching from base to tip)

Flowers:
  - inflorescence -- terminal tight & compact
  - perfect, inferior ovary
  - 4-parted
  - inflorescence w/ bracts beneath (often showy)

Fruit:
  - drupe or berry

Other notes:
  - trees, shrubs, herbs
  - if you tear a leaf, will see strings inside veins (think stringy melted cheese)
  - bracts can change color with age

Entries:
{% for family in site.data.nav %}
{% if family.title == page.family %}
{% for genus in family.items %}
{% if genus.title == page.title %}
  {% for species in genus.items %}
  - *[{{ species.title }}]({{ species.url | relative_url }})*
  {% endfor %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}

