from flask import Flask, render_template
import urllib3
import json
app = Flask(__name__)

@app.route('/')
def root():
    #u = urllib3.urlopen('https://api.nasa.gov/planetary/apod?api_key=YVy9nl7xhIehzBa5bmvN5X5Lt8uWfUnlwrvzbb2e')
    #response = u.read()
    http = urllib3.PoolManager()
    response = http.request('GET', 'https://api.nasa.gov/planetary/apod?api_key=YVy9nl7xhIehzBa5bmvN5X5Lt8uWfUnlwrvzbb2e')
    #data = json.loads(response)
    json.loads(response.data)
    return render_template('index.html', pic = data[url])

if __name__ == "__main__":
    app.debug = True
    app.run()
