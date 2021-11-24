import Link from "next/link";
import { motion } from "framer-motion";

export default function Project({ project }) {
  const delay = (project.id - 1) / 8;
  return (
    <Link href="./projects/[id]" key={project} as={`../projects/${project.id}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: delay }}
        className="h-full sm:h-auto flex"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-lg w-full p-1 cursor-pointer sm:p-2 flex sm:block bg-gray-800"
        >
          <div
            className="relative overflow-hidden group w-2/5 h-auto sm:w-full sm:h-40 
      rounded-lg"
          >
            <img
              src={`../images/${project.card_image}.jpg`}
              alt="project image"
              className="object-cover absolute object-left-top h-full w-full sm:relative"
            />
          </div>
          <div className="w-3/5 sm:w-full flex flex-col justify-between my-4 sm:my-0 mx-2 sm:mx-0">
            <h3 className="font-bold text-lg sm:text-xl text-center my-2 sm:my-2 text-green-400">
              {project.title}
            </h3>
            <div className="text-center">
              {project.technologies.map((tech) => (
                <p
                  key={project.title + tech}
                  className="text-gray-100 text-sm sm:text-lg inline-block m-1"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
