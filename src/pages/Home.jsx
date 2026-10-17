import React from 'react';
import ProjectDB from './../data/projects/ProjectDB';
import { ShowMore } from '../components/global';

const Home = () => {
    const latest = ProjectDB[ProjectDB.length - 1];
    const latestItem = latest.lists ? latest.lists[0] : latest;

    return (
        <div className="bg-textGray bg-opacity-10  dark:bg-maxDark w-full h-full p-6 rounded-lg">
            <div className="text-lg dark:text-textLight ">Добро пожаловать в</div>
            <div className="font-h1font text-4xl mb-4 dark:text-maxLight ">Портфолио моих сайтов</div>
            <div className="mb-6 dark:text-textLight ">
                Здесь собраны сайты, которые я разработал для клиентов. Каждый можно посмотреть вживую — выберите сайт слева, и он откроется в окне предпросмотра, либо перейдите на сам сайт.
            </div>
            <div className="font-h1font text-3xl mb-4 dark:text-maxLight text-center  ">Последний проект </div>
            <div className='flex justify-center' >
                <div className="flex flex-col space-y-4">
                    <div className="p-4 bg-maxLight shadow-md dark:bg-minDark  rounded-2xl max-w-80 xl:w-96 w-full  ">
                        <h3 className="text-xl mb-3 dark:text-minGray font-semibold">{latestItem.title}</h3>
                        <ShowMore className={`text-sm dark:text-textGray w-full m-1 `} maxWords={20} text={`${latestItem.overview}`} />
                        <div className='flex justify-end' ><a href={latestItem.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block w-full md:w-fit text-center bg-green rounded-lg px-2 py-2 text-sm scale-100 transition-all duration-300  self-end hover:scale-110" > Открыть сайт </a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
