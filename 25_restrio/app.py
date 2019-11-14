from flask import Flask, render_template
from urllib.request import urlopen
import json
app = Flask(__name__)

@app.route('/')
def root():
    return render_template('home.html')

@app.route('/loripsum')
def loripsum():
    u = urlopen('https://loripsum.net/api/1/verylong/plaintext')
    response = u.read()
    #data = json.loads(response)
    return render_template('index.html', text = response)

@app.route('/nhl')
def nhl():
    u = urlopen('https://statsapi.web.nhl.com/api/v1/teams?teamId=4,5,6')
    response = u.read()
    data = json.loads(response)
    teamNames = []
    teamList = data["teams"]
    for t in teamList:
        teamNames.append(t["name"])
    return render_template('nhl.html', teams = teamNames)

@app.route('/quote')
def quote():
    u = urlopen('http://quotes.rest/qod.json')
    response = u.read()
    data = json.loads(response)
    quote = data["contents"]["quotes"][0]["quote"]
    author = data["contents"]["quotes"][0]["author"]
    return render_template('quote.html', quote = quote, author = author)

if __name__ == "__main__":
    app.debug = True
    app.run()
