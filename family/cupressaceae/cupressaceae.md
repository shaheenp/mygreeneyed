---
permalink: /cupressaceae/
layout: family
title: Cupressaceae
commonname: cypress family
---

Native range: worldwide

Leaves:
  - evergreen
  - mostly scale-like foliage (or whorled in 3's)
  - resinous

Cones:
  - male & female
  - scales in pairs, peltate or basally attached
  - generally smaller than Pinaceae cones
  - axillary or terminal on branchlets
  - "berry-like" in junipers

Other notes:
  - trees and shrubs
  - aromatic

Entries:
{% assign family = site.data.nav | where: "title", page.title | first %}
{% for genus in family.items %}
  {% if genus.url %}
  - [{{ genus.title }}]({{ genus.url | relative_url }})
  {% else %}
  - {{ genus.title }}
  {% endif %}
  {% if genus.items[0] %}
  {% for species in genus.items %}
    - *[{{ species.title }}]({{ species.url | relative_url }})*
  {% endfor %}
  {% endif %}
{% endfor %}
