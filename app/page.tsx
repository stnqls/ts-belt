import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Link href={"/ts-belt"}>ts-belt 페이지로 이동</Link>
      </div>
      <p>김선호</p>
      <p>고윤정</p>
      <div>잘어울린당 우왕</div>
    </div>
  );
}
