from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/reckoning')
def reckoning():
    return render_template('reckoning.html')

@app.route('/shattered')
def shattered():
    return render_template('shattered.html')

@app.route('/terminus')
def terminus():
    return render_template('terminus.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)