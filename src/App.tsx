import { useState } from "react";
import Button from "./components/button";

export default function App() {
  const [res, setRes] = useState<string>("");
  const [isCalc, setIsCalc] = useState<boolean>(false);

  // Evaluates expression
  const calculate = () => {
    try {
      if (res !== "Error") setRes(eval(res).toString());
      setIsCalc(true);
    } catch {
      if (res.length === 0) return;
      setRes("Error");
    }
  };

  const noRepeatOperator = (value: string, operator: string) => {
    if (/[+*/.-]$/.test(value)) return value;

    return value + operator;
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-neutral-900 py-32">
      <div className="flex flex-col min-h-full gap-20 text-white p-4 items-center">
        <div className="flex items-center justify-center text-2xl border tracking-wide border-neutral-400 p-8 w-full">
          {res || "0"}
        </div>
        <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {/* Number list */}
          {Array.from({ length: 10 }, (_, num) => (
            <Button
              key={num}
              onClick={() => {
                if (isCalc) setRes("");
                setIsCalc(false);
                if (res === "0" && num === 0) return;
                if (res === "0") setRes("");

                setRes((prev) => prev + num.toString());
              }}
            >
              {num}
            </Button>
          ))}
          {/* Add */}
          <Button
            onClick={() => {
              if (res.length !== 0) setRes((prev) => noRepeatOperator(prev, "+"));
            }}
          >
            +
          </Button>

          {/* Minus */}
          <Button
            onClick={() => {
              setRes((prev) => noRepeatOperator(prev, "-"));
            }}
          >
            -
          </Button>

          {/* Multiply */}
          <Button
            onClick={() => {
              if (res.length !== 0) setRes((prev) => noRepeatOperator(prev, "*"));
            }}
          >
            x
          </Button>

          {/* Divide */}
          <Button
            onClick={() => {
              if (res.length !== 0) setRes((prev) => noRepeatOperator(prev, "/"));
            }}
          >
            /
          </Button>

          {/* Period */}
          <Button
            onClick={() => {
             setRes((prev) => noRepeatOperator(prev, "."));
            }}
          >
            .
          </Button>

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
