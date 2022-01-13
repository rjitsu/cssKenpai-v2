import React from "react";
import Link from "next/dist/client/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Post from "../components/Post";

const Archive = ({ posts }) => {
  return (
    <div>
      <button className="m-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-yellow-300  group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          <Link href="/">Go back</Link>
        </span>
      </button>
      <h1 className="font-bold text-6xl mt-12 ml-24">All posts</h1>
      <div className="grid grid-cols-2 ">
        {JSON.parse(posts).map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Archive;

export async function getStaticProps() {
  //get files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  //get slug anf front-matter from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
}
