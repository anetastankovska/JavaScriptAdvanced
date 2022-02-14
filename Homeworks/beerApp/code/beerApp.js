let wrapperDiv = document.getElementById("wrapper");
let baseUrl = "https://api.punkapi.com/v2/beers";
let data = {};
let beerList = [];
let currentPage = 0;


// Function for loading the home page "Beers"
function loadHome () {
    let homeStr = `<div id="home"><h1>Welcome to the beer world!</h1>
    <p>On this simple beer page you can get all the information about different types of beer.</p><hr>
    <img id="homePageImg" src="../pictures/beer-banner.jpg" alt="beer."></div>`
    return homeStr;
}

// Function for loading the sort by and page size drop-down lists
function loadSortLists () {
    let sortStr = ""
    sortStr = `<div id="drop-down">
        <select name="page-size" id="page-size">
        <option value="5" selected>Show 5</option>
        <option value="10">Show 10</option>
        <option value="20">Show 20</option></select>
        <select name="sort-by" id="sort-by">
        <option value="sort-by" selected disabled>Sort by</option>
        <option value="beerName">Name</option>
        <option value="abv">% Alcohol</option>
        <option value="firstBrewed">First brewed</option>
        <option value="ibu">Bitternes</option></select></div>`

    return sortStr;
}


// Function for loading all beers 
function loadBeers (responseapi) {
    let beerStr = "";
    beerStr += `<div id="flexDiv">`
    for (let item of responseapi) {
        beerStr +=
        `<div class="flexChild"><img class="smallImg" src=${item.image_url}>
        <h5>${item.name}</h5>
        <p id="description">${item.description}</p>
        <button class="beerDetails">More details</button>
        </div>   `
    }
    beerStr += `</div>`
    // beerStr += loadButtons();
    
    return beerStr;
};

// Function for showing more details about a beer
function showBeerDetails (beerData) {

    let str = 
        `<img src=${beerData.image_url} alt="${beerData.name}" class="beerDetailsImg">
        <div class="beerDescription">
        <h3>${beerData.name}</h3>
        <p>${beerData.tagline}</p>
        <p>${beerData.description}</p>
        <p>First brewed: ${beerData.first_brewed}
        <p>Alcohol: ${beerData.abv}%</p>
        <p>Bitternes: ${beerData.ibu} IBU </p>
        <h5>Food pairing</h5>
        <ul id="food"><li>${beerData.food_pairing.join("</li><li>")}</li></ul>
        <button id="backButton">Back to beers</button>
        </div>
        `;
        return str;
};



// Function and events for showing and handling the previous and next buttons 
function loadButtons () {
    let buttonStr = "";
    buttonStr = `<div id="buttonsDiv">
        <button id="prev">Previous page</button>
        <span>Current page: ${currentPage + 1}</span>
        <button id="next">Next page</button></div>`;
    console.log(buttonStr);
    document.getElementById("pagination").innerHTML = buttonStr;
    if(currentPage == 0){
        document.getElementById("prev").setAttribute("disabled", true);
    }
    document.getElementById("next").addEventListener('click', event => {
        currentPage++;
        document.getElementById("prev").removeAttribute("disabled");
        document.getElementsByTagName("span")[0].innerText = `Current page: ${currentPage+1}`;
        let cnt = (1+currentPage) * parseInt(document.getElementById("page-size").value);
        console.log(cnt);
        if(cnt >= beerList.length) {document.getElementById("next").setAttribute("disabled", true); }
        document.getElementById("page-size").dispatchEvent(new Event('change'));
    })
    document.getElementById("prev").addEventListener('click', event => {
        currentPage--;
        if(currentPage == 0){
            document.getElementById("prev").setAttribute("disabled", true);
        }
        let cnt = (1+currentPage) * parseInt(document.getElementById("page-size").value);
        console.log(cnt);
        if(cnt >= beerList.length) {document.getElementById("next").removeAttribute("disabled"); }
        document.getElementsByTagName("span")[0].innerText = `Current page: ${currentPage+1}`;
        document.getElementById("page-size").dispatchEvent(new Event('change'));
    })
    
}

//Event for showing the home page on load
$(document).ready (() => {
    document.getElementById("home").click();

});


//Event for handling the Home page
document.getElementById("home").addEventListener('click', () => {
    wrapperDiv.innerHTML = loadHome();
});


