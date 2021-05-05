import { AiOutlineSearch } from "react-icons/ai";

export default function Top({ user }) {
  return (
    <div className="flex w-full h-8 p-3 justify-between items-center outline-none">
      <button className="focus:outline-none focus:ring focus:border-gray-100">
        <article className="relative inline-block w-5 h-5">
          <img
            src={user.photoURL}
            alt="your-dp"
            className="w-full h-full rounded-full"
          />
        </article>
      </button>
      <button className="focus:outline-none focus:ring focus:border-gray-100">
        <AiOutlineSearch className="text-white w-5 h-5" />
      </button>
    </div>
  );
}
