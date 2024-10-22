import React from 'react';
import kiwiFruit from '../../assets/kiwi_fruit_flat.png';

function HomeMain() {
  return (
    <main>
      <div className="flex flex-col">
        {/* slogan section */}
        <div className="flex flex-col md:flex-row md:justify-between md:mt-12 mt-4">
          <div className="flex-grow"></div>
          <div className="flex flex-col-reverse md:flex-row md:justify-between p-6 mt-2.5 justify-center items-center">
            <div className="flex flex-col md:mr-8 items-center md:items-start">
              <h1 className="font-bold text-3xl md:text-5xl whitespace-nowrap">
                <span className="bg-gradient-to-br from-[var(--main-slogon-gradient-lefttop)] to-[var(--main-slogon-gradient-rightbottom)] text-transparent bg-clip-text">
                  苌楚KiWi
                </span>
              </h1>
              <h2 className="font-bold text-3xl md:text-5xl whitespace-nowrap mt-2">
                <span>大学生同寝室工作室</span>
              </h2>
              <p className="text-[1.25re] md:text-2xl mt-2">写着玩，当练习</p>
              <div className="flex mt-8">
                <button
                  className="bg-[var(--main-introduction-card-icon-content-bkg)] w-32 h-12 rounded-full font-bold flex items-center justify-center"
                  onClick={() => (window.location.href = '/changchu/team')}
                >
                  开始
                </button>
                <button
                  className="bg-[var(--main-introduction-card-icon-content-bkg)] w-32 h-12 rounded-full font-bold flex items-center justify-center ml-4"
                  onClick={() =>
                    (window.location.href =
                      'https://github.com/drunksweet/changchu.git')
                  }
                >
                  源码
                </button>
              </div>
            </div>
            <div className="relative flex justify-center items-center md:w-[300px] md:h-[300px] w-[300px] h-[300px]">
              <div className="gradient-logo-bkg"></div>
              <img
                className="absolute w-1/2 h-1/2 z-10"
                src={kiwiFruit}
                alt="kiwi_fruit"
              />
            </div>
          </div>
          <div className="flex-grow"></div>
        </div>
        {/* cards section */}
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between mt-4 md:mt-8">
          <div className="flex-grow"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[95%]">
            {[
              {
                icon: '⚒️',
                title: '注重基础',
                description:
                  '专门设立公共的计算机基础线，独立于专业方向的学习。',
              },
              {
                icon: '👍️',
                title: '与时俱进',
                description:
                  '选用最新的教学材料，每年修订教程，不教过时的内容。',
              },
              {
                icon: '🐣',
                title: '项目驱动',
                description: '边学边做，通过小项目锻炼能力，增强理解。',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[var(--main-introduction-card-content-bkg)] rounded-[40px] p-6 shadow-lg max-w-[100%]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[var(--main-introduction-card-icon-content-bkg)]  w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg">{card.title}</h3>
                </div>
                <p className="text-base text-start ml-1.5">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </main>
  );
}

export default HomeMain;
