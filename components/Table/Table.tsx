"use client";
import DeleteTrashIcon from "@/public/deleteTrash.svg";
import AnalyticIcon from "@/public/analytic.svg";
import EditPenIcon from "@/public/editPen.svg";
import { useContext, useEffect, useState } from "react";
import { FilialContext } from "@/providers/filial.provider";
import React from "react";
export default function Table({ filters }: { filters: { name: string } }) {
  const { filialId, page, setMaxPages } = useContext(FilialContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://testjob.checkport.ru/filial/${filialId}/menu/?limit=2&page=${page}&name=${filters.name}`
        );
        if (!response.ok) throw new Error(`Ошибка сети: ${response.status}`);
        if (response.status == 204) {
          setData([]);
          return;
        }
        const data = await response.json();
        setData(data);
        setMaxPages(data.max_pages);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };
    getData();
  }, [filialId, page, filters]);

  return (
    <div className="w-full grid grid-cols-7 gap-3 text-[var(--foreign)] text-lg mt-5">
      {data.data ? (
        data.data.map((item) => (
          <React.Fragment key={item.id}>
            <p>{item.name}</p>
            <p>{item.filial.name}</p>
            <p>{item.tt.name}</p>
            <p>{item.active ? "Активно" : "Не активно"}</p>
            <p>{item.export.join(", ")}</p>
            <div className="col-span-2 flex justify-end items-center gap-7">
              <AnalyticIcon />
              <EditPenIcon />
              <DeleteTrashIcon />
            </div>
          </React.Fragment>
        ))
      ) : (
        <div className="col-span-7 text-3xl text-center">Данные отсутствуют :(</div>
      )}
    </div>
  );
}
