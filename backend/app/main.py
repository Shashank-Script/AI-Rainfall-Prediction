from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import router
from app.model import load_model


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Loading Rainfall Prediction Model...")

    load_model()

    print("Model Loaded Successfully!")

    yield


app = FastAPI(
    title="AI Rainfall Prediction API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-rainfall-prediction.vercel.app/",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "AI Rainfall Prediction API is running."
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }