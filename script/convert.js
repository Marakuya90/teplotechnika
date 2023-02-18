
fetch('http://localhost:8080/units')
  .then(res =>
    res.json())
  .then(units => {
    let categories = new Set;
    for (let unit of units) {
      categories.add(unit.unitType)
    }
    createCategory(categories);
    return units;
  }).then(units => {
    document.querySelectorAll('#converter_page')
      .forEach((page) => {
        page.addEventListener('click', (e) => {
          e.preventDefault();

          const h1 = document.createElement('h1');
          const dynamiclink = document.createElement('a');
          let header = document.querySelector('.main__header');

          let pageCategory = e.target.pathname;
          var category = e.target.getAttribute('data-name');
          let distanceUnits = units.filter(filterByCategory);
          function filterByCategory(units) {
            if (units.unitType == category) {
              return true;
            }
            return false;
          }

          h1.innerHTML = `<h1>${category}</h1>`;
          dynamiclink.innerHTML =
            `<a class = "link__convert-nav" 
          href="/pages/${category}.html">${category}</a>`;

          header.prepend(h1);
          document.querySelector('.dynamic_link').append(dynamiclink);


          for (let item of distanceUnits) {

            const formConvert = document.createElement('div');
            formConvert.innerHTML = `
            <label class="label__convert" for="">${item.fullName}
            <input class = "input__convert" 
            type="text"></label>`
            document.querySelector('.wrap').append(formConvert);

          }


          let inputGroup = document.querySelectorAll(".label__convert");
          console.log(inputGroup);
          for (let elem of inputGroup) {
            elem.addEventListener('input', (e) => {

              console.log(e);

              let input = e.target;
              let text = (e.target.parentElement.innerText).toLowerCase();
              let value = e.target.value;

              console.log(input);
              console.log(text);
              console.log(value);

              axios.get(`http://localhost:8080/convert-all?value=${value}&from=${text}`)
                .then(data => {
                  console.log(data.data)

                  for (let i = 0; i < inputGroup.length; i++) {
                    inputGroup[i].children[0].value = Math.round(data.data[i].value);
                  }
                  // }
                })
            })
          }


          console.log(distanceUnits);
          console.log(category);
          console.log(pageCategory);

          // window.open(`${pageCategory}`, "_self");

        })
      })
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
    category.innerHTML = `<a href="/pages/${item}.html" id = "converter_page" data-name = ${item}>${visualCategories[item]}</a>`
    document.querySelector('.category__wrapper').append(category);
  };
}

// axios.get('http://localhost:8080/convert-all?value=6&from=pound').then(data => console.log(data.data[0].value))
// function converter (e,unit) {

  // let value = e.target.value;
  // const response = await fetch (`http://localhost:8080/convert-all?value=${value}&from=${unit}`);
  // const json = await response.json();
  // console.log(json);
// }





