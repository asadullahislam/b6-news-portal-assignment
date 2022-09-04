

const loadAllCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    const data = await res.json();

    // console.log(data.data.news_category[0]);
    const categories = data.data.news_category;


    const allMenu = document.getElementById('all-menu');

    for (const category of categories) {
        const a = document.createElement('all-menu');
        a.innerHTML = ` <a onclick="loadCategoryDetail('${category.category_id}')" class="navbar-brand" href="#">${category.category_name}</a>`
        allMenu.appendChild(a);

        // console.log(news);
    }

}
// const loadCategoryDetail = async () => {

const loadCategoryDetail = async (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    const res = await fetch(url)
    const data = await res.json();
    // console.log()
    const allNews = data.data;
    console.log(allNews);
    const newsDetailsContainer = document.getElementById('news-details');
    newsDetailsContainer.innerHTML = ``;
    for (const news of allNews) {
        console.log(news)
        const newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.classList.add('border');
        newDiv.innerHTML = `
                    <div class="col-3">
                    <img class="img-fluid" src="${news.thumbnail_url}" alt="">
                </div>
                <div class="col-9">
                    <div>
                        <h2>${news.title}</h2>v
                        <p>${news.details.slice(0, 300)}...</p>
                    </div>
        
                    <div class="d-flex justify-content-between">
                        <div>
                        <img class="img-fluid author-img rounded-circle" src="${news.author.img}" alt="">
                        </div>
                         <div>
                        
                            <h4>${news.author.name ? news.author.name : 'Not Available'}</h4>
                            <p>${news.author.published_date.slice(0, 10) ? news.author.published_date : 'Not Available'}</p>
                        </div>
        
                        <p><i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : '0'}</p>
                        <p></i><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
        
                        </p>
        
                        <button onclick="loadCategoryDetail('')"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newDetailModal><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
        
        
                </div>
        `
        newsDetailsContainer.appendChild(newDiv);
    }



}


//     `



// }



// loadCategoryDetail();




loadAllCategory();
