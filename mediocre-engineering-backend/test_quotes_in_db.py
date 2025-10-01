from models import InspiringQuote
from sqlalchemy import create_engine
from sqlalchemy import select
from sqlalchemy.orm import Session

CONNECTION_STRING = "sqlite:////Users/laggan/repos/MediocreEngineering/mediocre-engineering-backend/mediocre_engineering.db"
engine = create_engine(CONNECTION_STRING, echo=True)
session = Session(engine)

stmt = select(InspiringQuote)

for inspiring_quote in session.scalars(stmt):
    print(inspiring_quote)

