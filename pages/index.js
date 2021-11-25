import { motion } from "framer-motion";
import InfoName from "../components/infoName";
import InfoJob from "../components/infoJob";
import Head from "next/head";

export default function Home() {
  return (
    <main
      className="pt-10 sm:pt-16 grid grid-rows-2 sm:flex h-screen
     bg-gray-900 px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      <Head>
        <title>Leonardo Portfolio</title>
        <meta
          name="description"
          content="Jr Frontend portfolio, navigation, home, projects, contact"
        />
      </Head>
      <section className="items-center flex w-full sm:w-1/2 h-full">
        <div className="text-center sm:text-left w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-green-400
           "
          >
            Frontend
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-green-400
          sm:text-right mt-2 mb-10 sm:mt-5 sm:mb-12"
          >
            Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center text-xs sm:text-xl text-gray-300"
          >
            coding beautiful and simple things
          </motion.p>
        </div>
      </section>
      <section className="flex items-start sm:items-center w-full sm:w-1/2">
        <div className="sm:text-left sm:px-6 md:px-10 lg:px-16 w-full">
          <motion.div
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeOut",
            }}
            className="flex justify-center sm:justify-start"
          >
            <InfoName name="Leonardo" lastname="Machado" />
          </motion.div>
          <motion.div
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 1.1,
              ease: "easeOut",
            }}
            className="flex justify-center sm:justify-end mt-6"
          >
            <InfoJob job={"Frontend Dev"} company={""} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
