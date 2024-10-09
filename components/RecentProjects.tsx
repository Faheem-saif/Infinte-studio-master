"use client"; // Add this line at the top

import { projects } from '@/data';
import React, { useEffect, useState } from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

// Define the type for each project
type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

const RecentProjects = () => {
  // Define the state with the correct type (Project[])
  const [clientProjects, setClientProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Set the projects state only on the client side
    setClientProjects(projects);
  }, []);

  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small Selection of {''}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {clientProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={title} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className='z-10 absolute bottom-0' />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Our Work</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
