import './App.css';

function App() {
  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input
              type="text"
              name="username"
              placeholder="ユーザー名"
              // value={formValues.username}
              // onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <p className="errorMsg">{formErros.username}</p> */}
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              name="mailAddress"
              placeholder="メールアドレス"
              // value={formValues.mailAddress}
              // onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <p className="errorMsg">{formErros.mailAddress}</p> */}

          <div className="formField">
            <label>パスワード</label>
            <input
              type="text"
              name="password"
              placeholder="パスワード"
              // value={formValues.password}
              // onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <p className="errorMsg">{formErros.password}</p> */}
          <button className="submitButton">登録</button>
          {/* {Object.keys(formErros).length === 0 && isSubmit && (
            <div className="msgOk">ログインに成功しました</div>
          )} */}
        </div>
      </form>
    </div>
  );
}

export default App;
