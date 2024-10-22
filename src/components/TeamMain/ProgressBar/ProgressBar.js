import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Component({skill,level}) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const Progress = level*10;
        setProgress(Progress)
    }, [level])

    return (
        <div className="flex flex-col w-full max-w-md mx-auto p-4">
            <div className="justify-items-start">
                <h3 className='text-base md:text-xl uppercase me-2'>{skill}</h3>
            </div>
            <div className="w-full h-6 bg-wikiGreenBrown-200 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-wikiGreenBrown-250 to-wikiBrown-650"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>
            <p className="text-center mt-2">进度: {progress}%</p>
        </div>
    )
}