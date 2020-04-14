---
permalink: /pinaceae/pinus/
layout: genus
title: Pinus
commonname: pine genus
family: Pinaceae
---

Leaves:
  - evergreen
  - needles
    - spirally arranged
    - fascicles (bundled at base with a papery sheath)
    - 2, 3, or 5 per fascicle, depending on species

Cones:
  - monoecious
  - woody scales spirally arranged
  - scales w/ keel (blunt or rounded protuberance)

Other notes:
  - trees, some shrubs
  - whorled, spreading branches
  - bark furrowed or scaly
  - 2 subgenera:
    - soft pines (white)
      - needles in 5
      - cones unarmed
      - resinous
    - hard pines (black or red)
      - needles in 2 or 3
      - cones armed

Entries:
{% assign family = site.data.nav | where: "title", page.family | first %}
{% assign genus = family.items | where: "title", page.title | first %}
{% for species in genus.items %}
  - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
{% endfor %}
