

const loadAllCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    const data = await res.json();

    // console.log(data.data.news_category[0]);
    const dataNews = data.data.news_category;


    const allMenu = document.getElementById('all-menu');

    for (const news of dataNews) {
        const a = document.createElement('all-menu');
        a.innerHTML = ` <a onclick="loadCategoryDetail()" class="navbar-brand" href="#">${news.category_name}</a>`
        allMenu.appendChild(a);

        // console.log(news);
    }

}
// const loadCategoryDetail = async () => {

// const loadCategoryDetail = () => {
//     const url = `https://openapi.programming-hero.com/api/news/category/01`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayCategoryDetail(data.data[0]))
// }
// const displayCategoryDetail = category => {
//     console.log(category);

//     const categoryDetail = document.getElementById('news-details');
//     categoryDetail.innerHTML =

//         `
//             <div class="col-3">
//             <img class="img-fluid" src="" alt="">
//         </div>
//         <div class="col-9 d-flex flex-column">
//             <div>
//                 <h6></h6>
//                 <p></p>
//             </div>

//             <div class="d-flex justify-content-between">
//                 <div>
//                     <h4 ></h4>
//                     <p></p>
//                 </div>

//                 <p><i class="fa-regular fa-eye"></i></i></p>
//                 <p></i><i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-regular fa-star-half-stroke"></i>

//                 </p>

//                 <p><i class="fa-solid fa-arrow-right"></i></p>
//             </div>



//         </div>

//     `



// }

//     const url = `https://openapi.programming-hero.com/api/news/category/01`;
//     const res = await fetch(url)
//     const data = await res.json();
//     // console.log(data.data);
//     dataDetails = data.data[0];
//     console.log(dataDetails);




//     const newsDetail = document.getElementById('news-details');
//     // for (const news of dataDetails) {
//     //     console.log(news);


// newsDetail.innerHTML = `
//     <div class="col-3">
//     <img class="img-fluid" src="${news.image_url}" alt="">
// </div>
// <div class="col-9 d-flex flex-column">
//     <div>
//         <h6>${news.title}</h6>
//         <p>${news.details}</p>
//     </div>

//     <div class="d-flex justify-content-between">
//         <div>
//             <h4 >${news.author.name}</h4>
//             <p>${news.author.published_date}</p>
//         </div>

//         <p><i class="fa-regular fa-eye"></i></i> ${news.total_view}</p>
//         <p></i><i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-regular fa-star-half-stroke"></i>

//         </p>

//         <p><i class="fa-solid fa-arrow-right"></i></p>
//     </div>



// </div>

//             `






//     // }




// }


// loadCategoryDetail();




loadAllCategory();
