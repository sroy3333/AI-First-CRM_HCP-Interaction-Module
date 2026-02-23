from sqlalchemy import Column, Integer, String, Text, Date, Time, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Interaction(Base):
    __tablename__ = "interaction"

    id = Column(Integer, primary_key=True, index=True)

    hcp_id = Column(Integer, ForeignKey("hcp.id", ondelete="CASCADE"), nullable=False)

    interaction_type = Column(String(50))
    interaction_date = Column(Date, nullable=False)
    interaction_time = Column(Time)

    attendees = Column(Text)
    topics_discussed = Column(Text)
    materials_shared = Column(Text)
    samples_distributed = Column(Text)

    sentiment = Column(String(50))

    outcomes = Column(Text)
    follow_up = Column(Text)

    created_by = Column(String(255))

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
