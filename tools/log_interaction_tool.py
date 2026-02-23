import json
from datetime import datetime
from services.groq_client import call_llm
from app.database import SessionLocal
from models.hcp import HCP
from models.interaction import Interaction


def log_interaction_tool(user_input: str):

    prompt = f"""
    Extract structured CRM interaction data from:
    "{user_input}"

    Return ONLY valid JSON.
    Do not include explanation.
    Do not include backticks.
    Do not include text outside JSON.

    Return exactly this structure:

    {{
        "hcp_name": "",
        "interaction_type": "",
        "interaction_date": "YYYY-MM-DD",
        "interaction_time": "HH:MM:SS",
        "attendees": "",
        "topics_discussed": "",
        "materials_shared": "",
        "samples_distributed": "",
        "sentiment": "",
        "outcomes": "",
        "follow_up": ""
    }}
    """

    structured = call_llm(prompt)
    print("LLM RESPONSE:", structured)
    data = json.loads(structured)

    db = SessionLocal()

    # Check if HCP exists
    hcp = db.query(HCP).filter(HCP.name == data["hcp_name"]).first()

    if not hcp:
        hcp = HCP(name=data["hcp_name"])
        db.add(hcp)
        db.commit()
        db.refresh(hcp)

    interaction = Interaction(
        hcp_id=hcp.id,
        interaction_type=data.get("interaction_type"),
        interaction_date=datetime.strptime(data["interaction_date"], "%Y-%m-%d").date(),
        interaction_time=datetime.strptime(data["interaction_time"], "%H:%M:%S").time()
        if data.get("interaction_time") else None,
        attendees=data.get("attendees"),
        topics_discussed=data.get("topics_discussed"),
        materials_shared=data.get("materials_shared"),
        samples_distributed=data.get("samples_distributed"),
        sentiment=data.get("sentiment"),
        outcomes=data.get("outcomes"),
        follow_up=data.get("follow_up"),
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return data
