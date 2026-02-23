from services.groq_client import call_llm

def suggest_followup_tool(context):
    prompt = f"""
    Based on interaction:
    {context}

    Suggest 3 professional follow-up actions.
    """
    return call_llm(prompt)
