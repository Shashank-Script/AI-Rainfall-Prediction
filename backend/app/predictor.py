import pandas as pd

from app.model import load_model
from app.schemas import RainfallRequest


def predict_rainfall(data: RainfallRequest):
    model = load_model()

    input_df = pd.DataFrame(
        [
            {
                "pressure": data.pressure,
                "dewpoint": data.dewpoint,
                "humidity": data.humidity,
                "cloud": data.cloud,
                "sunshine": data.sunshine,
                "winddirection": data.winddirection,
                "windspeed": data.windspeed,
            }
        ]
    )

    prediction = int(model.predict(input_df)[0])

    probabilities = model.predict_proba(input_df)[0]

    confidence = round(float(max(probabilities) * 100), 2)

    prediction_text = (
        "Rain Expected 🌧️"
        if prediction == 1
        else "No Rain Expected ☀️"
    )

    return {
        "prediction": prediction_text,
        "prediction_code": prediction,
        "confidence": confidence,
    }