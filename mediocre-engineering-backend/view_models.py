from datetime import datetime

from pydantic import BaseModel, PositiveInt

class InspiringQuoteVM(BaseModel):
    id: int | None = None
    created_at: datetime | None = None
    quote: str
    likes: PositiveInt = 0
    dislikes: PositiveInt = 0

# Prints an example
# external_data = {
#     'id': 123,
#     'created_at': '2019-06-01 12:22',
#     'quote': "Vi kom, vi såg, vi gjorde inte så mycket",
#     'likes': 4,
# }

# user = InspiringQuoteVM(**external_data)

# print(user.model_dump())
# print(user.model_dump_json())