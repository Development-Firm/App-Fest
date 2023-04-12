import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard=( { index, title, icon } ) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn( "right", "spring", index*0.5, 0.75 )}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About=() => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn( "", "", 0.1, 1 )}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]'
      >
        "APPFEST 1.0 is the perfect blend of creativity, technology, and innovation."
        APPFEST 1.0 organized by PUCIT, is a technology-focused event that includes an app development and web development contest, as well as a female coding competition called Code BEES. The event aims to promote technical skills and creativity among students and encourage teamwork and collaboration.
        This contest at APPFest 1.0 challenges participants to create innovative and functional Mobile Applications. Also, the Web Development contest provides participants with an opportunity to demonstrate their skills in designing and developing web applications. And last Code BEES is a female Coding Competition aimed at empowering and encouraging young women to pursue careers in technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map( ( service, index ) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ) )}
      </div>
    </>
  );
};

export default SectionWrapper( About, "about" );
