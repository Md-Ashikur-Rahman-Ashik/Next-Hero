import React from "react";

const page = ({ params }) => {
  return (
    <div className="card card-compact container rounded-xl mx-auto">
      <h2 className="text-6xl font-bold flex justify-center">
        Post Details Of {params.id}
      </h2>
    </div>
  );
};

export default page;
