from fastapi import FastAPI
from ariadne import load_schema_from_path
schema = load_schema_from_path("schema.graphql")
app = FastAPI()

@app.get("/")
async def root():
  return {"message": "Hello World! 🌏"}
