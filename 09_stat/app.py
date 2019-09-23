from flask import Flask, render_template
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

coll = [0, 1, 1, 2, 3, 5, 8]

@app.route("/my_foist_template")
def template():
    print(__name__)
    return render_template("first_template.html", coll = coll)

if __name__ == "__main__":
    app.debug = True
    app.run()
