---
permalink: /aquifoliaceae/
layout: family
title: Aquifoliaceae
commonname: holly family
---

Native range: worldwide

Leaves:
  - alternate
  - simple
  - entire to serrate
  - spiny
  - mostly evergreen and leathery
  - short petiole
  - minute stipules

Flowers:
  - infl. -- clustered cyme or axillary & solitary
  - radial (symmetric flower)
  - mostly dioecious
  - flowers 4-5 parted, small
  - superior ovary

Fruit:
  - drupe
  - sometimes brightly colored
  - persistent sepals

Other notes:
  - trees & shrubs
  - acidic soil

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
