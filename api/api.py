
from flask import Flask
import socket
import threading
app = Flask(__name__)


@app.route('/time')
def portscan():

    target = "localhost"

    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(0.5)
    try:
        con = s.connect((target, port))
        print('Port :', port, "is open.")
        con.close()
    except:
        pass
        r = 1
        for x in range(1, 1080):
            t = threading.Thread(target=portscan, kwargs={'port': r})
            r += 1
            t.start()
            return 'OK'
