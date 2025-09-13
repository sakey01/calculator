import { useState } from "react";
import Button from "./components/button";

export default function App() {
  const [res, setRes] = useState<string>("");

  const calculate = () => {
    try {
      if (res !== "Error") setRes(eval(res).toString());
    } catch {
      if (res.length === 0) return;
      setRes("Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-neutral-900 py-32">
      <div className="flex flex-col min-h-full gap-20 text-white p-4 items-center">
        <div className="flex items-center justify-center text-2xl border tracking-wide border-neutral-400 p-8 w-full">
          {res || "0"}
        </div>
        <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {Array.from({ length: 10 }, (_, num) => (
            <Button
              key={num}
              onClick={() => {
                if (res === "0" && num === 0) return;
                if (res === "0") setRes("");

                setRes((prev) => prev + num.toString());
              }}
            >
              {num.toString()}
            </Button>
          ))}
          {/* Add */}
          <Button onClick={() => setRes((prev) => prev + "+")}>+</Button>

          {/* Minus */}
          <Button onClick={() => setRes((prev) => prev + "-")}>-</Button>

          {/* Multiply */}
          <Button onClick={() => setRes((prev) => prev + "*")}>x</Button>

          {/* Divide */}
          <Button onClick={() => setRes((prev) => prev + "/")}>/</Button>

          {/* Period */}
          <Button onClick={() => setRes((prev) => prev + ".")}>.</Button>

          {/* Equal */}
          <Button onClick={calculate} className="bg-blue-800">
            =
          </Button>

          {/* Clear */}
          <Button onClick={() => setRes("")}>CE</Button>
        </section>
      </div>
    </div>
  );
}
