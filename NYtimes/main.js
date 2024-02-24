const API_KEY = `68c442d8c9a541c0b4bb04244d50aea2`;
const url1 = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;
const url2 = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3 = `https://javas-project-jane.netlify.app/top-headlines?country-kr`;
let newsList = [];
const menus = document.querySelectorAll("#menu-list button");
menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)));


let url = new URL(url1)

let totalResults = 0;
let page = 1;
const pageSize = 10;
const groupSize = 5;


const getNews = async() => {
    try { // 이 파일의 하단 참조!!
        url.searchParams.set("page", page); // => &page=page
        url.searchParams.set("pageSize", pageSize); // url을 fetch 하기 전에 해야 한다.

        const response = await fetch(url); // 비동기.
        //console.log("rrr", response);

        const data = await response.json();
        console.log("ddd", data);
        if (response.status === 200) {
            if (data.articles.length === 0) {
                throw new Error("No result for this search.")
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            render();
            paginationRender();
        } else {
            throw new Error(data.message);
            // 오류가 났을 때 console.log(data) 값을 불러오면 Your API key is invalid or incorrect. Check your key ... 라는 message를 볼 수 있다.

            status: "error"
        }

    } catch(error) {
        //console.log("error", error.message);
        errorRender(error.message);
    }
}

const getLatestNews = async () => {
    url = new URL(url);    // url을 전역변수로 바꿨기 때문에 각 함수마다 재정의 해서 쓸 수 있다.
    getNews();
};

const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase();
    //url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`)
    url = new URL (`https://javas-project-jane.netlify.app/top-headlines?country-kr&category=${category}`)
    getNews();
}

const getNewsByKeyword = async () => {
    const keyword = document.getElementById("search-input").value;
    //url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`)
    url = new URL (`https://javas-project-jane.netlify.app/top-headlines?country-kr&q=${keyword}`)
    getNews();
}

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

const errorRender = (errorMessage) => {
    const errorHTML = `<div class="alert alert-primary error" role="alert">
        ${errorMessage}
      </div>`;
      document.getElementById("news-board").innerHTML = errorHTML;
}
const paginationRender = () => {
    // totalResult
    // page
    // pageSize
    // groupSize
    // totalPages
    const totalPages = Math.ceil(totalResults / pageSize);
    // pageGroup
    const pageGroup = Math.ceil(page / groupSize);
    // lastPage -> 엣지 케이스를 추가해야 함.
    // 마지막 페이지 그룹이 그룹 사이즈보다 작으면? lastPage = totalPage.
    let lastPage = pageGroup * groupSize;
    // firstPage -> 엣지 케이스를 추가해야 함.
    if (lastPage > totalPages) {
        lastPage = totalPages;
    }
    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);
    //first~last까지, 그려주는 것, 렌더링을 하면 된다.

let paginationHTML = `<li class="page-item" onclick="moveToPage(${page-1})"><a class="page-link">&lt;</a></li>`;
for (let i = firstPage; i <= lastPage; i++) {
    paginationHTML += `<li class="page-item ${i === page ? "active" :""}" onclick="moveToPage(${i})"><a class="page-link">${i}</a></li>`
}
paginationHTML += `<li class="page-item" onclick="moveToPage(${page+1})"><a class="page-link">&gt;</a></li>`
    document.querySelector(".pagination").innerHTML = paginationHTML

   /* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>*/
}

const moveToPage = (pageNum) => {
    console.log("moveToPage", pageNum);
    // pageNum을 가지고 url을 호출해야 함.
    page = pageNum;
    getNews();
}
getLatestNews();

// 1. 버튼들에 클릭 이벤트 주기.
// 2. 카테고리 별 뉴스 가져오기.
// 3. 그 뉴스를 보여주기.

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


/* 코알 누나의 접근 방법과 어떻게 다른지 기억하자~!!

1. 함수가 try 안에 들어 있음!
2. 에러가 난다면 어디에서 나는지 정확히 파악하지 못함. -> response!
3. 실제로 console.log를 해서 에러 시에 어느 부분이 어떻게 바뀌는지 확인! -> status: 200, 401 etc.
4. 에러 메세지를 따로 보여주는 render 함수를 만들어야 함!
    // console.log("error", error.message);
    errorRender(error.message);
5. throw new Error("No result for this search.")
6. throw new Error(data.message);

- wrong way.

<div class="alert alert-primary" role="alert" id="error-alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>

errorAlert = document.getElementById("error-alert");

try {
    // 코드 입력.
    const getNewsByKeyword = async () => {
        const keyword = document.getElementById("search-input").value;
        //const url = new URL (`https://newsapi.org/v2/top-headlines?country=kr&q=${keyword}&apiKey=${API_KEY}`)
        url = new URL (`https://javas-project-jane.netlify.app/top-headlines?country-kr&q=${keyword}`)
        getNews();
    }

    if (keyword == false) {
        errorAlert.value.textContent = "no match for your search";
    }
} catch (error) {
    // 에러 핸들.
    errorAlert.value.textContent
}
*/
