---
permalink: /viburnaceae/
layout: family
title: Viburnaceae
commonname: viburnum family [formerly Adoxaceae]
---

Entries:
{% assign family = site.data.nav | where: "title", page.title | first %}
{% for genus in family.items %}
  {% if genus.url %}
  - [{{ genus.title }}]({{ genus.url | relative_url }}){:.italic}
  {% else %}
  - {{ genus.title }}
  {% endif %}
  {% if genus.items[0] %}
  {% for species in genus.items %}
    - [{{ species.title }}]({{ species.url | relative_url }}){:.italic}
  {% endfor %}
  {% endif %}
{% endfor %}
