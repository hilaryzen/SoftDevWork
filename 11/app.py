from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def hello_world():
    print(__name__)
    print(request.headers)
    print(request.method)
    print(request.args)
    print(request.form)
    return render_template("file.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
