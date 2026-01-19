import dayjs from "dayjs";
import Link from "next/link";

export default function Home() {
  const orderDue = {
    day: 1,
    hour: 16,
    minute: 0,
  };

  const now = dayjs();
  const formatOrderDue = dayjs().hour(orderDue.hour).minute(orderDue.minute);

  const diffMinut = formatOrderDue.diff(now, "minute");
  const hours = Math.floor(diffMinut / 60);
  const minutes = formatOrderDue.diff(now, "minute") - hours * 60;

  return (
    <div className="flex flex-col gap-4">
      <span>
        {hours}시간 {minutes}분 내 결제시
      </span>
      <span></span>

      <div className="flex flex-col gap-4">
        <Link href={"/ts-belt"}>ts-belt</Link>
      </div>
    </div>
  );
}
