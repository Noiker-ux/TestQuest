"use client";
import { FilialContext } from "@/providers/filial.provider";
import ArrowPagination from "@/public/arrowPagination.svg";
import { useContext, useEffect, useState } from "react";
export default function Pagination() {
  const { page, maxPages, setPage } = useContext(FilialContext);
  const [pagination, setPagination] = useState({
    hasPreviousPage: false,
    hasNextPage: false,
  });

  useEffect(() => {
    const getInfo = () => {
      const hasPaginationPages = {
        hasPreviousPage: page > 1,
        hasNextPage: page < maxPages,
      };
      setPagination(hasPaginationPages);
    };
    getInfo();
  }, [page, maxPages]);

  return (
    <div>
      <ul className="flex items-center gap-7">
        <li>
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <ArrowPagination />
          </button>
        </li>
        {page !== 1 && page - 1 !== 1 && <li> 1</li>}
        {page !== 1 && page - 1 !== 1 && <li>...</li>}

        {pagination.hasPreviousPage && (
          <li>
            <button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              {page - 1}
            </button>
          </li>
        )}
        <li className="shadow p-3">{page}</li>
        {pagination.hasNextPage && (
          <li>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {page + 1}
            </button>
          </li>
        )}

        {page !== maxPages && page + 1 !== maxPages && <li>...</li>}
        {page !== maxPages && page + 1 !== maxPages && <li> {maxPages}</li>}

        <li>
          <button
            disabled={page === maxPages}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <ArrowPagination
              className="rotate-180 hover:fill-red-100
            00"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
