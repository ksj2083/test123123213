import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [seller, setSeller] = useState(false);
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "nickName":
        setNickName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(value);
        if (password !== passwordConfirm) {
        }
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
    }
  };

  const sellerHandler = () => {
    setSeller((prev) => !prev);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      navigate("/");
    } catch (error) {}
  };

  const checked = (event: React.MouseEvent<HTMLButtonElement>) => {
    const name = (event.target as HTMLButtonElement).name;
    if (name === "email") {
    } else if (name === "nickName") {
    }
  };

  return (
    <div className="flex flex-col justify-center mx-auto w-60">
      <p className="flex justify-center text-4xl">회원가입</p>
      <form className="flex flex-col mt-10" onSubmit={(e) => onSubmit(e)}>
        <div className="flex relative w-full">
          <input
            className="p-2 w-full"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => onChange(e)}
          />
          <button
            className="absolute left-full w-24 ml-2 p-2 rounded text-white bg-indigo-500"
            name="email"
            onClick={(e) => checked(e)}
          >
            중복확인
          </button>
        </div>
        <div className="flex relative mt-2 w-full">
          <input
            className="p-2 w-full"
            name="nickName"
            type="text"
            placeholder="Nick Name"
            required
            value={nickName}
            onChange={(e) => onChange(e)}
          />
          <button
            className="absolute left-full w-24 ml-2 p-2 rounded text-white bg-indigo-500"
            name="nickName"
            onClick={(e) => checked(e)}
          >
            중복확인
          </button>
        </div>
        <input
          className="mt-2 p-2"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => onChange(e)}
        />
        <input
          className="mt-2 p-2"
          name="passwordConfirm"
          type="password"
          placeholder="Password Confirm"
          required
          value={passwordConfirm}
          onChange={(e) => onChange(e)}
        />
        <input
          className="mt-2 p-2"
          name="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          required
          value={phoneNumber}
          onChange={(e) => onChange(e)}
          pattern="[0,1]{3}-[0-9]{4}-[0-9]{4}"
        />
        <label className="mt-2">
          <input
            className="mr-2"
            type="radio"
            name="seller"
            checked={seller}
            onClick={sellerHandler}
          />
          판매자로 가입
        </label>
        <div>
          <p className="absolute mt-0.5 text-sm text-red-500">
            * 판매자 가입은 승인까지 2~3일 정도 소요 됩니다.
          </p>
        </div>
        <input
          className="mt-10 p-1.5 text-white cursor-pointer bg-indigo-500"
          type="submit"
          value="Join"
        />
      </form>
    </div>
  );
}
