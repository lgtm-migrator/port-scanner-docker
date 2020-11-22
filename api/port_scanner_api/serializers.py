# todo/serializers.py

from rest_framework import serializers
from .models import PortScannerDocker

class PortScannerDockerSerializer(serializers.ModelSerializer):
  class Meta:
    model = PortScannerDocker
    fields = ('id', 'host', 'startPort', 'endPort')