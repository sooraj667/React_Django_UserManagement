from rest_framework.serializers import ModelSerializer,Serializer
from .models import UserAccount
from rest_framework import serializers
from rest_framework.validators import ValidationError
from django.contrib.auth import authenticate


class UserAccountSerializer(ModelSerializer):
    class Meta:
        model=UserAccount
        fields= "__all__"








class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        print(data)
        email = data.get("email")
        password = data.get("password")
        if email and password:
            user = authenticate(email=email, password=password)
            if user:
                if not user.is_active:
                    raise serializers.ValidationError('You are not authorized to perform this action')
                else:
                    data['user'] = user
                    
            else:
                raise serializers.ValidationError('Invalid username or password')
        else:
            raise serializers.ValidationError('Email and Password are required')
        return data
            
    class Meta:
        model = UserAccount
        fields = ["email", "password"]