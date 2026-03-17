---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<p style="font-size: 0.9em; color: gray;">† Equal contribution &nbsp;&nbsp; * Co-corresponding author</p>

<div class="pub-nav">
  <a href="#conference">Conference</a>
  <a href="#journal">Journal</a>
  <a href="#workshop">Workshop</a>
</div>

<h2 class="category-header" id="conference">Conference</h2>

{% bibliography -f papers -q @*[category=Conference]* %}

<h2 class="category-header" id="journal">Journal</h2>

{% bibliography -f papers -q @*[category=Journal]* %}

<h2 class="category-header" id="workshop">Workshop</h2>

{% bibliography -f papers -q @*[category=Workshop]* %}

</div>
