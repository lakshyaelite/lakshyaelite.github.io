---
layout: page
title: Search
permalink: /search/
---

<div>
  <input type="search" id="search-input" placeholder="Type here to search...">
  <ul id="results-container"></ul>

  <script src="{{ '/assets/js/simple-jekyll-search.min.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

  <script>
    var highlightMiddleware = window.createHighlightTemplateMiddleware({
      className: 'search-highlight',
      maxLength: 200
    });

    window.simpleJekyllSearch = new SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '{{ "/assets/data/search.json" | relative_url }}',
      searchResultTemplate: '<li><a href="{url}?query={query}">{title}</a><p class="search-dates">{date}</p><p class="search-desc">{content}</p></li>',
      templateMiddleware: highlightMiddleware,
      noResultsText: 'No results found',
      limit: 10,
      strategy: 'hybrid',
      exclude: ['Welcome'],
      sortMiddleware: window.RelevanceSort,
    });
  </script>

</div>