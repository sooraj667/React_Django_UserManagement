from django.shortcuts import render
from django.views import View 
from django.http import JsonResponse
from rest_framework.response import Response 
from rest_framework.views import APIView
from .models import UserAccount
from .serializers import UserAccountSerializer
# Create your views here.

class Basic(APIView):

    def get(self,request):
        allusers=UserAccount.objects.all()

        serialized=UserAccountSerializer(allusers,many=True)

       
        return Response(serialized.data)
