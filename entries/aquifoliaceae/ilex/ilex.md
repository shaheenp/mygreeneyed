---
permalink: /aquifoliaceae/ilex/
layout: genus
title: Ilex
commonname: holly genus
family: Aquifoliaceae
---

Entries:
{% for family in site.data.nav %}
{% if family.title == page.family %}
{% for genus in family.items %}
{% if genus.title == page.title %}
  {% for species in genus.items %}
  - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
  {% endfor %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}

