import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const navigate=useNavigate();
  return (
    <section className={`relative w-full h-screen mx-auto `} style={{ alignItems: 'center' }}>
      <div
        className={`absolute inset-0 top-[120px] max-w-5xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-30 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <span className='text-[#915EFF]'>App Fest'23</span>
          </h1>
          <p className={`${styles.heroSubText}  text-white-100`}>
            March 28, 2023 <br className='sm:block hidden' />
            Punjab University College of Information Technology
          </p>
          <div>
            <CountdownTimer targetDate={"27 April, 2023"} />
          </div>
        </div>
      </div>


      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a> */}
        <button className='w-[200px] font-bold h-[60px] text-[20px] bg-[#915EFF] hover:bg-[#6825f7] text-white' onClick={() => navigate( '/register' )} >Register now</button>
      </div>
    </section>
  );
};

export default Hero;
