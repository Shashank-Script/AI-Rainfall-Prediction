from pydantic import BaseModel


class RainfallRequest(BaseModel):
    pressure: float
    dewpoint: float
    humidity: float
    cloud: float
    sunshine: float
    winddirection: float
    windspeed: float


class RainfallResponse(BaseModel):
    prediction: str
    prediction_code: int
    confidence: float