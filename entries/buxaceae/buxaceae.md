---
permalink: /buxaceae/
layout: family
title: Buxaceae
commonname: boxwood family
---

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
