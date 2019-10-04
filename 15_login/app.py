# Moududur "Moody" Rahman, Hillary Zen
# SoftDev1 pd2
# K10 -- Jinja Tuning
# 2019-09-21





from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import url_for
from flask import session


app = Flask(__name__)
app.secret_key = 'hfjkafhrku'

allpasswords = {"hillary": "moody"}



@app.route("/")
def home():
	print("######")
	if 'username' in session:
		if session['username'] == 'hillary':
			return redirect('/welcome')
	return redirect('/login')


@app.route("/error")
def error():
	return "<a href='/'>ya doofed up <br> welcome to ur error page</a> <br>"

@app.route("/login")
def login():
	return render_template("login.html")

@app.route("/auth")
def auth():
	if request.args['name'] == 'hillary':
		if request.args['password'] == 'moody':
			session["username"] = "hillary"
			return redirect("/welcome")
		else:
			return redirect("/login")
	else:
		return redirect("/login")

@app.route("/welcome")
def welcome():
	if session['username'] == "hillary":
		return "You are hillary"
	else:
		return "You're not supposed to be here"

if __name__ == "__main__":
    app.debug = True
    app.run()
