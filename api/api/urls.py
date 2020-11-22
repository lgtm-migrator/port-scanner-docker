# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from port_scanner_api import views                            # add this

router = routers.DefaultRouter()                      # add this
router.register(r'portscannerdocker', views.PortScannerDockerView, 'portscannerdocker')     # add this

urlpatterns = [
    path('admin/', admin.site.urls),         path('api/', include(router.urls))                # add this
]