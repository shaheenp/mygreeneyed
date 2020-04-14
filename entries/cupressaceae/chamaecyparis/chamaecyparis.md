---
permalink: /cupressaceae/chamaecyparis/
layout: genus
title: Chamaecyparis
commonname: cypress genus
family: Cupressaceae
---

Leaves:
  - scale-like (smaller than *[Thuja](../thuja/thuja.md)*)
  - branchlets usually flattened

Cones:
  - roundish "soccer ball"
  - opposite scales
  - peltate (umbrella shaped)
  - monoecious

Other notes:
  - trees with nodding leader
  - leaves sometimes unpleasant smelling
  - "Chamae" means dwarf, but many *Chamaecyparis* are very large

Entries:
{% assign family = site.data.nav | where: "title", page.family | first %}
{% assign genus = family.items | where: "title", page.title | first %}
{% for species in genus.items %}
  - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
{% endfor %}
