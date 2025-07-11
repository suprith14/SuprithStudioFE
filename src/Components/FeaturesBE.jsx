import React from 'react';
import { FeaturesListBE } from '../Utilis/FeaturesList';


const FeaturesBE = () => {
  return (
    <div className='my-2 w-full md:w-96'>
    <div className="text-center flex text-2xl bg-blue-500 font-bold rounded-t justify-around font-serif">Features BE <div className='text-[0.75rem] rounded animate-headerClrChange'>New</div></div>
    <div className="h-40 overflow-hidden border rounded-b bg-white shadow-lg">
      <div className="animate-verticalScroll flex flex-col gap-2 items-center">
        {/* Repeat stack twice for infinite scroll illusion */}
        {FeaturesListBE.concat(FeaturesListBE).map((tech, index) => (
          <div key={index} className="text-sm font-medium text-gray-800  bg-blue-300 border rounded min-w-min py-1 px-1 hover:animate-spin  hover:bg-blue-700">
            {tech}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeaturesBE;
