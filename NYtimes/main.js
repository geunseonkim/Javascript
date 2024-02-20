const API_KEY = `68c442d8c9a541c0b4bb04244d50aea2`;
let news = [];
const getLatestNews = async () => {
    const url = new URL(`https://https://javas-project-jane.netlify.app/nytimes//top-headlines?country=us&apiKey=${API_KEY}`);
    const response = await fetch(url); // 비동기.
    const data = await response.json();
    news = data.articles;
    console.log("ddd", news);
};

getLatestNews();