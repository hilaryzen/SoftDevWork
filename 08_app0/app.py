from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    return "no hablo queso!"

@app.route("/french")
def hello_france():
    print(__name__)
    return "je ne parle pas de fromage!"

@app.route("/italian")
def hello_italy():
    print(__name__)
    return "non parlo di formaggio!"

if __name__ == "__main__":
    app.debug = True
    app.run()
