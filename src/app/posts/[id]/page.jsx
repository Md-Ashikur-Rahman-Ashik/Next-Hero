import React from "react";

// const getDetails = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await res.json();
//   return data;
// };

export const generateMetaData = async ({ params }) => {
  return {
    title: `Post Details ${params.id}`,
  };
};

const page = async ({ params }) => {
  // const { title, body } = await getDetails(params.id);

  return (
    <div className="card card-compact container rounded-xl mx-auto">
      <h2 className="text-6xl font-bold text-center mb-6 flex justify-center">
        {/* Title: {title} */}
      </h2>
      <h2 className="text-3xl text-center flex justify-center">
        {/* Description: {body} */}
      </h2>
    </div>
  );
};

export default page;
