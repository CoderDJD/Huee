export default function Bottom({ user }: Props) {
  return (
    <div className="flex inset-x-0 justify-around items-center bottom-0 w-full h-7 border-t border-primary-700 undefined">
      <article className="flex cursor-pointer"></article>
      <article className="flex cursor-pointer"></article>
      <article className="flex cursor-pointer"></article>
    </div>
  );
}

interface Props {
  user: object;
}
