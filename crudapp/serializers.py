from .models import *
from rest_framework import serializers

class PersonSerializer(serializers.ModelSerializer):

    class Meta:

        model=Persons
        fields="__all__"