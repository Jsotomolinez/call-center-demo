from pydantic import BaseModel

class UserModel(BaseModel):
	
    # phoneNumber: str
    name:  str
    city: str
    state: str
    status: str | None
    notes: str | None
    addres: str
    zip: str
    calls: list[dict]
