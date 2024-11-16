import React from 'react';
import kiwiFruit from '../../assets/kiwi_fruit_flat.png'

function HomeMain() {
    return (
        <main>
            <div className="flex flex-col">
                {/* slogan section */}
                <div className="flex flex-col md:flex-row md:justify-between md:mt-12 mt-4">
                    <div className="flex-grow"></div>
                    <div className="flex flex-col-reverse md:flex-row md:justify-between p-6 mt-2.5 justify-center items-center">
                        <div className="flex flex-col md:mr-8 items-center md:items-start">
                            <h2 className="font-bold text-3xl md:text-5xl lg:text-7xl whitespace-nowrap">
                                <span>🏵️🦁南湖207寝</span>
                            </h2>
                            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl whitespace-nowrap  mt-2">
                                <span
                                    className="bg-gradient-to-br from-[var(--main-slogon-gradient-lefttop)] to-[var(--main-slogon-gradient-rightbottom)] text-transparent bg-clip-text">
                                    苌楚KiWi工作室
                                </span>
                            </h1>
                            <p className="text-1xl md:text-3xl lg:text-4xl mt-2">做能文能武的
                                <span className="text-red-400 font-bold">计算机人</span>
                            </p>
                            <div className="flex mt-8">
                                <button
                                    className="bg-wikiGreen-250 hover:bg-wikiGreen-400 w-32 h-12 rounded-full text-lg font-bold flex items-center justify-center"
                                    onClick={() => window.location.href = '/changchu/team'}>开始
                                </button>
                                <button
                                    className="bg-wikiGreen-250 hover:bg-wikiGreen-400 w-32 h-12 rounded-full text-lg font-bold flex items-center justify-center ml-4"
                                    onClick={() => window.location.href = 'https://github.com/drunksweet/changchu.git'}>源码
                                </button>
                            </div>
                        </div>
                        <div
                            className="relative flex justify-center items-center md:w-[300px] md:h-[300px] w-[300px] h-[300px]">
                            <div className="gradient-logo-bkg"></div>
                            <img className="absolute w-1/2 h-1/2 z-10" src={kiwiFruit} alt="kiwi_fruit"/>
                        </div>
                    </div>
                    <div className="flex-grow"></div>
                </div>
                {/* cards section */}
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-between mt-4 md:mt-8 lg:mt-16">
                    <div className="flex-grow"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[95%]">
                        {[
                            {
                                icon: "⚒️",
                                title: "注重基础",
                                description: "立足于计算机学科理论，独立于专业方向学习。"
                            },
                            {
                                icon: "👍️",
                                title: "与时俱进",
                                description: "选用国际主流技术栈，关注前沿新兴科技。"
                            },
                            {
                                icon: "🐣",
                                title: "项目驱动",
                                description: "边学边做，通过小项目锻炼能力，增强理解。"
                            }
                        ].map((card, index) => (
                            <div key={index}
                                 className="bg-wikiGreen-150 rounded-[40px] p-6 shadow-lg max-w-[100%]">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="bg-wikiGreen-350  w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-2xl md:text-2xl lg:text-3xl">{card.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-xl md:text-xl lg:text-2xl">{card.title}</h3>
                                </div>
                                <p className="text-base md:text-lg lg:text-xl text-start ml-1.5">{card.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex-grow"></div>
                </div>
            </div>
        </main>
)
    ;
}

export default HomeMain;
