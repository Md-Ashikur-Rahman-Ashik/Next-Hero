"use client";
import { signOut, useSession } from "next-auth/react";
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
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    router.push("/api/auth/signin");
  };

  const signUpHandler = () => {
    router.push("/api/auth/signup");
  };

  // if (pathName.includes("dashboard")) {
  //   return (
  //     <div className="bg-blue-100 flex justify-center p-6">
  //       Dashboard Layout
  //     </div>
  //   );
  // }

  return (
    <div className="mb-10">
      <nav className="px-6 py-4 bg-blue-50 flex justify-center gap-20 items-center">
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
          {session?.data?.user && (
            <Image
              src={"https://picsum.photos/200/300"}
              height={0}
              width={30}
              alt=""
              className="rounded-full"
            ></Image>
          )}
          <h6 className="font-bold">{session?.data?.user?.name}</h6>
          <h6 className="capitalize text-cyan-600 border-2 rounded-xl p-2">
            {session?.data?.user?.type}
          </h6>
        </div>
        {!session?.data?.user ? (
          <div className="flex gap-4">
            <button
              onClick={handler}
              className="bg-white text-cyan-500 font-bold p-2 rounded-xl"
            >
              Login
            </button>
            <button
              onClick={signUpHandler}
              className="bg-white text-cyan-500 font-bold p-2 rounded-xl"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-white text-cyan-500 font-bold p-2 rounded-xl"
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
