import { CloudRain } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center mb-10">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <CloudRain className="w-10 h-10 text-blue-600" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-slate-800">
        AI Based Rainfall Prediction
      </h1>

      <p className="mt-3 text-slate-600 text-lg">
        Using Machine Learning
      </p>

    </header>
  );
}