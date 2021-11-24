import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";
import { server } from "../config";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { motion } from "framer-motion";

export default function Contact({ service, template, user }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(service, template, templateParams, user);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className="pt-16 flex-col min-h-screen text-center align-center
     bg-gray-900 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      <div className=" my-6 sm:my-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
           text-green-400 my-6"
        >
          Want to work together?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-300 text-base sm:text-xl"
        >
          send me an e-mail
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-center"
      >
        <div className="w-full sm:w-10/12 md:w-9/12">
          <form
            action="#"
            className="rounded-lg border-2 border-green-400 py-4 px-4 sm:py-6 sm:px-8"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className=" flex-col sm:grid sm:grid-cols-2">
              <div className="sm:mr-2 mb-2 sm:mb-4 ">
                <div className="flex h-9 w-full items-center  text-sm sm:text-base rounded-lg border-2 border-green-400">
                  <FiUser className="w-2/12 flex text-center text-green-400" />
                  <input
                    type="text"
                    className="flex w-10/12  text-gray-300 border-none bg-transparent outline-none"
                    placeholder="Name"
                    name="name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Required",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <span className="text-red-600 text-xs lg:text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="mb-2 sm:mb-4">
                <div className="flex h-9 w-full items-center  text-sm sm:text-base rounded-lg border-2 border-green-400">
                  <FiMail className="w-2/12 flex text-center text-green-400" />
                  <input
                    type="text"
                    placeholder="Email"
                    className="flex w-10/12 text-gray-300 border-none bg-transparent outline-none"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600 text-xs lg:text-sm">
                    Invalid email
                  </span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <div className="w-full rounded-lg  text-sm sm:text-base border-2 border-green-400">
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="flex w-full px-2 py-2 text-gray-300 border-none bg-transparent outline-none"
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                />
              </div>
              {errors.message && (
                <span className="text-red-600 text-xs lg:text-sm">
                  Please enter a message
                </span>
              )}
            </div>
            <button
              type="submit"
              className="text-gray-300 text-sm sm:text-base px-4 sm:px-6 py-1 rounded-lg border-2 border-green-400"
              id="btn-up"
            >
              Send
            </button>
          </form>
        </div>
        <ToastContainer />
      </motion.div>
      <div
        className="flex items-center py-6 text-gray-300
       text-2xl sm:text-3xl justify-center"
      >
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          href="https://github.com/LeonardoSanx"
          target="_blank"
        >
          <AiFillGithub className="mx-3 hover:text-green-400" />
        </motion.a>
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.7 }}
          href="https://www.linkedin.com/in/leonardo-sanches-machado-870827191/"
          target="_blank"
        >
          <BsLinkedin className="mx-3 hover:text-green-400" />
        </motion.a>
        {/* <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          href="/"
        >
          <FiMail className="mx-3 hover:text-green-400" />
        </motion.a> */}
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
          href={`${server}://wa.me/5521968339123?text=`}
          target="_blank"
        >
          <BsWhatsapp className="mx-3 hover:text-green-400" />
        </motion.a>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const service = process.env.REACT_APP_SERVICE_ID;
  const template = process.env.REACT_APP_TEMPLATE_ID;
  const user = process.env.REACT_APP_USER_ID;

  return {
    props: {
      service,
      template,
      user,
    },
  };
}
