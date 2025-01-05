import React from "react";

const BackendFront = () => {
  return (
    <div className="w-full bg-black border-t-2 border-first flex flex-col justify-center gap-40 p-20 py-64">
      <ul className="flex flex-col gap-6 items-center">
        <li className="text-9xl text-first/80 font-bold pb-10 border-b-2 border-first/40">
          فرانت اند
        </li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">HTML</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">CSS</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">Tailwind CSS</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">JavaScript</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">TypeScript</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">React.js</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">Next.js</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">UI/UX</li>
      </ul>
      <ul className="flex flex-col gap-6 items-center">
        <li className="text-9xl text-first/80 font-bold pb-10 border-b-2 border-first/40">
          بک اند
        </li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">Express.js</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">API نویسی</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">MongoDB</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">MySQL</li>
        <li className="text-5xl text-first/60 font-light tracking-[2rem]">Socket.io</li>
      </ul>
    </div>
  );
};

export default BackendFront;
