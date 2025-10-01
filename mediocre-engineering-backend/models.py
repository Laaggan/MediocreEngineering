from typing import List
from typing import Optional
from sqlalchemy import ForeignKey
from sqlalchemy import create_engine
from sqlalchemy import String, Integer
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship


class Base(DeclarativeBase):
    pass

class InspiringQuote(Base):
    def __init__(self, quote: str):
        self.quote = quote
        self.likes = 0
        self.dislikes = 0

    __tablename__ = "inspiring_quote"
    id: Mapped[int] = mapped_column(primary_key=True)
    quote: Mapped[str] = mapped_column(String(500))
    likes: Mapped[int] = mapped_column(Integer)
    dislikes: Mapped[int] = mapped_column(Integer)
    def __repr__(self) -> str:
        return f"User(id={self.id!r}, quote={self.quote!r}, likes={self.likes!r}), {self.dislikes!r}"

# engine = create_engine("sqlite:////Users/laggan/repos/MediocreEngineering/mediocre-engineering-backend/mediocre_engineering.db", echo=True)
# Base.metadata.create_all(engine)