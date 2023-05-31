const topRatedApi = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
const apiKey = "&api_key=12c60efec8184320b206c19b78417449"
let row = document.querySelector(".top-rated .row")
let whatYouClicked = document.querySelector(".what-you-clicked")



async function get() {
    const response = await fetch(topRatedApi+apiKey)
    const data = await response.json()
    for (let i=0; i < data.results.length; i++ ) {
        let col = document.createElement("div")
        col.className = "col-md-6 col-lg-2"
        row.appendChild(col)

        let imgBox = document.createElement("div")
        imgBox.className = "img-box"
        col.appendChild(imgBox)

        let img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`
        imgBox.appendChild(img)

        let text = document.createElement("div")
        text.className = "text"
        col.appendChild(text)
        let title = document.createElement("h5")
        title.innerText = data.results[i].original_name
        text.appendChild(title)

        let rateandyear = document.createElement("div")
        rateandyear.className = "rateandyear"
        text.appendChild(rateandyear)

        let rateBox = document.createElement("h5")
        rateBox.className = "rate-box"
        rateBox.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <span>${data.results[i].vote_average}</span>`
        rateandyear.appendChild(rateBox)
        
        let year = document.createElement("span")
        year.innerText = data.results[i].first_air_date
        rateandyear.appendChild(year)


        $(document).ready(function() {
            $(".top-rated .col-md-6").slice(0,10).fadeIn()
            $(".btn.load").click(function() {
                let btnText = $(".btn.load").text()
                if (btnText === "Load More") {
                    $(".top-rated .col-md-6").slice(0,20).fadeIn()
                    $(".btn.load").text("Show Less")
                }
            })
        })
        col.onclick = function() {

            whatYouClicked.innerHTML = `
            <div class="movie-description-container">
            <div class="container">
              <div class="movie-description-box">
                  <div class="movie-description-img-box">
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                  </div>
                  <div class="movie-description-text-box">
                    <h1>${data.results[i].original_name}</h1>
                    <ul>
                    <li class "rate">
                    <i class="fa-solid fa-star"></i>
                    <span>${data.results[i].vote_average}</span>
                    </li>
                    <li>
                    ${data.results[i].origin_country}
                    
                    </li>
                    <li>
                    ${data.results[i].first_air_date}
                    </li>
                    </ul>
                    <p>${data.results[i].overview}</p>
                  </div>
              </div>
              <i class="fa-solid fa-xmark"></i>
            </div>
      </div>
    `
    setTimeout(function() {
        document.querySelector(".movie-description-container").classList.add("active")
    } , 10)
    
    document.querySelector(".fa-solid.fa-xmark").onclick = () => {
        document.querySelector(".movie-description-container").classList.add("close")
    }
        }



                // search bar
                let searchBox = document.createElement("li")
                searchBox.className = "search-box"
                let searchImg = document.createElement("img")
                searchImg.src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`
                searchBox.appendChild(searchImg)
                let searchtext = document.createElement("div")
                searchtext.className = "text"
                searchBox.appendChild(searchtext)
                let searchHeading = document.createElement("h6")
                searchHeading.innerText = data.results[i].original_name
                searchtext.appendChild(searchHeading)
                let rateandyears = document.createElement("div")
                rateandyears.className = "rateandyears"
                searchtext.appendChild(rateandyears)
        
                let rateBoxs = document.createElement("h5")
                rateBoxs.className = "rate-box"
                rateBoxs.innerHTML = `
                <i class="fa-solid fa-star"></i>
                <span>${data.results[i].vote_average}</span>`
                rateandyears.appendChild(rateBoxs)
                
                let years = document.createElement("span")
                years.innerText = data.results[i].first_air_date
                rateandyears.appendChild(years)
        
        
                document.querySelector(".search-result").appendChild(searchBox)
        let searchBar = document.querySelector(".form-control")
        let searchb = document.querySelectorAll(".search-box")
        let titleSearch = document.querySelectorAll(".search-box h6")

    
        searchBar.onkeyup = function() { 
            document.querySelector(".search-result").style.display = "block"
            for(let i=0; i < titleSearch.length ; i++) {
                if (titleSearch[i].innerHTML.toUpperCase().includes(searchBar.value.toUpperCase())) {
                    searchb[i].classList.add("active")
                }else {
                    searchb[i].classList.remove("active")
                }
            }
        }
    
    
        searchBox.onclick = function() {
            document.querySelector(".search-result").style.display = "none"
            searchBar.value = ""
            whatYouClicked.innerHTML = `
                        <div class="movie-description-container">
                        <div class="container">
                        <div class="movie-description-box">
                            <div class="movie-description-img-box">
                                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                            </div>
                            <div class="movie-description-text-box">
                                <h1>${data.results[i].original_name}</h1>
                                <ul>
                                <li class "rate">
                                <i class="fa-solid fa-star"></i>
                                <span>${data.results[i].vote_average}</span>
                                </li>
                                <li>
                                ${data.results[i].origin_country}
                                
                                </li>
                                <li>
                                ${data.results[i].first_air_date}
                                </li>
                                </ul>
                                <p>${data.results[i].overview}</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                </div>
                `
                setTimeout(function() {
                    document.querySelector(".movie-description-container").classList.add("active")
                } , 10)
                
                document.querySelector(".fa-solid.fa-xmark").onclick = () => {
                    document.querySelector(".movie-description-container").classList.add("close")
                }
        }
    }
}
get()





const upComingMoviesApi = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2"
let upComingMoviesrow = document.querySelector(".upcoming .row")

async function getupcoming() {
    const response = await fetch(upComingMoviesApi+apiKey)
    const data = await response.json()
    for (let i=0; i < data.results.length; i++ ) {
        upComingMoviesrow.className = "row d-flex align-items-center"
        let col = document.createElement("div")
        col.className = "box"
        upComingMoviesrow.appendChild(col)

        let imgBox = document.createElement("div")
        imgBox.className = "img-box"
        col.appendChild(imgBox)

        let img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`
        imgBox.appendChild(img)

        let text = document.createElement("div")
        text.className = "text"
        col.appendChild(text)
        let title = document.createElement("h5")
        title.innerText = data.results[i].title
        text.appendChild(title)

        let rateandyear = document.createElement("div")
        rateandyear.className = "rateandyear"
        text.appendChild(rateandyear)

        let rateBox = document.createElement("h5")
        rateBox.className = "rate-box"
        rateBox.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <span>${data.results[i].vote_average}</span>`
        rateandyear.appendChild(rateBox)
        
        let year = document.createElement("span")
        year.innerText = data.results[i].release_date
        rateandyear.appendChild(year)
        col.onclick = function() {
        let whatYouClicked = document.querySelector(".what-you-clicked")
            whatYouClicked.innerHTML = `
            <div class="movie-description-container">
            <div class="container">
            <div class="movie-description-box">
                <div class="movie-description-img-box">
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                </div>
                <div class="movie-description-text-box">
                    <h1>${data.results[i].title}</h1>
                    <ul>
                    <li class "rate">
                    <i class="fa-solid fa-star"></i>
                    <span>${data.results[i].vote_average}</span>
                    </li>
                    <li>
                    ${data.results[i].original_language}
                    
                    </li>
                    <li>
                    ${data.results[i].release_date}
                    </li>
                    </ul>
                    <p>${data.results[i].overview}</p>
                </div>
            </div>
            <i class="fa-solid fa-xmark"></i>
            </div>
    </div>
    `
    setTimeout(function() {
        document.querySelector(".movie-description-container").classList.add("active")
    } , 10)
    document.querySelector(".fa-solid.fa-xmark").onclick = () => {
        document.querySelector(".movie-description-container").classList.add("close")
    }
        }
    }
}
getupcoming()



document.querySelector(".sign-in").addEventListener("click" , signupPopUp )
let inputs = document.querySelectorAll(".sign-in-box input")

function loading() {
    document.querySelector(".spin-loader-overlay").classList.add("active")
}

function cancelLoading() {
    document.querySelector(".spin-loader-overlay").classList.remove("active")
}

function signupPopUp() {
    document.querySelector(".overlay-sign-in").classList.add("active")
    document.querySelector(".sign-in-box").classList.add("active")
    document.querySelector(".sign-out").classList.add("active")
    document.querySelector(".signin-btn").onclick = () => {
        if (inputs[0].value !== "" && inputs[1].value !== "") {
            console.log(inputs[0].value)
            console.log(inputs[1].value)
            document.querySelector(".overlay-sign-in").classList.remove("active")
            document.querySelector(".sign-in-box").classList.remove("active")
            document.querySelector(".sign-out").classList.remove("active")
            document.querySelector(".user-name .not-filed").classList.remove("active")
            document.querySelector(".pass .not-filed").classList.remove("active")
            document.querySelector(".sign-in").style.display = "none"
            inputs[0].style.cssText = "border: none;"
            inputs[1].style.cssText = "border: none;"
            document.querySelector(".avatar-user").classList.add("active")
            loading()
            setTimeout(cancelLoading,5000)
        }
        if (inputs[0].value === "") {
            inputs[0].style.cssText = "border: 1px solid #e50914;"
            document.querySelector(".user-name .not-filed").classList.add("active")
        }
        if (inputs[1].value === "") {
            inputs[1].style.cssText = "border: 1px solid #e50914;"
            document.querySelector(".pass .not-filed").classList.add("active")
        }
    }
}
document.querySelector(".sign-out").onclick = ()=> {
    document.querySelector(".overlay-sign-in").classList.remove("active")
    document.querySelector(".sign-in-box").classList.remove("active")
    document.querySelector(".sign-out").classList.remove("active")
}



document.querySelectorAll(".pass .see")[0].onclick = () => {
    document.querySelectorAll(".pass .see")[0].classList.remove("active")
    document.querySelectorAll(".pass .see")[1].classList.add("active")
    inputs[1].type = "text"
}

document.querySelectorAll(".pass .see")[1].onclick = () => {
    document.querySelectorAll(".pass .see")[1].classList.remove("active")
    document.querySelectorAll(".pass .see")[0].classList.add("active")
    inputs[1].type = "password"
}











