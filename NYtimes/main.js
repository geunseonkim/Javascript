const API_KEY = `68c442d8c9a541c0b4bb04244d50aea2`;
const url1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const url2 = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
const url3 = `https://javas-project-jane.netlify.app/NYtimes//top-headlines?country=kr`;
let news = [];
const getLatestNews = async () => {
    const url = new URL(url3);
    console.log("uuu", url)
    const response = await fetch(url); // 비동기.
    const data = await response.json();
    news = data.articles;
    console.log("rrr", response);
    console.log("ddd", news);
};

getLatestNews();