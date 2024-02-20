const API_KEY = `http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines`;
let news = [];
const getLatestNews = async () => {
    const url = new URL(`https://https://javas-project-jane.netlify.app/nytimes//top-headlines?`);
    const response = await fetch(url); // 비동기.
    const data = await response.json();
    news = data.articles;
    console.log("ddd", news);
};

getLatestNews();