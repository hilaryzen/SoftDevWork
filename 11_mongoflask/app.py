from flask import Flask, render_template
from flask_pymongo import PyMongo
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/stickySulphur"
mongo = PyMongo(app)

@app.route("/")
def hello_world():
    fname = "Lamar"
    lname = "Alexander"
    senator = mongo.db.senators.find({"person.firstname": fname, "person.lastname": lname})
    return render_template("home.html", result = senator["description"])

if __name__ == "__main__":
    app.debug = True
    app.run()
