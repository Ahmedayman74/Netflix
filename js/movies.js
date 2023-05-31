const topRatedApi = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
const apiKey = "&api_key=12c60efec8184320b206c19b78417449"
let row = document.querySelector(".top-rated-movies .container .row")
let whatYouClicked = document.querySelector(".what-you-clicked")



async function get() {
    const response = await fetch(topRatedApi+apiKey)
    const data = await response.json()
    console.log(data)
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
        title.innerText = data.results[i].original_title
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
        whatYouClicked.innerHTML = `
            <div class="movie-description-container">
            <div class="container">
            <div class="movie-description-box">
                <div class="movie-description-img-box">
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                </div>
                <div class="movie-description-text-box">
                    <h1>${data.results[i].original_title}</h1>
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
get()





const nowPlayingApi = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=12c60efec8184320b206c19b78417449"
let nowPlaying_Row = document.querySelector(".nowplaying .container .row")


async function getnowPlaying() {
    const response = await fetch(nowPlayingApi)
    const data = await response.json()
    console.log(data)
    for (let i=0; i < data.results.length; i++ ) {
        let col = document.createElement("div")
        col.className = "col-md-6 col-lg-2"
        nowPlaying_Row.appendChild(col)

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
        title.innerText = data.results[i].original_title
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
        whatYouClicked.innerHTML = `
            <div class="movie-description-container">
            <div class="container">
            <div class="movie-description-box">
                <div class="movie-description-img-box">
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                </div>
                <div class="movie-description-text-box">
                    <h1>${data.results[i].original_title}</h1>
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
getnowPlaying()



const popularApi = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=4&api_key=12c60efec8184320b206c19b78417449"
let popular_Row = document.querySelector(".popular .container .row")


async function getpopular() {
    const response = await fetch(popularApi)
    const data = await response.json()
    console.log(data)
    for (let i=0; i < data.results.length; i++ ) {
        let col = document.createElement("div")
        col.className = "col-md-6 col-lg-2"
        popular_Row.appendChild(col)

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
        title.innerText = data.results[i].original_title
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
        whatYouClicked.innerHTML = `
            <div class="movie-description-container">
            <div class="container">
            <div class="movie-description-box">
                <div class="movie-description-img-box">
                    <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
                </div>
                <div class="movie-description-text-box">
                    <h1>${data.results[i].original_title}</h1>
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
getpopular()