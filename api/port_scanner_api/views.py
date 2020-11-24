from django.shortcuts import render

# Create your views here.
# port_scanner_api/views.py

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PortScannerDockerSerializer
from .models import PortScannerDocker
import socket
import threading


class PortScannerDockerView(viewsets.ModelViewSet):
    #serializer_class = PortScannerDockerSerializer
    #queryset = PortScannerDocker.objects.all()
    def portscan(port):
      target = "github.com"
      s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
      s.settimeout(0.5)# 
      try:
        con = s.connect((target,port))
        print('Port :',port,"is open.")
        con.close()
      except: 
        pass
    r = 1 
    for x in range(1,1080): 
      t = threading.Thread(target=portscan,kwargs={'port':r}) 
      r += 1     
      t.start()