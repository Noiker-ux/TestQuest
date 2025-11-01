"use client";
import { FilialContext } from "@/providers/filial.provider";
import Select from "@/ui/Select/Select";
import { useContext, useEffect, useRef, useState } from "react";
export default function SideBarSelect() {
  const [filials, setFilials] = useState([]);
  const refFilial = useRef<HTMLSelectElement | null>(null);
  const { setFilialId, setPage } = useContext(FilialContext);

  useEffect(() => {
    const getFilials = async () => {
      try {
        const response = await fetch("https://testjob.checkport.ru/filial/");
        if (!response.ok) throw new Error(`Ошибка сети: ${response.status}`);
        const data = await response.json();

        setFilials(data);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      }
    };

    getFilials();
  }, []);

  const onChangeHandler = () => {
    if (refFilial.current) {
      setFilialId(Number(refFilial.current.value));
      setPage(1);
    }
  };

  return <Select options={filials} onChange={onChangeHandler} ref={refFilial} />;
}
