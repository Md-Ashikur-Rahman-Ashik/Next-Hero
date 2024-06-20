import Link from "next/link";
import React from "react";

const AboutContents = () => {
  return (
    <div className="flex gap-4 text-6xl font-bold">
      <Link
        className="border-8 border-blue-100 p-2 rounded-xl"
        href={"/about/history"}
      >
        History
      </Link>
      <Link
        className="border-8 border-blue-100 p-2 rounded-xl"
        href={"/about/mission"}
      >
        Mission
      </Link>
    </div>
  );
};

export default AboutContents;
