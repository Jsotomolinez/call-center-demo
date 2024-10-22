import spreadsheets_helper as sp
from fastapi import FastAPI, HTTPException 
from fastapi.middleware.cors import CORSMiddleware
from model.users import UserModel

app = FastAPI()
origins = [
    'http://localhost:5173'
]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_methods = ["*"],
	allow_headers = ["*"]
)

data = sp.get_users(5)
all_users = list()


@app.get("/")
def root():
    return data

@app.get("/api/v1/users", response_model = list[UserModel])
def get_users():
    return data

# Filtrando datos:
@app.get("/api/v1/users/{user_id}", response_model = UserModel)
def get_user(user_id:int) -> dict:
    '''Genera los datos del usuario especificado en la ruta con el identificador user_id'''
    try:
        return sp.get_user(user_id)
    except:
        raise HTTPException(status_code = 404, detail = "User not Found")
    
# @app.post("/api/v1/users", response_model = UserModel)
# def edit_user(data_user: UserModel):
#     new_user = data_user.model_dump()# Para convertir el modelo de Pydantic a un diccionario de python 

# @app.delete("/api/v1/users/{id_user}", response_model = UserModel)
# def delete_user(id_user: int):
#     ...

