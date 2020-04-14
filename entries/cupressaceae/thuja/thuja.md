---
permalink: /cupressaceae/thuja/
layout: genus
title: Thuja
commonname: arborivates
family: Cupressaceae
---

Entries:
{% assign family = site.data.nav | where: "title", page.family | first %}
{% assign genus = family.items | where: "title", page.title | first %}
{% for species in genus.items %}
  - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
{% endfor %}
