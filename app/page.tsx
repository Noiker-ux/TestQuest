import Table from "@/components/Table/Table";
import Filters from "@/ui/Filters/Filters";
import Pagination from "@/ui/Pagination/Pagination";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Filters />
      </div>
      <Pagination />
    </div>
  );
}
