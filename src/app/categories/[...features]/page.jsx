import React from "react";

const page = ({ params }) => {
  if (params.features.length === 3) {
    return (
      <div className="card card-compact container rounded-xl mx-auto max-w-fit">
        <h2 className="font-bold text-6xl capitalize">{params.features[2]}</h2>
      </div>
    );
  } else if (params.features.length === 2) {
    return (
      <div className="card card-compact container rounded-xl mx-auto max-w-fit">
        <h2 className="font-bold text-6xl capitalize">{params.features[1]}</h2>
      </div>
    );
  }

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit">
      <h2 className="font-bold text-6xl">Categories Details Page</h2>
    </div>
  );
};

export default page;
