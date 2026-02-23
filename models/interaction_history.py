from sqlalchemy import Column, Integer, ForeignKey, DateTime, String, JSON
from sqlalchemy.sql import func
from app.database import Base

class InteractionHistory(Base):
    __tablename__ = "interaction_history"

    id = Column(Integer, primary_key=True, index=True)

    interaction_id = Column(Integer, ForeignKey("interaction.id", ondelete="CASCADE"), nullable=False)

    previous_data = Column(JSON, nullable=False)
    updated_data = Column(JSON, nullable=False)

    edited_by = Column(String(255))
    edited_at = Column(DateTime(timezone=True), server_default=func.now())
