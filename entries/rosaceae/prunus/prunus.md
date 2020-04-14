---
permalink: /rosaceae/prunus/
layout: genus
title: Prunus
commonname: plum genus
family: Rosaceae
---

Entries:
{% assign family = site.data.nav | where: "title", page.family | first %}
{% assign genus = family.items | where: "title", page.title | first %}
{% for species in genus.items %}
  - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
{% endfor %}
