import React, { useEffect, useState } from "react";

const apiKey = "eed5b261d4fe482a9657adb7e671b7e7";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;

const NewsGrid = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiUrl);
			const json = await response.json();
			setNews(json.articles);
			// console.log(json.articles);
		};

		fetchData();
	}, []);

	// useEffect(() => {
	//   fetch(`${apiUrl}`)
	//     .then((response) => response.json())
	//     .then((data) => {
	//       setNews(data.articles);
	//     });
	// }, []);
	// const firstNews = news.length > 0 ? [news[1], news[2]] : [];
	return (
		<div className=" flex flex-wrap justify-center items-center">
			{news.map((articles, index) => (
				<div
					key={index}
					className="p-4 font-abc cursor-pointer w-[300px] flex flex-col items-center justify-center"
				>
					<div className="imageDiv">
						<a href={articles.url} target="_blank" rel="noreferrer">
							<img
								src={
									articles.urlToImage
										? articles.urlToImage
										: "https://images.wsj.net/im-881105/social"
								}
								alt=""
								className="rounded-lg h-[15rem] md:w-[20rem] object-contain"
							/>
						</a>
					</div>
					<div className="headingDiv">
						<a
							href={articles.url}
							className="text-black"
							target="_blank"
							rel="noreferrer"
						>
							{articles.title ? articles.title.slice(0, 60) : ""}
						</a>
					</div>
					<div className="descriptionDiv pt-2">
						<a
							href={articles.url}
							target="_blank"
							rel="noreferrer"
							className="text-gray-500 hover:text-gray-700 transition-all"
						>
							{articles.description ? articles.description.slice(0, 125) : ""}
						</a>
					</div>

					{/* Div2  */}

					{/* <div className="w-full">
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
              </div> */}

					{/* Div3  */}

					{/* <div className="w-full">
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
              </div> */}

					{/* Div4  */}

					{/* <div className="w-full hidden custom:block">
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
              </div> */}
				</div>
			))}

			<hr />
		</div>
	);
};

export default NewsGrid;
