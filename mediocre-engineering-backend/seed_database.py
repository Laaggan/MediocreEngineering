from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from models import InspiringQuote

CONNECTION_STRING = "sqlite:////Users/laggan/repos/MediocreEngineering/mediocre-engineering-backend/mediocre_engineering.db"
engine = create_engine(CONNECTION_STRING, echo=True)

with Session(engine) as session:
    with open("original_quotes.txt") as file:
        quotes = file.read().split("\n")
    
    db_quotes = []
    for quote in quotes:
        db_quote = InspiringQuote(
            quote
        )
        db_quotes.append(db_quote)
    
    session.add_all(db_quotes)
    session.commit()