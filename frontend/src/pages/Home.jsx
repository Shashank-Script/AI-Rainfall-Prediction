import { useState } from "react";

import api from "../services/api";

import Header from "../components/Header";
import InputField from "../components/InputField";
import PredictionCard from "../components/PredictionCard";

const initialValues = {
  pressure: "",
  dewpoint: "",
  humidity: "",
  cloud: "",
  sunshine: "",
  winddirection: "",
  windspeed: "",
};

const fields = [
  {
    label: "Pressure",
    name: "pressure",
  },
  {
    label: "Dew Point",
    name: "dewpoint",
  },
  {
    label: "Humidity",
    name: "humidity",
  },
  {
    label: "Cloud Cover",
    name: "cloud",
  },
  {
    label: "Sunshine",
    name: "sunshine",
  },
  {
    label: "Wind Direction",
    name: "winddirection",
  },
  {
    label: "Wind Speed",
    name: "windspeed",
  },
];

export default function Home() {
  const [formData, setFormData] = useState(initialValues);

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setResult(null);

    try {
      const response = await api.post("/predict", {
        pressure: Number(formData.pressure),
        dewpoint: Number(formData.dewpoint),
        humidity: Number(formData.humidity),
        cloud: Number(formData.cloud),
        sunshine: Number(formData.sunshine),
        winddirection: Number(formData.winddirection),
        windspeed: Number(formData.windspeed),
      });

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the backend server.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialValues);
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-10 px-4">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl md:p-10">
        <Header />

        <form onSubmit={handleSubmit}>
          <h2 className="mb-6 text-2xl font-semibold text-slate-800">
            Weather Parameters
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {fields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 cursor-pointer rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {loading ? "Predicting..." : "Predict Rainfall"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex-1 cursor-pointer rounded-xl bg-slate-600 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Reset
            </button>
          </div>
        </form>

        {result && (
          <PredictionCard
            prediction={result.prediction}
            confidence={result.confidence}
            formData={formData}
          />
        )}

        <footer className="mt-10 border-t pt-6 text-center text-sm text-slate-500">
          <p className="mt-2">
            Developed By Shashank & It's Team
          </p>

          <p className="mt-1">
            Final Year Major Project
          </p>
        </footer>
      </div>
    </main>
  );
}