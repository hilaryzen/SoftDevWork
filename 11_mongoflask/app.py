from flask import Flask, render_template
from flask_pymongo import PyMongo
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/stickySulphur"
mongo = PyMongo(app)

@app.route("/")
def hello_world():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
