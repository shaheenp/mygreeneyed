---
permalink: /ericaceae/arctostaphylos/
layout: genus
title: Arctostaphylos
commonname: manzanita genus
family: Ericaceae
---

Entries:
{% assign family = site.data.nav | where: "title", page.family | first %}
{% assign genus = family.items | where: "title", page.title | first %}
{% for species in genus.items %}
  - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
{% endfor %}
