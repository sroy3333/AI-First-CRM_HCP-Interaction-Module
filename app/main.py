from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.database import SessionLocal, Base, engine
from services.langgraph_agent import build_agent
from models import hcp, interaction, interaction_history

# Create tables automatically (for dev only)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI-First CRM - HCP Module")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

agent = None


# -------------------------
# Startup Event
# -------------------------
@app.on_event("startup")
def startup_event():
    global agent
    agent = build_agent()


# -------------------------
# Request Schema
# -------------------------
class ChatRequest(BaseModel):
    text: str
    interaction_id: int | None = None


# -------------------------
# Chat Endpoint
# -------------------------
@app.post("/chat")
async def chat(request: ChatRequest):

    db = SessionLocal()

    try:
        result = agent.invoke({
            "input": request.text,
            "interaction_id": request.interaction_id,
            "db": db
        })

        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        db.close()
