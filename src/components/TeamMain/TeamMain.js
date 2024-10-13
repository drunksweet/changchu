import React, { useState } from 'react'

const Section = ({ title, color, isExpanded, onExpand }) => (
    <div
        className={`transition-all duration-1000 transform ${
            isExpanded ? 'w-3/4' : 'flex-1'
        } h-screen flex items-center justify-center cursor-pointer`}
        style={{
            transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 0.55)',
            backgroundColor: color
        }}
        onClick={onExpand}
    >
        <h2 className="text-white text-2xl font-bold">{title}</h2>
    </div>
)

export default function TeamMain(props) {
    const [expandedSection, setExpandedSection] = useState(null)

    const sections = [
        { title: '左侧', color: '#3498db' },
        { title: '中间', color: '#2ecc71' },
        { title: '右侧', color: '#e74c3c' },
    ]

    return (
        <div className="flex w-full h-screen">
            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    color={section.color}
                    isExpanded={expandedSection === index}
                    onExpand={() => setExpandedSection(expandedSection === index ? null : index)}
                />
            ))}
        </div>
    )
}
