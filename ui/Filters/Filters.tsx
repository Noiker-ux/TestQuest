"use client";
import { useRef, useState } from "react";
import Select from "../Select/Select";
import Table from "@/components/Table/Table";

export default function Filters() {
  const refSelect = useRef(null);
  const [name, setName] = useState("");

  return (
    <>
      <div className="grid grid-cols-7 gap-3 border-b border-[var(--foreground)] pb-5 items-end">
        <input
          type="text"
          className="border border-[var(--foreground)] p-2 rounded-lg"
          placeholder="Название меню"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <input type="text" className="border border-[var(--foreground)] p-2 rounded-lg" placeholder="Филиал" />
        <input type="text" className="border border-[var(--foreground)] p-2 rounded-lg" placeholder="Торговая точка" />
        <Select
          ref={refSelect}
          options={[
            { id: 1, name: "Активно" },
            { id: 2, name: "Не активно" },
          ]}
          onChange={() => {}}
        />
        <p className="text-lg text-[var(--secondary)]">Экспорт</p>
      </div>

      <Table filters={{ name: name }} />
    </>
  );
}
