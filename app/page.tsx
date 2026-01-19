import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Link href={"/ts-belt"}>ts-belt 페이지로 이동</Link>
      </div>

      <div>리베이스 테스트 해보기</div>

      <p>리베이스 어려움</p>
    </div>
  );
}
