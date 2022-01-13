import Link from "next/link";
import moment from "moment";

function Post({ post }) {
  return (
    <div className="border border-blue-400 rounded-md p-8  transition-colors ease-in-out delay-150  bg-blue-600 hover:bg-white text-white hover:text-blue-600 m-8 ml-20">
      <h1 className="text-4xl font-bold">{post.frontMatter.title}</h1>
      <h3 className="text-2xl">
        {post.frontMatter.date}
        {/* {moment(post.frontMatter.date, "yyyy-mm-dd").format("DD-mm-yyyy")} */}
      </h3>
      <p className="mt-8 text-xl">
        {post.frontMatter.excerpt}
        <Link href={`/blog/${post.slug}`}>
          <a className="font-bold ml-2">Read more</a>
        </Link>
      </p>
    </div>
  );
}

export default Post;
