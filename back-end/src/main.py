from fastapi import FastAPI

app = FastAPI()

# To run: uvicorn main:app --reload

@app.get("/")
async def root():
    return {"message": "Hello World"}