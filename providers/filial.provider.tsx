"use client";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

export const FilialContext = createContext<IFilialContext>({
  filialId: 1,
  setFilialId: () => {},

  page: 1,
  setPage: () => {},

  maxPages: 1,
  setMaxPages: () => {},
});

export interface IFilialContext {
  filialId: number;
  setFilialId: Dispatch<SetStateAction<number>>;

  page: number;
  setPage: Dispatch<SetStateAction<number>>;

  maxPages: number;
  setMaxPages: Dispatch<SetStateAction<number>>;
}

export const FilialContextProvider = ({ children }: PropsWithChildren) => {
  const [filialId, setFilialId] = useState(1);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  return (
    <FilialContext value={{ filialId, setFilialId, page, setPage, maxPages, setMaxPages }}>{children}</FilialContext>
  );
};
