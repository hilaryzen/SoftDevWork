from flask import Flask, render_template, request
from flask_pymongo import PyMongo
import methods
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/stickySulphur"
mongo = PyMongo(app)

@app.route("/")
def hello_world():
    return render_template("home.html")

@app.route("/name")
def name():
    name = request.args['name']
    result = methods.findByName(name)
    return render_template("results.html", result = result)

if __name__ == "__main__":
    app.debug = True
    app.run()
