from flask import Flask, render_template
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
    fname = "Lamar"
    lname = "Alexander"
    # find_one returns a dict instead of a cursor object
    senator = mongo.db.senators.find_one({"person.firstname": fname, "person.lastname": lname})
    return render_template("results.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
