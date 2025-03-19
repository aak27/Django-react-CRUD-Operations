from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class PersonView(APIView):
    
    def post(self,request):

        add_user= PersonSerializer(data=request.data)

        if add_user.is_valid():

            add_user.save()

            return Response("User added successfully")

        return Response(add_user.error())

    def get(self, request):

        get_user=Persons.objects.all()

        get_serializers=PersonSerializer(get_user, many=True).data

        return Response(get_serializers)
    
    def put(self,request,id):

        update_user=Persons.objects.get(id=id)

        update_serializers=PersonSerializer(instance=update_user, data=request.data)

        if update_serializers.is_valid():

            update_serializers.save()

            return Response("Updated Successfully")
        
    def delete(self,request,id):

        delete_user=Persons.objects.get(id=id)

        delete_user.delete()

        return Response("Deleted Successfully")