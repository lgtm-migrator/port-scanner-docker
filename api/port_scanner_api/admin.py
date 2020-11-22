from django.contrib import admin

# Register your models here.
# todo/admin.py

from django.contrib import admin
from .models import PortScannerDocker # add this

class PortScannerDockerAdmin(admin.ModelAdmin):  # add this
  list_display = ('host', 'startPort', 'endPort') # add this

# Register your models here.
admin.site.register(PortScannerDocker, PortScannerDockerAdmin) # add this