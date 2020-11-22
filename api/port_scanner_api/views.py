from django.shortcuts import render

# Create your views here.
# port_scanner_api/views.py

from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import PortScannerDockerSerializer      # add this
from .models import PortScannerDocker                     # add this

class PortScannerDockerView(viewsets.ModelViewSet):       # add this
  serializer_class = PortScannerDockerSerializer          # add this
  queryset = PortScannerDocker.objects.all()              # add this