export default function PredictionCard({
  prediction,
  confidence,
  formData,
}) {
  const isRain = prediction.includes("Rain");

  return (
    <div
      className={`mt-10 rounded-2xl shadow-md border p-6 ${
        isRain
          ? "bg-green-50 border-green-200"
          : "bg-red-50 border-red-200"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        Prediction Result
      </h2>

      <div className="flex items-center gap-3 mb-5">
        <span className="text-4xl">
          {isRain ? "🌧️" : "☀️"}
        </span>

        <div>
          <p className="text-xl font-semibold">
            {prediction}
          </p>

          <p className="text-slate-600">
            Model Confidence
          </p>
        </div>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
        <div
          className={`h-3 rounded-full ${
            isRain
              ? "bg-green-500"
              : "bg-red-500"
          }`}
          style={{
            width: `${confidence}%`,
          }}
        />
      </div>

      <p className="font-semibold mb-8">
        {confidence}%
      </p>

      <hr className="mb-6" />

      <h3 className="font-bold text-lg mb-4">
        Submitted Values
      </h3>

      <div className="grid grid-cols-2 gap-4 text-sm">

        <div>
          <p className="text-slate-500">Pressure</p>
          <p>{formData.pressure}</p>
        </div>

        <div>
          <p className="text-slate-500">Dew Point</p>
          <p>{formData.dewpoint}</p>
        </div>

        <div>
          <p className="text-slate-500">Humidity</p>
          <p>{formData.humidity}</p>
        </div>

        <div>
          <p className="text-slate-500">Cloud</p>
          <p>{formData.cloud}</p>
        </div>

        <div>
          <p className="text-slate-500">Sunshine</p>
          <p>{formData.sunshine}</p>
        </div>

        <div>
          <p className="text-slate-500">Wind Direction</p>
          <p>{formData.winddirection}</p>
        </div>

        <div>
          <p className="text-slate-500">Wind Speed</p>
          <p>{formData.windspeed}</p>
        </div>

      </div>
    </div>
  );
}