import "tailwindcss/tailwind.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <div>
      <main>
        <div className="hero w-64 pt-32 transform translate-x-44  translate-y-10 pb-0 m-12">
          <div className="text-6xl font-bold">CSS Kenpai</div>
          <hr className="h-0.5 bg-black mt-4 ml-8" />
          <p className="alt-font text-4xl float-right">A CSS Blog for nerds</p>
        </div>

        <svg
          viewBox="0 0 1633 491"
          className="illustration transform scale-125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.2045 383.658C171.475 322.3 299.352 306.598 432.834 336.554C566.317 366.51 694.193 350.809 816.464 289.45C938.734 228.092 1066.61 212.391 1200.09 242.347C1333.58 272.302 1461.45 256.601 1583.72 195.243"
            stroke="#7CC850"
            strokeWidth="218"
          />
          <path
            d="M1011.02 29.4009L1033.37 69.7385L983.264 66.2347L1011.02 29.4009Z"
            fill="#E0D5D5"
          />
          <rect
            x="984.453"
            y="65.2084"
            width="49"
            height="58"
            transform="rotate(4 984.453 65.2084)"
            fill="#C4C4C4"
          />
          <path
            d="M1061.05 34.0655L1084.62 74.2425L1033.38 70.5577L1011.05 29.1916L1061.05 34.0655Z"
            fill="#D3AEAE"
          />
          <rect
            x="1033.29"
            y="69.3198"
            width="47"
            height="57.305"
            transform="rotate(4 1033.29 69.3198)"
            fill="#B5ACAC"
          />
          <rect
            x="997.314"
            y="97.2405"
            width="15"
            height="26"
            transform="rotate(4 997.314 97.2405)"
            fill="#F7E5E5"
          />
        </svg>
        <h1 className="font-bold text-6xl mt-12 ml-24">Latest posts</h1>
        <div className="">
          {JSON.parse(posts)
            .slice(0, 2)
            .map((post, index) => {
              return <Post post={post} key={index} />;
            })}
        </div>
      </main>
    </div>
  );
}

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
