import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Github } from 'lucide-react';
import eastsun from '../../assets/profilePhoto/eastSun.jpg';


const Section = React.memo(({ title, profile, name, pgithublink, content, isExpanded, onExpand}) => (
    <motion.div
        className={`transition-all ${
            isExpanded ? 'w-9/10' : 'w-1/3'
        } h-screen grid ${isExpanded ? 'grid-cols-2' : 'grid-cols-1'} items-start justify-center cursor-pointer border-2 relative overflow-hidden bg-[--main-bkg]`}
        onClick={onExpand}
        layout
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
    >
        <motion.div
            className={`col-start-1 row-start-1 w-full h-full order-1 flex-col border-2`}
            layout
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
            <div className="bg-amber-200">
                <button className="w-12 h-8 rotate-6 bg-amber-200 ">
                <a href={pgithublink} className="">
                        <Github className="w-4 h-4 mr-2" />
                        <span>Github</span>
                    </a>
                </button>
            </div>
        </motion.div>

        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full text-center px-4 col-start-1 row-span-1 order-2 border-2"
                >
                    {content}
                </motion.div>
            )}
        </AnimatePresence>

        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full text-center col-start-2 row-start-1 row-span-3 order-3 border-2"
                >
                    {content}
                </motion.div>
            )}
        </AnimatePresence>

        <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 right-4"
            animate={{ rotate: isExpanded ? 180 : 0 }}
        >
            {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </motion.div>
    </motion.div>
))

export default function TeamMain(props) {
    const [expandedSection, setExpandedSection] = useState(null)

    const sections = [
        { title: '前端',profile:eastsun,name:'东方的太阳',pgithublink:'https://github.com/drunksweet',content:'无敌了man'},
        { title: '前端',profile:eastsun,name:'东方的太阳',pgithublink:'https://github.com/drunksweet',content:'无敌了man'},
        { title: '后端',profile:eastsun,name:'东方的太阳',pgithublink:'https://github.com/drunksweet',content:'无敌了man'},
    ]

    const handleExpand = useCallback((index) => {
        setExpandedSection(expandedSection === index ? null : index)
    }, [expandedSection])


    return (
        <div className="flex w-full h-screen bg-gray-100">
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

