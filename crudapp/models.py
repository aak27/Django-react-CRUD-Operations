from django.db import models

# Create your models here.
class Persons(models.Model):

    names=models.CharField(max_length=100,null=True)
    address=models.CharField(max_length=100, null=True)
    phone=models.BigIntegerField(null=True)
    email=models.CharField(max_length=100, null=True)