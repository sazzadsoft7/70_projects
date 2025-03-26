from flask import Flask, render_template
import requests

app = Flask(__name__)

# ✅ Free API (https://www.football-data.org/) থেকে লাইভ স্কোর আনবে
API_URL = "https://api.football-data.org/v4/matches"
HEADERS = {"X-Auth-Token": "94f571375f9f40f08807c33a9c37a463"}  # এখানে তোমার API Key বসাও

@app.route('/')
def index():
    try:
        response = requests.get(API_URL, headers=HEADERS)
        data = response.json()
        matches = data.get("matches", [])
    except Exception as e:
        matches = []
        print("Error fetching data:", e)

    return render_template("index.html", matches=matches)

if __name__ == "__main__":
    app.run(debug=True)
