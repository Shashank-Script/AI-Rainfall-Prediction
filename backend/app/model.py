from pathlib import Path
import joblib

MODEL_PATH = Path(__file__).parent.parent / "rainfall_model.pkl"

model = None


def load_model():
    global model

    if model is None:
        model = joblib.load(MODEL_PATH)

    return model