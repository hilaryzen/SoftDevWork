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

if __name__ == "__main__":
    app.debug = True
    app.run()
