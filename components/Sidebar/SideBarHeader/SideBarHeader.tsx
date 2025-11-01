import Logo from "@/public/logo.svg";
import Docs from "@/public/docs.svg";
export default function SideBarHeader() {
  return (
    <div className="flex flex-col gap-2 px-3 py-1 shadow text-lg">
      <div className="flex gap-4 items-center ">
        <Logo width={42} height={42} />
        <div>
          <p>НАЗВАНИЕ ФИРМЫ</p>
          <p className="text-[var(--secondary)] -mt-2">Лоскутникова В.П.</p>
        </div>
      </div>
      <div className="w-full bg-[var(--foreground)] h-0.5"></div>
      <div className="flex items-center gap-2">
        <Docs width={42} height={42} />
        <p>СКЛАДСКОЙ УЧЁТ</p>
      </div>
    </div>
  );
}
