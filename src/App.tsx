import { useEffect, useRef, useState } from "react";

export default function App() {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleBlurUsername = () => {
    const value = usernameRef.current?.value;
    if (!value) {
      setUsernameError("Please enter your username");
    } else {
      setUsernameError("");
    }
  };

  const handleBlurEmail = () => {
    const value = emailRef.current?.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("Please enter your email");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleBlurPassword = () => {
    const value = passwordRef.current?.value;
    // Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!value) {
      setPasswordError("Please enter your password");
    } else if (!passwordRegex.test(value)) {
      setPasswordError(
        "Please enter a valid password (at least 8 characters long with at least one uppercase letter, one lowercase letter, and one digit)"
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div>
      <input
        ref={usernameRef}
        type="text"
        placeholder="Username"
        onBlur={handleBlurUsername}
      />
      {usernameError && <div style={{ color: "red" }}>{usernameError}</div>}
      <input
        ref={emailRef}
        type="text"
        placeholder="Email"
        onBlur={handleBlurEmail}
      />
      {emailError && <div style={{ color: "red" }}>{emailError}</div>}
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        onBlur={handleBlurPassword}
      />
      {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
    </div>
  );
}
