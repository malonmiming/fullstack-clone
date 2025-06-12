"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { signUp } from "../../actions/auth-actions";
import { redirect } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const result = await signUp({
      email,
      password,
    });
    if (result?.status === "ok") {
      redirect("/signin");
    }

    if (result?.message) {
      alert(result.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4" style={{ 
    background: `linear-gradient(90deg, #fadbfb  20px, transparent 1%) center, 
              linear-gradient(#fadbfb  20px, transparent 1%) center, 
              white`,backgroundSize: '22px 22px'}}>
      <div className="flex flex-col items-center justify-center border-1 border-t-gray-10 bg-white min-w-[400px] min-h-[580px] rounded-xl shadow-xl">
        <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent pb-3">회원가입</h1>
        <p className="text-gray-500 pb-8">인프런에서 다양한 학습의 기회를 얻으세요</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 min-w-[300px]"
        >
          <label htmlFor="email" className="text-xs text-violet-500">이메일</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="example@inflab.com"
            className="bg-gray-100 border-2 border-gray-300 focus:border-blue-500 focus:bg-white rounded-sm p-2"
          />
          <label htmlFor="password" className="text-xs text-violet-500">비밀번호</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            className="bg-gray-100 border-2 border-gray-300 focus:border-blue-500 focus:bg-white rounded-sm p-2"
          />
          <label htmlFor="passwordConfirm" className="text-xs text-violet-500">비밀번호 확인</label>
          <input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호를 입력해주세요"
            className="bg-gray-100 border-2 border-gray-300 focus:border-blue-500 focus:bg-white rounded-sm p-2"
          />

          <button
            type="submit"
            className="bg-violet-500 text-white font-bold border-blue-700 cursor-pointer rounded-sm p-3 text-shadow-xs text-shadow-violet-700 mt-8"
          >
            회원가입
          </button>
          <Link href="/signin"  className="text-center text-violet-500">
            로그인
          </Link>
        </form>
      </div>
    </div>
  );
}