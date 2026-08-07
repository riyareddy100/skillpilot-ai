from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

courses = [
    {
        "id": 1,
        "title": "React",
        "level": "Beginner",
    },
    {
        "id": 2,
        "title": "Python",
        "level": "Intermediate",
    },
    {
        "id": 3,
        "title": "FastAPI",
        "level": "Beginner",
    },
]


@app.get("/")
def home():
    return {"message": "Welcome to SkillPilot AI Backend!"}


@app.get("/courses")
def get_courses():
    return courses