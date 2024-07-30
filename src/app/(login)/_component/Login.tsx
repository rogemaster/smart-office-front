'use client';

import style from '@/app/(login)/css/login.module.css';

export default function Login() {
  const onLogin = () => {};

  return (
    <div className={style.main}>
      <div className={style.signMessage}>
        <h2>
          스마트한 오피스 생활을 위해 <br /> 로그인을 해주세요!
        </h2>
      </div>
      <div className={style.loginWrapper}>
        <form action="">
          <div>
            <label>ID</label>
            <div style={{ marginTop: '0.5rem' }}>
              <input className={style.loginIdInput} />
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <label>Password</label>
            <div style={{ marginTop: '0.5rem' }}>
              <input className={style.loginIdInput} />
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <button className={style.loginButton} onClick={onLogin}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
