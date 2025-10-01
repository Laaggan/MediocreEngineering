from typing import Union
from models import InspiringQuote
from sqlalchemy import create_engine
from sqlalchemy import select
from sqlalchemy.orm import Session
from fastapi import FastAPI
import random
from view_models import InspiringQuoteVM
from models import InspiringQuote

app = FastAPI()
CONNECTION_STRING = "sqlite:////Users/laggan/repos/MediocreEngineering/mediocre-engineering-backend/mediocre_engineering.db"
engine = create_engine(CONNECTION_STRING, echo=True)

@app.get("/")
def read_root():
    return {"Hello": "World"}


# @app.get("/quotes/{item_id}")
# def read_item(item_id: int):
#     return {"item_id": item_id, "q": q}

@app.get("/quotes/random")
def get_random_item():
    session = Session(engine)
    random_id = random.randint(1, 91)
    stmt = (select(InspiringQuote).where(InspiringQuote.id == random_id))
    quote = session.scalars(stmt).one()
    return quote

@app.post("/quotes")
def create_item(inspiring_quote: InspiringQuoteVM):
    with Session(engine) as session:
        new_quote = InspiringQuote(inspiring_quote.quote)
        session.add(new_quote)
        session.commit()