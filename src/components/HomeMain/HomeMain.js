import React from 'react';
import './HomeMain.css';
import kiwiFruit from '../../assets/kiwi_fruit_flat.png'

function HomeMain() {
    return (
        <main>
            <div className="main-wrapper">
                {/* slogan section */}
                <div className="main-logo-slogon-container">
                    <div className="spacer"></div>
                    <div className="main-logo-slogon-content">
                        <div className="main-slogon-container">
                            <div className="main-title">
                                <span className="gradient-text">苌楚KiWi</span>
                            </div>
                            <div className="main-subtitle">
                                <span>大学生同寝室工作室</span>
                            </div>
                            <div className="main-description">
                                <span>写着玩，当练习</span>
                            </div>
                            <div className="start-btn-container">
                                <button className="btn start-btn" onClick={() => window.location.href='team.html'}>开始</button>
                                <button className="btn start-btn" onClick={() => window.location.href='https://github.com/drunksweet/changchu.git'}>源码</button>
                            </div>
                        </div>
                        <div className="main-logo-container">
                            <div className="gradient-logo-bkg"></div>
                            <img className="logo-icon" src={kiwiFruit} alt="kiwi_fruit" />
                        </div>
                    </div>
                    <div className="spacer"></div>
                </div>
                {/* cards section */}
                <div className="main-introduction-cards-container">
                    <div className="spacer"></div>
                    <div className="main-introduction-cards-content">
                        {/* Card 1 */}
                        <div className="introduction-card-content">
                            <div className="introduction-card-title-container">
                                <div className="introduction-card-icon-content">
                                    <p className="introduction-card-icon">⚒️</p>
                                </div>
                                <div className="introduction-card-text-blod-content">
                                    <p className="introduction-card-text-blod">注重基础</p>
                                </div>
                            </div>
                            <div className="introduction-card-text-content">
                                <p className="introduction-card-text-details">专门设立公共的计算机基础线，独立于专业方向的学习。</p>
                            </div>
                        </div>
                        {/* Add additional cards here */}
                        <div className="introduction-card-content">
                            <div className="introduction-card-title-container">
                                <div className="introduction-card-icon-content">
                                    <p className="introduction-card-icon">👍️</p>
                                </div>
                                <div className="introduction-card-text-blod-content">
                                    <p className="introduction-card-text-blod">
                                        与时俱进
                                    </p>
                                </div>
                            </div>
                            <div className="introduction-card-text-content">
                                <p className="introduction-card-text-details">
                                    选用最新的教学材料，每年修订教程，不教过时的内容。
                                </p>
                            </div>
                        </div>

                        <div className="introduction-card-content">
                            <div className="introduction-card-title-container">
                                <div className="introduction-card-icon-content">
                                    <p className="introduction-card-icon">🐣</p>
                                </div>
                                <div className="introduction-card-text-blod-content">
                                    <p className="introduction-card-text-blod">
                                        项目驱动
                                    </p>
                                </div>
                            </div>
                            <div className="introduction-card-text-content">
                                <p className="introduction-card-text-details">
                                    边学边做，通过小项目锻炼能力，增强理解。
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="spacer"></div>
                </div>
            </div>
        </main>
    );
}

export default HomeMain;
