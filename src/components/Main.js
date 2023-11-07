import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

const apiKey = "eed5b261d4fe482a9657adb7e671b7e7";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;

const Main = () => {
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
	//   fetch(`${apiUrl}`)
	//     .then((response) => response.json())
	//     .then((data) => {
	//       // Extract and set the news articles from the API response
	//       setNews(data.articles);
	//     });
	// }, []);
	// let newsNumber = 4;
	// const firstNews = news.length > 0 ? [news[newsNumber]] : [];
	// const firstNews = news.length > 0 ? [news[5]] : [];
	console.log(news);

	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={"fade"}
				navigation={true}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[EffectFade, Autoplay, Pagination]}
				autoplay={true}
				className="mySwiper"
			>
				{news.map((article, index) => (
					<SwiperSlide key={index} className="bg-[#f5f5f5] p-6">
						<div className=" justify-center flex items-center ">
							<a href={article.url} target="_blank" rel="noreferrer">
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
								<a href={article.url} target="_blank" rel="noreferrer">
									<span
										className=" font-abc text-gray-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl cursor-pointer 
              hover:text-gray-700 transition-all"
									>
										{article.content === null
											? "No Available content"
											: article.content}
									</span>
								</a>
								<div className="my-8 text-[20px] font-abc ">
									<a
										href={article.url}
										className=""
										target="_blank"
										rel="noreferrer"
									>
										More..
									</a>
								</div>
							</div>
							<div>
								<a href={article.url} target="_blank" rel="noreferrer">
									<img
										src={
											article.urlToImage === null
												? "noimage.png"
												: article.urlToImage
										}
										alt="img"
										className=" md:h-[28rem] w-[80rem] rounded-lg object-contain cursor-pointer"
									/>
								</a>
							</div>
						</div>
						<hr className="w-full flex" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export { apiUrl, apiKey };

export default Main;
