import bcrypt from "bcryptjs";

// salt + hash password
export function saltAndHashPassword(password: string): string {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

// DB에 있는 비밀번호 vs 입력받은 비밀번호
export function comparePassword(
  password: string,
  hashedPassword: string
): boolean {
   const actualHashed =
    typeof hashedPassword === "string"
      ? hashedPassword
      : JSON.stringify(hashedPassword);
      console.log("🧪 comparePassword called");
      console.log("👉 password:", password);
      console.log("👉 hashedPassword:", hashedPassword);
      console.log("👉 typeof hashedPassword:", typeof hashedPassword);
  try {
    return bcrypt.compareSync(password, actualHashed);
  } catch (err) {
    console.error("🔥 bcrypt.compareSync 실패:", err);
    return false; // 실패 시 false 리턴으로 진행 흐름 유지
  }
  //return bcrypt.compareSync(password, hashedPassword);
}
