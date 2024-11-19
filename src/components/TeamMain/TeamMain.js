import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import eastsun from '../../assets/profilePhoto/eastSun.jpg';
import shufu from '../../assets/profilePhoto/shufu.jpg';
import drunksweet from '../../assets/profilePhoto/drunksweet.png';

import GitHubLink from './GithubLink/GithubLink';
import ProgressBar from './ProgressBar/ProgressBar';

const Section = React.memo(({ title, description ,profile, name, pgithublink, content, skillLevels, isExpanded, onExpand}) => (
    <motion.div
        className={`transition-all ${
            isExpanded ? 'w-7/10' :     'w-1/4 md:w-1/5 lg:w-1/6'
        } h-screen grid ${isExpanded ? 'grid-cols-2 grid-rows-3'  : 'grid-cols-1'} grid-rows-3 gap-5 items-start justify-center cursor-pointer relative overflow-hidden bg-wikiGreen-25`}
        onClick={onExpand}
        layout
        role="button"
        aria-expanded={isExpanded}
    >
        {/*card1*/}
        <motion.div
            className={`col-start-1 row-start-1 row-span-2 w-full h-full order-1 flex-col bg-wikiGreen-25 `}
            layout
            style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}  // 仅当展开时允许点击
        >
            <h2 className="text-gray-900 text-xl md:text-3xl font-bold mt-4 md:mt-16 bg-wikiGreen-100 rounded-3xl">
                {title}
            </h2>
            <h4 className='text-gray-600 mt-1 md:mt-4 text-sm md:text-xl'>
                {description}
            </h4>
            <div className="flex items-center justify-center w-full">
                <motion.img className='block w-16 h-16 md:w-32 md:h-32 rounded-full mt-32 md:mt-40'
                            src={profile}
                            alt={`${name} profile`}
                            whileHover={{rotate: 360}}
                />
            </div>
            <h3 className="font-bold text-gray-800 text-base mt-1 md:mt-4 md:text-xl">
                {name}
            </h3>
            <div className="mt-8">
                <GitHubLink href={pgithublink} text='GitHub' />
            </div>
        </motion.div>
        {/*card2*/}
        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full text-center justify-items-center content-center px-4 col-start-1 row-start-3 row-span-1 order-2 bg-wikiGreen-50 rounded-t-3xl "
                >
                    {content}
                </motion.div>
            )}
        </AnimatePresence>
        {/*card3*/}
        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 20}}
                    transition={{duration: 0.3}}
                    className="w-full h-full col-start-2 row-start-1 row-span-3 order-3 "
                >
                    <div className="flex flex-col items-center justify-center w-full h-full p-2 md:p-4 lg:p-8 bg-wikiGreen-100">
                        <h1 className="uppercase text-lg text-gray-600 md:text-3xl md:px-2 md:py-1 mb-8 md:mb-12 lg:mb-16 bg-wikiGreenBrown-250 rounded-xl shadow-wikiGreenBrown-750">skilltree</h1>
                        {Object.entries(skillLevels).map(([key, value]) => (
                            <ProgressBar level={value} skill={key} />
                        ))}
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
))

export default function TeamMain(props) {
    const [expandedSection, setExpandedSection] = useState(null)

    const sections = [
        { title: '设计',
            description:'用户界面|原型规划|图形设计',
            profile: drunksweet,
            name:'ciciya',
            pgithublink:'https://github.com/drunksweet',
            skillLevels:{
                'html5': 7,
                'css3': 7,
                'javascript': 7,
                'tailwindcss': 7,
                'git': 5,
                'react': 5,
            },
            content:'无敌了man',
        },
        { title: '前端',
            description:'用户界面|交互设计|数据展示',
            profile:drunksweet,
            name:'焦糖酒',
            skillLevels:{
                '三件套': 7,
                'tailwindcss': 7,
                'git': 8,
                'react': 5,
                'react-native': 2,
            },
            pgithublink:'https://github.com/drunksweet',
            content:'吃不了自律的苦，就要忍受平庸的罪'
        },
        { title: '前端',
            description:'用户界面|交互设计|数据展示',
            profile:shufu,
            name:'束缚',
            skillLevels:{
                'html5': 10,
                'css3': 9,
                'javascript': 7,
                'tailwindcss': 7,
                'git': 5,
                'react': 5,
            },
            pgithublink:'https://github.com/shufufufu',
            content:'无敌了man'
        },
        { title: '后端',
            description:'数据处理|主机管理|接口开发',
            profile:eastsun,
            name:'东方的太阳',
            skillLevels:{
                'html5': 7,
                'css3': 7,
                'javascript': 7,
                'tailwindcss': 7,
                'git': 5,
                'react': 5,
            },
            pgithublink:'https://github.com/peteriswhat',
            content:'无敌了man'
        },
    ]

    const handleExpand = useCallback((index) => {
        setExpandedSection(expandedSection === index ? null : index)
    }, [expandedSection])


    return (
        <div className="flex w-full h-[calc(100vh-72px)] justify-center bg-wikiGreen-25 overflow-y-hidden" >
            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    description={section.description}
                    name={section.name}
                    profile={section.profile}
                    pgithublink={section.pgithublink}
                    skillLevels={section.skillLevels}
                    content={section.content}
                    isExpanded={expandedSection === index}
                    onExpand={() => handleExpand(index)}
                />
            ))}
        </div>
    )
}

