// import { postsData } from "@/services/postAPI";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Posts | Next Hero",
  description: "Posts Page",
};

const page = async () => {
  // const postData = await postsData();

  return (
    <div className="card card-compact container rounded-xl mx-auto">
      <h2 className="font-bold text-6xl flex justify-center mb-4">All Posts</h2>
      <div className="grid grid-cols-4 gap-6">
        {/* {postData?.slice(0, 20)?.map((post) => (
          <div key={post.id} className="border-2 border-blue-100 p-6">
            <h6 className="text-center font-bold mb-4">{post.title}</h6>
            <h6 className="mb-4">{post.body}</h6>
            <div className="flex justify-center border-2 rounded-xl text-blue-500">
              <button>
                <Link href={`/posts/${post.id}`}>See Details</Link>
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default page;
