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
	if "name" in request.args:
		if request.args['name'] == 'hillary':
			if request.args['password'] == 'moody':
				session["username"] = "hillary"
				return redirect("/welcome")
			else:
				return redirect("/login")
		else:
			return redirect("/login")
	else:
		session.pop("username", None)
		return redirect("/welcome")

@app.route("/welcome")
def welcome():
	if "username" in session:
		if session['username'] == "hillary":
			return render_template("welcome.html", uname = session["username"])
		else:
			return "You're not supposed to be here"
	return "no one is logged in go away"

if __name__ == "__main__":
    app.debug = True
    app.run()
