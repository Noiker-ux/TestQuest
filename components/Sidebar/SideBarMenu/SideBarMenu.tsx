import { menuList } from "@/data/menu.list.data";
import Link from "next/link";

export default function SideBarMenu() {
  return (
    <nav className="text-lg mt-[10px]">
      <ul className="flex flex-col gap-1">
        {menuList.map((menuItem) => (
          <li key={menuItem.title} className="hover:shadow p-1">
            <Link href={menuItem.link} className="w-full">
              - {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
