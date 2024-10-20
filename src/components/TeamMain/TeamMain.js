import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import eastsun from '../../assets/profilePhoto/eastSun.jpg';
// import logoKiwiBird from '../../assets/logo-kiwi-bird.png';

const Section = React.memo(({ title, profile, name, content, isExpanded, onExpand}) => (
    <motion.div
        className={`transition-all ${
            isExpanded ? 'w-9/10' : 'w-1/3'
        } h-screen grid grid-cols-1 items-start justify-center cursor-pointer border-2 relative overflow-hidden bg-[--main-bkg]`}
        onClick={onExpand}
        layout
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
    >
        <motion.div
            className={`flex flex-col items-center justify-center mt-36`}
            layout
        >
            <h2 className="text-black text-2xl font-bold mb-4 p-6 border-2">
                {title}
            </h2>
            <motion.img className='block w-20 h-20 rounded-full m-4'
                        src={profile}
                        alt={`${name} profile`}
                        whileHover={{ rotate: 360 }}
            />
            <h3 className="font-bold text-lg mb-4">
                {name}
            </h3>
        </motion.div>

        <AnimatePresence>
            {isExpanded && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center px-4"
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
        { title: '前端',profile:eastsun,name:'东方的太阳',content:'youlink'},
        { title: '前端',profile:eastsun,name:'东方的太阳',content:'youlink'},
        { title: '后端',profile:eastsun,name:'东方的太阳',content:'youlink'},
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
                    content={section.content}
                    isExpanded={expandedSection === index}
                    onExpand={() => handleExpand(index)}
                />
            ))}
        </div>
    )
}

