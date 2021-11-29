import React from "react";
import Lottie from 'react-lottie';
import animationData from '../lotties/self-portrait.json';

export default function About() {


  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">          
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <div className="typewriter">Hi, I'm Sean.</div>
            <br className="hidden lg:inline-block" />I love bringing ideas to life.
          </h1>
          <p className="mb-8 leading-relaxed">
            Breaking my leg inspired me to learn to how to code. Being knocked down gave me experience in dealing with adversity
            & failure. "Failing is essentially irrelevant unless its catastrophic" - Elon Musk 
            </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div>
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
        </div>
      </div>
    </section>
  );
}