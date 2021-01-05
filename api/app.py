
from flask import Flask, request
from flask_cors import CORS
import socket
app = Flask(__name__)
CORS(app)
# ...


@app.route('/api/portscan', methods=["POST"])
def portscan():
    openedPortsArray = []
    method = request.method
    target = request.json['target']
    startPort = request.json['startPort']
    endPort = request.json['endPort']
    if (method.lower() == "post"):
        for port in range(startPort, endPort):
            try:
                s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                s.settimeout(0.1)
                s.connect((target, port))
                openedPortsArray.append(port)
                s.close()
            except:
                pass
        return {"data": [
            {"openedPorts": openedPortsArray}
        ]}
