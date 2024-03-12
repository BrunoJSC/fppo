"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <motion.section
      id="projects"
      layoutId="projects"
      className="bg-[#5E5CE6] md:min-h-screen h-auto flex flex-col justify-center items-center space-y-10"
    >
      <div className="flex md:flex-row flex-col justify-around items-center w-full">
        <form className="flex flex-col space-y-5 w-full md:w-[500px] border-4 border-white border-image-repeat p-4">
          <h1 className="text-2xl md:text-4xl text-white">Contact</h1>
          <input
            type="text"
            placeholder="Name"
            className="p-2 border-4 border-white bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-4 border-white bg-transparent"
          />
          <textarea
            placeholder="Message"
            className="p-2 border-4 border-white bg-transparent h-56 md:h-auto resize-none"
          ></textarea>
          <button className="bg-white text-[#5E5CE6] p-2 text-sm md:text-lg">
            Submit
          </button>
        </form>

        <div className="max-w-md flex flex-col space-y-5 md:space-y-9 p-4 text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            perferendis assumenda sunt nobis, quis tenetur voluptatibus maxime
            numquam officia eius odit laudantium nemo veritatis voluptates non
            optio perspiciatis sit cupiditate.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            perferendis assumenda sunt nobis, quis tenetur voluptatibus maxime
            numquam officia eius odit laudantium nemo veritatis voluptates non
            optio perspiciatis sit cupiditate.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            perferendis assumenda sunt nobis, quis tenetur voluptatibus maxime
            numquam officia eius odit laudantium nemo veritatis voluptates non
            optio perspiciatis sit cupiditate.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
