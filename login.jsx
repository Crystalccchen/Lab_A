import style from "./css/login.module.css";
import React, { useEffect } from "react";
function Login(params) {
  useEffect(() => {
    const myLogin = document.getElementById("myLogin");
    const myRegister = document.getElementById("myRegister");
    const myForgetPwd = document.getElementById("myForgetPwd");
    const myMailVerify = document.getElementById("myMailVerify");
    const myNewPwd = document.getElementById("myNewPwd");

    var btn = document.getElementById("myBtn");
    btn.onclick = function () {
      myLogin.style.display = "block";
    };

    const closeButtons = document.querySelectorAll(`.${style["close"]}`);
    const closeTargets = [
      myLogin,
      myRegister,
      myForgetPwd,
      myMailVerify,
      myNewPwd,
    ];

    closeButtons.forEach((close) => {
      close.addEventListener("click", () => {
        closeTargets.forEach((element) => {
          if (element) {
            element.style.display = "none";
          }
        });
      });
    });

    window.addEventListener("click", (event) => {
      [myLogin, myRegister, myForgetPwd, myMailVerify, myNewPwd].forEach(
        (modal) => {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        }
      );
    });

    var gotoRegister = document.getElementById("gotoRegister");
    gotoRegister.onclick = function () {
      myRegister.style.display = "block";
      myLogin.style.display = "none";
    };

    var btnregister = document.getElementById("btnregister");
    btnregister.onclick = function () {
      alert("註冊成功!");
      myRegister.style.display = "none";
    };

    var gotoForgetPwd = document.getElementById("gotoForgetPwd");
    gotoForgetPwd.onclick = function () {
      myForgetPwd.style.display = "block";
      myLogin.style.display = "none";
    };

    var btnForgetPwd = document.getElementById("btnForgetPwd");
    btnForgetPwd.onclick = () => {
      myMailVerify.style.display = "block";
      myForgetPwd.style.display = "none";
    };

    var btnMailVerify = document.getElementById("btnMailVerify");
    btnMailVerify.onclick = () => {
      myNewPwd.style.display = "block";
      myMailVerify.style.display = "none";
    };

    var btnNewPwd = document.getElementById("btnNewPwd");
    btnNewPwd.onclick = () => {
      alert("更改成功");
      myNewPwd.style.display = "none";
    };

    // 記得清理 event listener，避免記憶體洩漏
    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <button id="myBtn">Open Modal</button>

      {/* <!-- login --> */}
      <div id="myLogin" className={style["login"]}>
        {/* <!-- login content --> */}
        <div className={style["login-content"]}>
          <img src="/images/Group 405.png" className={style["close"]} />
          <p>會員登入</p>
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder="電子信箱" />

          <label htmlFor="pwd"></label>
          <input type="password" id="pwd" name="pwd" placeholder="會員密碼" />

          <button id="btnlogin" type="button">
            登入
          </button>

          <div className={style["link-group"]}>
            <a id="gotoForgetPwd">忘記密碼？</a>
            <span className={style["divider"]}>|</span>
            <a id="gotoRegister">立即註冊</a>
          </div>
        </div>
      </div>

      {/* <!-- register --> */}
      <div id="myRegister" className={style["register"]}>
        {/* <!-- register content --> */}
        <div className={style["register-content"]}>
          <img src="/images/Group 405.png" className={style["close"]} />

          <p>會員註冊</p>

          <label htmlFor="name"></label>
          <input type="text" id="rname" name="name" placeholder="會員姓名" />

          <label htmlFor="email"></label>
          <input type="email" id="remail" name="email" placeholder="電子信箱" />

          <label htmlFor="pwd"></label>
          <input type="password" id="rpwd" name="pwd" placeholder="會員密碼" />

          <label htmlFor="bd"></label>
          <input type="date" id="bd" name="bd" placeholder="出生日期" />

          <label htmlFor="phone"></label>
          <input type="phone" id="phone" name="phone" placeholder="手機號碼" />

          <button id="btnregister" type="button">
            註冊
          </button>
        </div>
      </div>

      {/* <!-- forget pwd --> */}
      <div id="myForgetPwd" className={style["forgetPwd"]}>
        {/* <!-- forget pwd content --> */}
        <div className={style["forgetPwd-content"]}>
          <img src="/images/Group 405.png" className={style["close"]} />
          <p>忘記密碼?</p>
          <p>請輸入您的電子郵件，我們將會寄送一封包含驗證碼的信件給您。</p>
          <label htmlFor="email"></label>
          <input type="email" id="femail" name="email" placeholder="電子信箱" />
          <button id="btnForgetPwd" type="button">
            確認
          </button>
        </div>
      </div>

      {/* <!-- mail verify --> */}
      <div id="myMailVerify" className={style["mailVerify"]}>
        {/* <!-- mail verify content --> */}
        <div className={style["mailVerify-content"]}>
          <img src="/images/Group 405.png" className={style["close"]} />
          <p>信箱驗證</p>

          <label htmlFor="number"></label>
          <input
            type="number"
            id="vcode"
            name="number"
            placeholder="請輸入驗證碼"
          />
          <button id="btnMailVerify" type="button">
            送出
          </button>
        </div>
      </div>

      {/* <!-- newPwd --> */}
      <div id="myNewPwd" className={style["newPwd"]}>
        {/* <!-- newPwd content --> */}
        <div className={style["newPwd-content"]}>
          <img src="/images/Group 405.png" className={style["close"]} />
          <p>更改密碼</p>
          <label htmlFor="npwd"></label>
          <input
            type="password"
            id="npwd"
            name="npwd"
            placeholder="請輸入新密碼"
          />

          <label htmlFor="confirmPwd"></label>
          <input
            type="password"
            id="confirmPwd"
            name="confirmPwd"
            placeholder="請再次輸入新密碼"
          />

          <button id="btnNewPwd" type="button">
            確認
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
