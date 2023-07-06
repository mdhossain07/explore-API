const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    //console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = data => {
    const foodMenu = document.getElementById('food-menu');
    foodMenu.textContent = '';
    for (const meal of data){
        // console.log(meal);
        const innerDiv = document.createElement('div');
        innerDiv.innerHTML = `
        <div class="card m-3">
          <img src="${meal.strMealThumb}" class="card-img-top" onClick = mealDetail(${meal.idMeal})>
          <div class="card-body">
            <h5 class="card-title">Item Name: ${meal.strMeal}</h5>
            <p class="card-text"> <b> Recipe Instructions: </b> ${meal.strInstructions.slice(0,250)}....</p>
          </div>
        </div>
        `
        foodMenu.appendChild(innerDiv);
    }
}

const mealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));
}

const displayMealDetails = meal => {
    const mealDetail = document.getElementById('meal-detail');
    mealDetail.textContent = '';
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    mealDetail.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Find Recipe</a>
        </div>
    `
    mealDetail.appendChild(detailDiv);
}

