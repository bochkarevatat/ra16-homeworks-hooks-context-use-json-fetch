import React from "react";
import useJsonFetch from "./useJsonFetch";

export default function Data() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");
    return (
    <>
      <div className="component">
        <h2>Компонент Data</h2>
        <div>Получение данных: {data.status}</div>
        <div>Загрузка : {loading ? "загрузка..." : "загрузка завершена"}</div>
        <div>Ошибки : {error === null ? "ошибок нет" : { error }}</div>
      </div>
    </>
  );
}