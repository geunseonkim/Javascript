const API_KEY = `68c442d8c9a541c0b4bb04244d50aea2`;
const url1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const url2 = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3 = `https://javas-project-jane.netlify.app/top-headlines?country-kr`;
let newsList = [];
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
        (news) => `<div class="row news">
    <div class="col-lg-4">
      <img
        class="news-img-size news-img"
        src="${news.urlToImage}" || "image-error.jpeg"
      />
    </div>
    <div class="col-lg-8">
      <h2>${news.title}</h2>
      <p>${news.description}</p>
      <div>${news.source.name} * ${news.publishedAt}</div>
    </div>
  </div>
  `).join(" ");
  console.log("html", newsHTML);
  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();