import React, { useEffect, useState } from "react";

const apiKey = "eed5b261d4fe482a9657adb7e671b7e7";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;

const NewsGrid = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);
  const firstNews = news.length > 0 ? [news[1], news[2]] : [];
  return (
    <>
      {firstNews.map((articles, index) => (
        <div key={index}>
          <div className="m-4 p-4">
            <div className="font-abc   cursor-pointer md:justify-between justify-between flex-row  sm:flex items-center">
              <div className="w-full">
                <div className="imageDiv">
                  <a href={articles.url} target="_blank">
                    <img
                      src={
                        articles.urlToImage
                          ? articles.urlToImage
                          : "https://images.wsj.net/im-881105/social"
                      }
                      alt=""
                      className="rounded-lg h-[15rem] md:w-[20rem] w-full"
                    />
                  </a>
                </div>
                <div className="headingDiv">
                  <span>
                    <a
                      href={articles.url}
                      className="text-black"
                      target="_blank"
                    >
                      {articles.title ? articles.title.slice(0, 60) : ""}
                    </a>
                  </span>
                </div>
                <div className="descriptionDiv pt-2">
                  <a href={articles.url} target="_blank">
                    <span className="text-gray-500 hover:text-gray-700  transition-all">
                      {articles.description
                        ? articles.description.slice(0, 125)
                        : ""}
                    </span>
                  </a>
                </div>
              </div>

              {/* Div2  */}

              <div className="w-full">
                <div className="imageDiv">
                  <a href={articles.url} target="_blank">
                    <img
                      src={
                        articles.urlToImage
                          ? articles.urlToImage
                          : "https://images.wsj.net/im-881105/social"
                      }
                      alt=""
                      className="rounded-lg h-[15rem] md:w-[20rem] w-full"
                    />
                  </a>
                </div>
                <div className="headingDiv">
                  <span>
                    <a
                      href={articles.url}
                      className="text-black"
                      target="_blank"
                    >
                      {articles.title ? articles.title.slice(0, 60) : ""}
                    </a>
                  </span>
                </div>
                <div className="descriptionDiv pt-2">
                  <a href={articles.url} target="_blank">
                    <span className="text-gray-500 hover:text-gray-700  transition-all">
                      {articles.description
                        ? articles.description.slice(0, 125)
                        : ""}
                    </span>
                  </a>
                </div>
              </div>

              {/* Div3  */}

              <div className="w-full">
                <div className="imageDiv">
                  <a href={articles.url} target="_blank">
                    <img
                      src={
                        articles.urlToImage
                          ? articles.urlToImage
                          : "https://images.wsj.net/im-881105/social"
                      }
                      alt=""
                      className="rounded-lg h-[15rem] md:w-[20rem] w-full"
                    />
                  </a>
                </div>
                <div className="headingDiv">
                  <span>
                    <a
                      href={articles.url}
                      className="text-black"
                      target="_blank"
                    >
                      {articles.title ? articles.title.slice(0, 60) : ""}
                    </a>
                  </span>
                </div>
                <div className="descriptionDiv pt-2">
                  <a href={articles.url} target="_blank">
                    <span className="text-gray-500 hover:text-gray-700  transition-all">
                      {articles.description
                        ? articles.description.slice(0, 125)
                        : ""}
                    </span>
                  </a>
                </div>
              </div>

              {/* Div4  */}

              <div className="w-full hidden custom:block">
                <div className="imageDiv">
                  <a href={articles.url} target="_blank">
                    <img
                      src={
                        articles.urlToImage
                          ? articles.urlToImage
                          : "https://images.wsj.net/im-881105/social"
                      }
                      alt=""
                      className="rounded-lg h-[15rem] md:w-[20rem] w-full"
                    />
                  </a>
                </div>
                <div className="headingDiv">
                  <span>
                    <a
                      href={articles.url}
                      className="text-black"
                      target="_blank"
                    >
                      {articles.title ? articles.title.slice(0, 60) : ""}
                    </a>
                  </span>
                </div>
                <div className="descriptionDiv pt-2">
                  <a href={articles.url} target="_blank">
                    <span className="text-gray-500 hover:text-gray-700  transition-all">
                      {articles.description
                        ? articles.description.slice(0, 125)
                        : ""}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <hr />
    </>
  );
};

export default NewsGrid;
