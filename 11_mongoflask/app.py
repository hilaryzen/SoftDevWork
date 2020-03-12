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

@app.route("/gender")
def gender():
    name = request.args['gender']
    result = methods.findByGender(name)
    return render_template("results.html", result = result)

@app.route("/party")
def party():
    name = request.args['party']
    result = methods.findByParty(name)
    return render_template("results.html", result = result)

@app.route("/rank")
def rank():
    name = request.args['rank']
    result = methods.findByRank(name)
    return render_template("results.html", result = result)

if __name__ == "__main__":
    app.debug = True
    app.run()
