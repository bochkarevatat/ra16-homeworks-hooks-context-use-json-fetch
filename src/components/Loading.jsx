import React from "react";
import useJsonFetch from "./useJsonFetch";

export default function Loading() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");
  return (
    <>
      <div className="component">
        <h2> Компонент Loading</h2>
        <div>Получение данных: {data.status} </div>
        <div> Загрузка: {loading ? "загрузка..." : "загрузка завершена"} </div>
        <div>
          Ошибки:
          {error === null
            ? " ошибок нет"
            : {
                error,
              }}
        </div>
      </div>
    </>
  );
}