import { projects } from "../../data";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Link from "next/link";

export default function Id({ project }) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0.8]);
  const Pos = useTransform(scrollYProgress, [0, 1], [0, -150]);
  return (
    <div
      className="flex-col h-auto min-h-screen text-white text-center align-center
     bg-gray-900 overflow-hidden"
    >
      <motion.h1
        style={{ scale: scale }}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
        mt-28 sm:mt-36 md:mt-40 mb-4 text-green-400"
      >
        {project.title}
      </motion.h1>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full h-40 sm:h-52 md:h-60 lg:h-80 overflow-hidden"
      >
        <a href={project.link} target="_blank">
          <motion.img
            className="object-contain sm:object-cover object-left-top cursor-pointer"
            src={`../../images/${project.card_image}.jpg`}
            style={{ y: Pos }}
          />
        </a>
      </motion.div>
      <div className="py-6 flex flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-1/3 flex items-center justify-center"
        >
          <a href={project.link} target="_blank">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={`../images/${project.phone_image}.jpeg`}
              alt=""
              className="h-44 sm:h-60 md:h-64 lg:h-96 cursor-pointer
            object-contain object-left-top rounded-lg shadow-lg"
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className=" w-2/3 flex flex-col justify-between py-8 md:py-14 lg:py-20"
        >
          <div className="w-full flex justify-center">
            <p className="max-w-sm sm:max-w-lg px-2 text-center justify-center text-sm sm:text-base md:text-lg">
              {project.description}
            </p>
          </div>
          <div className="flex justify-center ">
            {project.technologies.map((tech) => (
              <p
                key={project.title + tech}
                className="text-gray-100 text-sm sm:text-lg m-1 
                rounded-md px-2 py-1"
              >
                {tech}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const getServerSideProps = (context) => {
  const id = context.query.id;
  return { props: { project: projects[parseInt(id) - 1] } };
};
