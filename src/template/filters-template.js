function createFilterItemsTemplate({ filters }) {
  return filters.map((filter)=>
    `<div class="trip-filters__filter">
        <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.type}"
        ${(filter.hasPoints) ? '' : 'disabled'}>
        <label class="trip-filters__filter-label" for="filter-${filter.type}">${`${filter.type[0].toUpperCase()}${filter.type.slice(1)}`}</label>
    </div>`
  ).join('');
}

function createFiltersTemplate({filters}) {
  return `<form class="trip-filters" action="#" method="get">
  ${createFilterItemsTemplate({filters})}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}


export { createFiltersTemplate };
