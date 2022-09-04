const loadSpinner = isLoading => {
    const spinnerContainer = document.getElementById('spinner-container');
    if (isLoading === true) {
        spinnerContainer.classList.remove('d-none');
    }
    else {
        spinnerContainer.classList.add('d-none');
    }
}

const loadAllCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    try {
        const data = await res.json();
        // console.log(data.data.news_category[0]);
        const categories = data.data.news_category;


        const allMenu = document.getElementById('all-menu');

        for (const category of categories) {
            const li = document.createElement('all-menu');
            li.classList.add('nav-item');
            li.innerHTML = `<button onclick="loadCategoryDetail('${category.category_id}')" class="btn btn-transparent nav-link fs-5 fw-semibold">${category.category_name}</button>`
            allMenu.appendChild(li);

            // console.log(news);
        }
    }
    catch (e) {
        console.log(e);
    }

}

// const loadCategoryDetail = async () => {

const loadCategoryDetail = async (categoryId) => {
    const newsDetailsContainer = document.getElementById('news-details');
    newsDetailsContainer.innerHTML = ``;
    loadSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    const res = await fetch(url)
    try {
        const data = await res.json();
        // console.log()
        const allNews = data.data;
        // console.log(allNews);
        allNews.sort((a, b) => {
            return a.total_view - b.total_view;
        });



        const newsNumberContainer = document.getElementById('news-number');
        newsNumberContainer.innerText = allNews.length;
        const modalContainer = document.getElementById('modal-container');
        modalContainer.innerHTML = ``;
        allNews.forEach(news => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('shadow');
            newDiv.classList.add('mb-5');
            newDiv.classList.add('rounded');
            newDiv.classList.add('bg-body');
            newDiv.innerHTML = `
        <div class="row p-3">
                    <div class="col-lg-3">
                        <div>
                            <img class="w-100"
                                src="${news.thumbnail_url}"
                                alt="">
                        </div>
                    </div>
                    <div class="col-lg-9 d-flex align-items-center">
                        <div>
                            <h2>${news.title}</h2>
                            <p>${news.details.slice(0, 300)}...</p>
                            <div class="row">
                                <div class="col-6 col-lg-4">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <img class="author-img rounded-circle"
                                                src="${news.author.img}"
                                                alt="">
                                        </div>
                                        <div class="ps-2">
                                            <p class="fw-semibold p-0 m-0">${news.author.name ? news.author.name : 'Not Available'}</p>
                                            <p class="text-muted p-0 m-0">${news.author.published_date ? news.author.published_date.slice(0, 10) : 'Not Available'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-6 col-lg-2 d-flex align-items-center justify-content-end justify-content-lg-center">
                                    <p class="p-0 m-0"><i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : '0'}</p>
                                </div>
                                <div class="col-6 col-lg-4 d-flex align-items-center justify-content-lg-center">
                                    <p class="p-0 m-0">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star-half-stroke"></i>
                                    </p>
                                </div>
                                <div class="col-6 col-lg-2 d-flex align-items-center justify-content-end">
                                    <button type="button" class="btn btn-transparent text-primary fs-3"
                                        data-bs-toggle="modal" data-bs-target="#modal${news._id}">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
            newsDetailsContainer.appendChild(newDiv);


            // modal body 

            const modalContainer = document.getElementById('modal-container');
            const modalDiv = document.createElement('div');
            modalDiv.innerHTML = `
        
        <div class="modal fade" id="modal${news._id}" tabindex="-1" aria-labelledby="modal${news._id}Label"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal${news._id}Label">${news.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div id="modal-detail" class="modal-body">
                   <div>  <img class="img-fluid" src="${news.image_url}" alt=""></div>
                   <p>${news.details}</p>
                </div>
                <div>
                <div class="d-flex justify-content-between">
                <div>
                <img class="img-fluid author-img rounded-circle" src="${news.author.img}" alt="">
            </div>
                <div>
                
                    <h4>${news.author.name ? news.author.name : 'Not Available'}</h4>
                    <p>${news.author.published_date ? news.author.published_date.slice(0, 10) : 'Not Available'}</p>
                </div>
 
                <p><i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : '0'}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
        
        `
            modalContainer.appendChild(modalDiv);

        })
        loadSpinner(false);
    }
    catch (er) {
        console.log(er);
    }

}


//     `



// }



loadCategoryDetail('08');




loadAllCategory();