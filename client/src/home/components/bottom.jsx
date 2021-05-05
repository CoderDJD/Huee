import { AiFillHome, AiFillProject } from "react-icons/ai";
import { IoPeople } from "react-icons/io5";
export default function Bottom({ user }) {
  return (
    <div className="flex inset-x-0 justify-around items-center bottom-0 w-full h-7 border-t border-primary-700 undefined">
      <article className="flex cursor-pointer">
        <AiFillHome className="text-accent w-5 h-5" />
      </article>
      <article className="flex cursor-pointer">
        <AiFillProject className="text-accent w-5 h-5" />
      </article>
      <article className="flex cursor-pointer">
        <IoPeople className="text-accent w-5 h-5" />
      </article>
    </div>
  );
}
