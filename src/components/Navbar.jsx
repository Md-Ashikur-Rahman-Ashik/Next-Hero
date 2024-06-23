"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  const links = [
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
  ];

  const handler = () => {
    router.push("/api/auth/signin");
  };

  if (pathName.includes("dashboard")) {
    return (
      <div className="bg-blue-100 flex justify-center p-6">
        Dashboard Layout
      </div>
    );
  }

  return (
    <div className="mb-10">
      <nav className="px-6 py-4 bg-blue-50 flex justify-between items-center">
        <h6 className="font-bold text-3xl">
          <Link href={"/"}>
            Next <span className="text-cyan-500">Hero</span>
          </Link>
        </h6>
        <ul className="flex justify-between items-center space-x-4">
          {links?.map((link) => (
            <Link
              key={link.title}
              className={`${
                pathName === link.path && "text-cyan-500 font-bold"
              }`}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <Image
            src={"https://picsum.photos/200/300"}
            height={50}
            width={40}
            alt=""
            className="rounded-xl"
          ></Image>
          <h6 className="font-bold">{session?.data?.user?.name}</h6>
          <h6 className="capitalize text-cyan-600 border-2 rounded-xl p-2">
            {session?.data?.user?.type}
          </h6>
        </div>
        {session.status === "authenticated" ? (
          <button
            onClick={handler}
            className="bg-white text-cyan-500 font-bold p-2 rounded-xl"
          >
            Login
          </button>
        ) : (
          <button className="bg-white text-cyan-500 font-bold p-2 rounded-xl">
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
