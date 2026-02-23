import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+pymysql://root:Pgoen201gssbr$@localhost:3306/ai_first_crm"
)

API_KEY = os.getenv("API_KEY")
MODEL_NAME = "llama-3.1-8b-instant"
