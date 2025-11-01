import SideBarMenu from "./SideBarMenu/SideBarMenu";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import SideBarSelect from "./SideBarSelect/SideBarSelect";

export default async function SideBar() {
  return (
    <div className="max-w-[270px] w-full  pr-3 h-full ">
      <SideBarHeader />
      <div className="mt-4 overflow-y-scroll ">
        <SideBarSelect />
        <div className="w-full h-0.5 bg-[var(--foreground)] mt-[10px]"></div>
        <SideBarMenu />
      </div>
    </div>
  );
}
