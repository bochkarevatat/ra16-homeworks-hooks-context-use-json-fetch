import React from "react";
import useJsonFetch from "./useJsonFetch";

export default function Error() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");
  return (
    <>
      <div className="component">
        <h2>Компонент Error</h2>
        <div>Получение данных: {data.status === '' || 'данных нет'}</div>
        <div>Загрузка: {loading ? "загрузка..." : "загрузка завершена"}</div>
        <div>Ошибки: {error === null ? "ошибок нет" : error}</div>
      </div>
    </>
  );
}