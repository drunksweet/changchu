import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft} from 'lucide-react';
import eastsun from '../../assets/profilePhoto/eastSun.jpg';

import GitHubLink from './GithubLink/GithubLink';

const Section = React.memo(({ title, profile, name, pgithublink, content, isExpanded, onExpand}) => (
    <motion.div
        className={`transition-all ${
            isExpanded ? 'w-7/10' : 'w-3/14'
        } h-screen grid ${isExpanded ? 'grid-cols-2' : 'grid-cols-1'} items-start justify-center cursor-pointer border-2 relative overflow-hidden bg-[--main-bkg]`}
        onClick={onExpand}
        layout
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
    >
        <div className={'col-start-1 row-start-1 h-full items-center'}>
            {/*card1*/}
            <motion.div
                className={`col-start-1 row-start-1 row-span-3 w-full h-full order-1 flex-col border-2 mt-8 md:mt-36`}
                layout
                style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}  // 仅当展开时允许点击
            >
                <h2 className="text-black text-2xl font-bold p-6 border-2">
                    {title}
                </h2>
                <div className="flex items-center justify-center w-full">
                    <motion.img className='block w-32 h-32 rounded-full my-16'
                                src={profile}
                                alt={`${name} profile`}
                                whileHover={{rotate: 360}}
                    />
                </div>
                <h3 className="font-bold text-lg mb-4">
                    {name}
                </h3>
                <div className="mt-4">
                    <GitHubLink href={pgithublink} text={`${name}的GitHub`}/>
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
                        className="w-full h-full text-center px-4 col-start-1 row-span-2 order-2 border-2"
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        {/*card3*/}
        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full text-center col-start-2 row-start-1 row-span-5 order-3 border-2"
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="flex items-center justify-center w-full h-4/5 p-16 bg-gray-500">
                            {content}
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
))

export default function TeamMain(props) {
    const [expandedSection, setExpandedSection] = useState(null)

    const sections = [
        { title: '产品',profile:eastsun,name:'东方的太阳',pgithublink:'https://github.com/drunksweet',content:'无敌了man'},
        { title: '前端',profile:eastsun,name:'焦糖酒',pgithublink:'https://github.com/drunksweet',content:'无敌了man'},
        { title: '前端',profile:eastsun,name:'束缚',pgithublink:'https://github.com/drunksweet',content:'无敌了man'},
        { title: '后端',profile:eastsun,name:'东方的太阳',pgithublink:'https://github.com/drunksweet',content:'无敌了man'},
    ]

    const handleExpand = useCallback((index) => {
        setExpandedSection(expandedSection === index ? null : index)
    }, [expandedSection])


    return (
        <div className="flex w-full h-[calc(100vh-72px)] justify-center bg-[--main-bkg] overflow-y-hidden" >
            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    name={section.name}
                    profile={section.profile}
                    githublink={section.githublink}
                    content={section.content}
                    isExpanded={expandedSection === index}
                    onExpand={() => handleExpand(index)}
                />
            ))}
        </div>
    )
}

