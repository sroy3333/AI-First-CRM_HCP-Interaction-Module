import json
from services.groq_client import call_llm
from app.database import SessionLocal
from models.interaction import Interaction
from models.interaction_history import InteractionHistory


def edit_interaction_tool(interaction_id: int, user_input: str):

    db = SessionLocal()
    interaction = db.query(Interaction).filter(Interaction.id == interaction_id).first()

    if not interaction:
        return {"error": "Interaction not found"}

    current_data = {
        "interaction_type": interaction.interaction_type,
        "sentiment": interaction.sentiment,
        "topics_discussed": interaction.topics_discussed,
        "materials_shared": interaction.materials_shared,
        "samples_distributed": interaction.samples_distributed,
        "outcomes": interaction.outcomes,
        "follow_up": interaction.follow_up
    }

    prompt = f"""
    Current interaction data:
    {current_data}

    Update only the fields mentioned in:
    "{user_input}"

    Return updated JSON.
    """

    updated_json = call_llm(prompt)
    updated_data = json.loads(updated_json)

    # Save history
    history = InteractionHistory(
        interaction_id=interaction.id,
        previous_data=current_data,
        updated_data=updated_data
    )
    db.add(history)

    # Apply updates
    for key, value in updated_data.items():
        setattr(interaction, key, value)

    db.commit()

    return updated_data

