const API_KEY = `68c442d8c9a541c0b4bb04244d50aea2`;
const url1 = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;
const url2 = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3 = `https://javas-project-jane.netlify.app/top-headlines?country-kr`;
let newsList = [];
const menus = document.querySelectorAll(".menus button");
console.log("mmm", menus);
menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)))

const getLatestNews = async () => {
    const url = new URL(url3);
    console.log("uuu", url)
    const response = await fetch(url3); // 비동기.
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("rrr", response);
    console.log("ddd", newsList);
};

//getLatestNews();

const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase()
    console.log("category", category);
    const url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`)
    const response = await fetch(url)
    const data = await response.json();
    console.log("ddd", data);
    newsList = data.articles;
    render();
}

const getNewsByKeyword = async () => {
    const keyword = document.getElementById("search-input").value;
    console.log("keyword", keyword);
    const url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`)

    const response = await fetch(url)
    const data = await response.json()
    console.log("keyword data", data);
    newsList = data.articles;
    render();
}

// 상단 햄버거 메뉴, 검색창 설정.
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

const openSearchIcon = () => {
    let InputArea = document.getElementById("input-area");
        if (InputArea.style.display === "inline") {
            InputArea.style.display = "none";
        } else {
            InputArea.style.display = "inline";
        }
}
// fin.

const render = () => {
    const newsHTML = newsList.map(
        (news) =>
        `<div class="row news">
    <div class="col-lg-4">
      <img class="news-img-size"
      src="${
        news.urlToImage ||
        "https://www.feednavigator.com/var/wrbm_gb_food_pharma/storage/images/9/2/8/5/235829-6-eng-GB/Feed-Test-SIC-Feed-20142.jpg"
}" />
    </div>
    <div class="col-lg-8">
      <h2 class="headLine">${news.title}</h2>
      <p>${
        news.description == null || news.description == ""
          ? "내용없음"
          : news.description.length > 200
          ? news.description.substring(0, 200) + "..."
          : news.description
   }</p>
      <div>${news.source.name || "no source"}  ${moment(
        news.published_date
     ).fromNow()} * ${news.publishedAt}</div>
    </div>
  </div>
  `).join(" ");
  console.log("html", newsHTML);
  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();

// 1. 버튼들에 클릭 이벤트.
// 2. 카테고리별 뉴스 가져오기.
// 3. 그 뉴스를 보여주기.