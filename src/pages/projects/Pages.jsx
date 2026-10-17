import React from 'react';
import ProjectDB from '../../data/projects/ProjectDB';
import { useLocation } from 'react-router-dom';
import NavData from '../../components/public/navigation/NavData';
import { CiShare1, CiHeart } from "react-icons/ci";

const Pages = () => {
    const location = useLocation(); // Get the current path

    // Find matching NavData items based on the current path
    const activeNavData = NavData.flatMap(navItem =>
        navItem.subMenu ? navItem.subMenu : []
    ).find(subItem => subItem.link === location.pathname);

    // Filter ProjectDB items that match the active NavData ID
    const matchingProject = ProjectDB.find(
        project => activeNavData && project.idkey === activeNavData.idkey
    );

    return (
        <div className='bg-maxLight dark:bg-maxDark p-6 rounded-xl'>
            {/* Display ProjectDB title if there's a matching ID */}
            {matchingProject ? (
                <div>
                    <div className='md:flex items-center ' >
                        <div className='text-4xl mb-2 font-h1font dark:text-textWhite '>{matchingProject.title}</div>
                        <a href={matchingProject.link} target='_blank' rel="noopener noreferrer" className='bg-green scale-100 text-xs md:text-base hover:scale-110 transition-all  duration-300 cursor-pointer  px-2 py-1 rounded-lg mb-2 md:mb-0 md:ml-6 inline-flex items-center ' >{matchingProject.site}<span className=' text-xs md:text-lg ml-2 flex items-center'>{matchingProject.siteicon}</span> </a>
                    </div>
                    <div className='text-2xl mb-1 font-h1font dark:text-textWhite'>{matchingProject.overviewtitile}</div>
                    <div className='dark:text-textDark font-paragrabhfont '>{matchingProject.overview}</div>
                    <div className='md:flex items-start mt-2 justify-between'>
                        <div className='md:w-1/2 pr-4'>
                            <div className='text-2xl mb-1 font-h1font dark:text-textWhite'>{matchingProject.feauturetitile}</div>
                            <ul>
                                {(matchingProject.feautures ? matchingProject.feautures.split('\n') : []).map((feature, index) => (
                                    <li className='list-disc font-paragrabhfont  dark:text-textDark ml-6' key={index}>{feature.trim()}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:w-1/2 pr-4'>
                            <div className='text-2xl mb-1 font-h1font dark:text-textWhite'>{matchingProject.advantagestitile}</div>
                            <ul>
                                {(matchingProject.advantages ? matchingProject.advantages.split('\n') : []).map((advantage, index) => (
                                    <li className='list-disc font-paragrabhfont  dark:text-textDark ml-6' key={index}>{advantage.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex justify-center mt-6' >
                        <div className='md:w-3/4 rounded-2xl bg-minDarkOP p-3 '>
                            {matchingProject.img ? (
                                <img src={matchingProject.img} alt={matchingProject.title} className=' rounded-xl' />
                            ) : (
                                <div className='w-full rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700'>
                                    <div className='bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-2'>
                                        <span className='w-3 h-3 rounded-full bg-redd inline-block'></span>
                                        <span className='w-3 h-3 rounded-full bg-yelloww inline-block'></span>
                                        <span className='w-3 h-3 rounded-full bg-green inline-block'></span>
                                        <a href={matchingProject.link} target='_blank' rel="noopener noreferrer" className='ml-2 text-xs text-gray-600 dark:text-gray-300 truncate hover:underline'>{matchingProject.link}</a>
                                    </div>
                                    <iframe
                                        src={matchingProject.link}
                                        title={matchingProject.title}
                                        loading="lazy"
                                        className='w-full h-[70vh] bg-white'
                                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='dark:text-textGray'>Раздел пуст — данные для этой страницы ещё не добавлены.</div>
            )}
        </div>
    );
};

export default Pages;
