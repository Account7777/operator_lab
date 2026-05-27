scores = [85, 87, 90, 94, 88]
# Calculate average
avg = sum(scores) / len(scores)
# Conditional Logic
for score in scores:
    result = "Meeting Expectations" if score > avg else "Needs Improvement"
    print(f"Average: {avg}, Score: {score} - {result}")
