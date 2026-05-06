scores = [85, 87, 90, 94, 88]
# Calculate average
avg = sum(scores) / len(scores)
# Conditional Logic
result =  "Meeting Expectations" if avg > 95 else "Needs Improvement"
print(f"Average: {avg} - {result}")
