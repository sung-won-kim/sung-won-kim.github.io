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

<p style="font-size: 0.9em; color: gray;">* Equal Contribution &nbsp;&nbsp; † Co-corresponding author</p>

<div class="pub-nav">
  <a href="#selected">Selected</a>
  <a href="#conference">Conference</a>
  <a href="#journal">Journal</a>
  <a href="#workshop">Workshop</a>
</div>

<div class="selected-pubs">

<h2 class="category-header" id="selected">Selected</h2>

{% bibliography -f papers -q @*[selected=true]* %}

</div>

<details class="pub-section">
<summary><h2 class="category-header" id="conference">Conference</h2></summary>

{% bibliography -f papers -q @*[category=Conference]* %}

</details>

<details class="pub-section">
<summary><h2 class="category-header" id="journal">Journal</h2></summary>

{% bibliography -f papers -q @*[category=Journal]* %}

</details>

<details class="pub-section">
<summary><h2 class="category-header" id="workshop">Workshop</h2></summary>

{% bibliography -f papers -q @*[category=Workshop]* %}

</details>

</div>

<script>
  // The nav pills point at headings that live inside a collapsed <details>,
  // so open the target section before the browser jumps to it.
  (function () {
    function revealTarget(hash) {
      if (!hash || hash.length < 2) return;
      var target = document.getElementById(hash.slice(1));
      var section = target && target.closest('details.pub-section');
      if (section) section.open = true;
    }
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.pub-nav a').forEach(function (link) {
        link.addEventListener('click', function () {
          revealTarget(link.getAttribute('href'));
        });
      });
      revealTarget(window.location.hash);
    });
    window.addEventListener('hashchange', function () {
      revealTarget(window.location.hash);
    });
  })();
</script>
