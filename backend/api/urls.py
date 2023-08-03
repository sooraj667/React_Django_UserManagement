from django.contrib import admin
from django.urls import path,include
from . views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

    
urlpatterns = [
    path("getdata/",Basic.as_view(),name="getdata"),
    path('settoken/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refreshtoken/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', LoginView.as_view(), name='login_view'),
    path('signup/', SignupView.as_view(), name='signup_view'),
    path("edituser/<int:id>",EdituserView.as_view(),name="edituser_view"),
    path("adminlogin/",AdminLogin.as_view(),name="adminlogin_view"),
    path("admindisplay/",AdminDisplay.as_view(),name="admindisplay_view")

    
   
]
