---
permalink: /pinaceae/
layout: family
title: Pinaceae
commonname: pine family
---

Native range: northern hemisphere

Leaves:
  - evergreen
  - needles or linear leaves
  - spirally arranged

Cones:
  - monoecious (rarely di)
  - small male cones, consisting of many small scales
  - woody female cones, consisting of many small overlapping scales

Other notes:
  - trees or shrubs

Entries:
{% assign family = site.data.nav | where: "title", page.title | first %}
{% for genus in family.items %}
  {% if genus.url %}
  - [{{ genus.title }}](./{{ genus.url }})
  {% else %}
  - {{ genus.title }}
  {% endif %}
  {% if genus.items[0] %}
  {% for species in genus.items %}
    - [{{ species.title }}](./{% if genus.url %}{{ genus.url }}{% endif %}{{ species.url }})
  {% endfor %}
  {% endif %}
{% endfor %}
