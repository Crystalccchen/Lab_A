import React, { Component } from "react";
import style from "./css/newsSearch.module.css";
function NewsSearch(params) {
  return (
    <div className={style.searchWrapper}>
      <form className={style.searchForm} onSubmit={handleSearch}>
        {/* <!-- 關鍵字 --> */}
        <div className={style["form-group"]}>
          <label htmlFor="keyword">關鍵字</label>
          <input type="text" id="keyword" name="keyword" />
        </div>

        {/* <!-- 日期 --> */}
        <div className={style["form-group"]}>
          <label htmlFor="date">日期</label>
          <input type="date" id="date" name="date" />
        </div>

        {/* <!-- 查詢按鈕 --> */}
        <button type="submit" className={style.searchBtn}>
          查詢
        </button>
      </form>

      {/* <!-- 類別下拉選單 --> */}
      <div className={`${style["form-group"]} ${style["full-width"]}`}>
        <label htmlFor="category">全部類別</label>
        <select id="category" name="category">
          <option value="">全部類別</option>
          <option value="dog">狗狗</option>
          <option value="cat">貓咪</option>
          <option value="other">其他</option>
        </select>
      </div>
    </div>
  );
  function handleSearch() {
    // e.preventDefault();
    const keyword = document.getElementById("keyword").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    alert(`搜尋中...\n關鍵字：${keyword}\n日期：${date}\n類別：${category}`);
    // 後續可以用 fetch 串接後端
  }
}

export default NewsSearch;
