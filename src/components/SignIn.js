// src/components/SignIn.js
import { useState } from "react";

export default function SignIn({ onLogin }) {
  const [matric, setMatric] = useState("");

  const handleSubmit = () => {
    if (!matric) return alert("Enter your matric number");
    onLogin(matric);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <input
        type="text"
        placeholder="Enter your Matric Number"
        value={matric}
        onChange={(e) => setMatric(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Sign In
      </button>
    </div>
  );
}
