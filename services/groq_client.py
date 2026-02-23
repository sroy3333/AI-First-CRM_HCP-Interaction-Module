from groq import Groq
from app.config import API_KEY, MODEL_NAME

client = Groq(api_key=API_KEY)
print("API KEY:", API_KEY)

def call_llm(prompt):
    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content
