import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`blue-text-gradient ${styles.sectionHeadText}`}>About me</h2>
      </motion.div>
      <div className="xl:mt-6 xl:flex-row flex-col-reverse flex gap-10  overflow-hidden">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a junior web developer, I am deeply dedicated to the intersection
          of creative coding and technology. My commitment lies in harmonizing
          technical expertise with design sensibilities, aiming to architect
          seamless digital solutions. I approach my work with a fervent
          dedication to ongoing learning, constantly immersing myself in the
          latest creative technologies and design paradigms. <br></br>I aspire
          to humbly grow and evolve as a developer
          <br></br>
          <br></br>I am looking for new tasks or projects that will help me
          improve and learn more in the field of web development. I want to keep
          getting better at what I do by facing new challenges and learning new
          things in this ever-changing area of work.
        </motion.p>
        <Tilt
          className="flex items-center justify-center"
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          perspective={900}
          scale={1.1}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <img src={profile} className="h-max w-2/3" alt="pic" />
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
  