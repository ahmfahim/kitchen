const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('meal-details-content');
const recipeClosedBtn = document.getElementById('recipe-close-btn');
// event listener
searchBtn.addEventListener('click', getMealList);


// get meal list
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class="meal-item" data-id="${meal.idMeal}">
                            <div class="meal-img d-flex justify-content-center">
                                <img src="${meal.strMealThumb}" alt="" srcset="">
                            </div>
                            <div class="meal-name">
                                <h3>${meal.strMeal }</h3>
                                <div class="d-flex justify-content-center ">
                                    <a href="#" class="recipe-btn">Get Recipe</a>
                                </div>
                            </div>
                        </div>
                    
                    `
                });
            }
            mealList.innerHTML = html;
        })
}