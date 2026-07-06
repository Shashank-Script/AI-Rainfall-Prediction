from fastapi import APIRouter

from app.predictor import predict_rainfall
from app.schemas import RainfallRequest, RainfallResponse

router = APIRouter()


@router.post("/predict", response_model=RainfallResponse)
def predict(data: RainfallRequest):
    result = predict_rainfall(data)

    return RainfallResponse(**result)