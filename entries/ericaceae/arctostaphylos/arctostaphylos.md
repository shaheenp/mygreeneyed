---
permalink: /ericaceae/arctostaphylos/
layout: genus
title: Arctostaphylos
commonname: manzanita genus
family: Ericaceae
---

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

