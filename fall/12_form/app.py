#Coby Sontag, Hillary Zen
#SoftDev1 pd 2
#K12 - Echo
#2019-9-26

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    print(request.headers)
    print(request.method)
    #print(request.args) print(request.form)
    return render_template("file.html")

@app.route("/auth")
def authenticate():
    #print(app)
    #print(request)
    #print(request.args)
    return render_template("response.html", name = request.args['name'], method = request.method)


if __name__ == "__main__":
    app.debug = True
    app.run()