//Event for handling the Beers page 
document.getElementById("beers").addEventListener('click', () => {
    $.ajax({
        method: "GET",
        url: baseUrl,
        success: function (response) {
            currentPage=0;
            console.log(response);
            wrapperDiv.innerHTML =`<div id="sortAndPage"></div>
            <div id="beerGrid"></div>
            <div id="pagination"></div>`
            let sortAndPageDiv = document.getElementById("sortAndPage");
            let beerGridDiv = document.getElementById("beerGrid");
            // let paginationDiv = document.getElementById("pagination");
            beerList = [];
            data = response.reduce((prev, curr) => {
                prev[curr.name] = curr;
                beerList.push(curr);
                return prev;
            }, {}); 
            sortAndPageDiv.innerHTML = loadSortLists();
            let pagedBeers = handlePageSize(beerList, 5, currentPage);
            beerGridDiv.innerHTML = loadBeers(pagedBeers);
            moreDetailsButtons();
            loadButtons();
            let onChangeSort = (event) => {
                let temp = sortBeers(beerList, event.target.value);
                let pageSizeVal = document.getElementById("page-size").value;
                let paged = handlePageSize(temp, parseInt(pageSizeVal), currentPage);
                beerGridDiv.innerHTML = loadBeers(paged);
                moreDetailsButtons();
            }
            document.getElementById("sort-by").addEventListener('change', onChangeSort);
            
            let onChangePageSize = (event) => {
                let sortedVal = document.getElementById("sort-by").value;
                let temp = sortBeers(beerList, sortedVal);
                let pagedTemp = [];
                pagedTemp = handlePageSize(temp, parseInt(event.target.value), currentPage);
                beerGridDiv.innerHTML = loadBeers(pagedTemp);
                moreDetailsButtons();
            }
            document.getElementById("page-size").addEventListener('change', onChangePageSize);

        },
        error: function (error) {
            console.log(error);
        }
    });
});


// Event and function for showing more details about each bear
function moreDetailsButtons () {
    let buttons = Array.from(document.getElementsByClassName("beerDetails"));
    buttons.map(button => {
        button.addEventListener('click', () => {
            console.log(buttons.indexOf(button));
            detail = beerList[buttons.indexOf(button)]
            wrapperDiv.innerHTML = showBeerDetails(detail);
            
            // Event for returning from beer details to beers page
            document.getElementById("backButton").addEventListener('click', () => {
                document.getElementById("beers").click();
            });            

        });
    });
};

// Event and function for showing random beer
document.getElementById("random").addEventListener('click', () => {

    $.ajax({
        method: "GET",
        url: baseUrl,
        success: function (response) {
            console.log(response);
            beerList = [];
            data = response.reduce((prev, curr) => {
                prev[curr.name] = curr;
                beerList.push(curr);
                return prev;
            }, {});
            let randomNum = Math.floor(Math.random() * 26);
            console.log(randomNum);
            wrapperDiv.innerHTML = showBeerDetails(beerList[randomNum]);

            // Event for returning from beer details to beers page
            document.getElementById("backButton").addEventListener('click', () => {
                document.getElementById("beers").click();
            });            
        },
        error: function (error) {
            console.log(error);
        }
    });
    
})

// Event for handling the searh button
document.getElementById("searchButton").addEventListener('click', () => {
        $.ajax({
            method: "GET",
            url: baseUrl,
            success: function (response) {
                console.log(response);
                let searchValue = document.getElementById("searchInput").value;
                let filteredList = response.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
                beerList = filteredList;
                wrapperDiv.innerHTML = loadBeers(filteredList);   
                moreDetailsButtons();
            },
            error: function (error) {
                console.log(error);
            }
        });
})

// Function for handling the search input - it will show results on keypress
document.getElementById("searchInput").addEventListener('keyup', () => {
    $.ajax({
        method: "GET",
        url: baseUrl,
        success: function (response) {
            console.log(response);
            let searchValue = document.getElementById("searchInput").value;
            let filteredList = response.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
            beerList = filteredList;
            wrapperDiv.innerHTML = loadBeers(filteredList);   
            moreDetailsButtons();
        },
        error: function (error) {
            console.log(error);
        }
    });
})

// Function for sorting the beers
function sortBeers (beers, criteria) {
    let sortedBeers = [];
    switch (criteria) {
        case "abv":
            sortedBeers = beers.sort((a, b) => (a.abv - b.abv));
            break;
        case "ibu":
            sortedBeers = beers.sort((a, b) => (a.ibu - b.ibu));
            break;
        case "beerName":
            sortedBeers = beers.sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
            break;
        case "firstBrewed":
            sortedBeers = beers.sort((a, b) => {
                let arrA = a.first_brewed.split("/");
                let arrB = b.first_brewed.split("/");
        
                let dateA = `${arrA[1]}${arrA[0]}`;
                let dateB = `${arrB[1]}${arrB[0]}`;
        
                return parseInt(dateA) - parseInt(dateB);
            });
            break;
        default:
            sortedBeers = beers;
            break
    }
    console.log(sortedBeers);
    return sortedBeers;
    
}


// Function for handling the pageSize 
function handlePageSize (beers, pageSize, currentPage) {
    let result = [];
    let startIndex = pageSize * currentPage;
    for (i = 0; i < pageSize; i++) {
        if ((startIndex + i) < beers.length) {
            result.push(beers[startIndex + i]); 
        }
    }
    return result;
}