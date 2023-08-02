from django.contrib import admin
from django.urls import path,include
from . views import *
urlpatterns = [
    path("getdata/",Basic.as_view(),name="getdata")
   
]
