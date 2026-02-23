from services.groq_client import call_llm

def compliance_tool(context):
    prompt = f"""
    Check compliance risks in:
    {context}

    Return any regulatory concerns.
    """
    return call_llm(prompt)
