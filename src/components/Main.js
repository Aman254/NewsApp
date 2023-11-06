import React, { useEffect, useState } from "react";
const apiKey = "eed5b261d4fe482a9657adb7e671b7e7";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        // Extract and set the news articles from the API response
        setNews(data.articles);
      });
  }, []);
  // let newsNumber = 4;
  // const firstNews = news.length > 0 ? [news[newsNumber]] : [];
  const firstNews = news.length > 0 ? [news[5]] : [];
  return (
    <>
      <main className="m-4 p-6 ">
        {firstNews.map((article, index) => (
          <div key={index}>
            <div className=" justify-center flex items-center ">
              <a href="" target="_blank">
                <span className="text-gray-700 tracking-tighter font-abc font-bold text-[25px] md:text-[40px]">
                  {article.title}
                </span>
              </a>
            </div>

            <div className="justify-center flex items-center md:text-[20px] text-[15px]  tracking-tighter font-abc text-gray-500 ">
              <span>{article.description}</span>
            </div>

            <div className="flex-row my-[35px] items-center md:flex">
              <div className="pr-2 pl-auto max-w-[40rem]">
                <a href={article.url} target="_blank">
                  <span
                    className=" font-abc text-gray-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer 
              hover:text-gray-700 transition-all"
                  >
                    {article.content}
                  </span>
                </a>
                <div className="my-8 text-[20px] font-abc ">
                  <a href={article.url} className="" target="_blank">
                    More..
                  </a>
                </div>
              </div>
              <div>
                <a href={article.url} target="_blank">
                  <img
                    src={article.urlToImage}
                    alt="img"
                    className=" md:h-[28rem] w-[80rem] rounded-lg cursor-pointer"
                  />
                </a>
              </div>
            </div>
            <hr className="w-full flex" />
          </div>
        ))}
      </main>
    </>
  );
};

export { apiUrl, apiKey };

export default Main;
