import pandas as pd
mydataset = [
 {
        "id": 101,
        "name": "Alice Johnson",
        "role": "Lead Engineer",
        "skills": ["Python", "AWS", "Docker"],
        "is_active": True
    },
    {
        "id": 102,
        "name": "Marcus Chen",
        "role": "UX Designer",
        "skills": ["Figma", "CSS", "React"],
        "is_active": True
    },
    {
        "id": 103,
        "name": "Sarah Smith",
        "role": "Data Analyst",
        "skills": ["SQL", "Tableau", "R"],
        "is_active": False
    }
]
pd.DataFrame(mydataset).to_csv('mydataset.csv', index=False)
