
fetch('http://localhost:8080/units')
  .then(res =>
    res.json())
  .then(units => {
    let categories = new Set;
    for (let unit of units) {
      categories.add(unit.unitType)
    }
    createCategory(categories);
  })

function createCategory(categories) {

  let visualCategories = {
    DISTANCE: 'Расстояние',
    MASS: 'Вес, масса',
    VOLUME: 'Объем',
    TEMPERATURE: 'Температура',
    PRESSURE: 'Давление',
    POWER: 'Мощность',
    FLOW_RATE_BY_MASS: '',
    FLOW_RATE_BY_VOLUME: '',
    SPEED: 'Скорость',
    VISCOSITY: 'Вязкость'
  }

  for (let item of categories) {
    const category = document.createElement('li');
    category.innerHTML = `<a href="/pages/${item}.html">${visualCategories[item]}</a>`
    document.querySelector('.category__wrapper').append(category);
  };
}



