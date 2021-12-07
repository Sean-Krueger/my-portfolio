import React from "react";
import { TerminalIcon, BookOpenIcon } from "@heroicons/react/solid";
import {blogs} from "../data"

export default function Blog() {
  {console.log(blogs)}
  return (
    <section id="blog">
      <div className="container px-5 py-10 mx-auto text-center">
        <BookOpenIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
         Blog Posts
        </h1>
        
          <div>
            {blogs.map((blog) => (
              <div className="border-2 m-3 p-4">
              <a
              href={blog.url}
              key={blog.image}
              className="sm:w-1/2 w-50 p-4"
              >
              <h1 className = "sm:text-2xl text-3xl font-medium title-font text-white mb-12"> {blog.name} </h1>
                <img
                  alt="blogs"
                  className = "object-contain h-48 w-full"
                  src={blog.image}
                />
            </a>
            </div>
            ))}
          </div>
        
        
        </div>
    </section>
  );
}