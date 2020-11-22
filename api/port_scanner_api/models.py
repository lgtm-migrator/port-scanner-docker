from django.db import models
# Create your models here.

# add this
class PortScannerDocker(models.Model):
  host = models.CharField(max_length=120)
  startPort = models.TextField()
  endPort = models.TextField()

  def _str_(self):
    return self.host
