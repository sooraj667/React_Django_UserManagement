from django.shortcuts import render
from django.views import View 
from django.http import JsonResponse
from rest_framework.response import Response 
from rest_framework.views import APIView
from .models import UserAccount
from .serializers import UserAccountSerializer,ValidationError
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
# Create your views here.

class Basic(APIView):
    
    # permission_classes = [IsAuthenticated]

    def get(self,request):
        allusers=UserAccount.objects.all()

        serialized=UserAccountSerializer(allusers,many=True)

       
        return Response(serialized.data)
    




# class LoginView(APIView):
#         def post(self,request):
#             # email = request.data.get('email')
#             # password = request.data.get('password')

#             serializer=UserAccountSerializer(data=request.data)


#             try:
#                 serializer.is_valid(raise_exception=True)
#             except ValidationError as e:
#                 return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
#             user = serializer.validated_data['user']
#             serializer = UserAccountSerializer(user)
#             refresh = RefreshToken.for_user(user)
#             return Response({'message': 'Login successful','user':serializer.data, 'access': str(refresh.access_token), 'refresh': str(refresh)})



            # print(serialized.data)
            # user = authenticate(email=email, password=password)
            # if user is None:
            #     return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

            # # if not user.is_staff:
            # #     return Response({'error': 'You are not authorized to perform this action'}, status=status.HTTP_401_UNAUTHORIZED)

            # refresh = RefreshToken.for_user(user)

            # return Response({
            #     'access': str(refresh.access_token),
            #     'refresh': str(refresh),
            # })


class LoginView(APIView):
        def post(self,request):
            email = request.data.get('email')
            password = request.data.get('password')
          
            userobj=UserAccount.objects.get(email=email,password=password)
            if userobj:
               
                refresh = RefreshToken.for_user(userobj)
                serialized=UserAccountSerializer(userobj)
                return Response({'message': 'Login successful', 'access': str(refresh.access_token), 'refresh': str(refresh),"alldatas":serialized.data})
            else:
                return Response({'message': 'Invalid Password'})
                 
                 
                 
                 
                 
                 
                 

            # serializer=UserAccountSerializer(data=request.data)


            # try:
            #     serializer.is_valid(raise_exception=True)
            # except ValidationError as e:
            #     return Response({'message': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
            # user = serializer.validated_data['user']
            # serializer = UserAccountSerializer(user)
            # refresh = RefreshToken.for_user(user)
            # return Response({'message': 'Login successful','user':serializer.data, 'access': str(refresh.access_token), 'refresh': str(refresh)})


class SignupView(APIView):
    def post(self,request):
        name=request.data.get("name")
        email=request.data.get("email")
        password=request.data.get("password")
        phonenumber=request.data.get("phonenumber")
        print(request.data,"allDATAS###################")
        # serialized=UserAccountSerializer(data=request.data)
        # print(serialized,"YYYYYYYYYYYYYYYYYYYYYYY")
    
        UserAccount.objects.create(name=name,email=email,password=password,phonenumber=phonenumber)
        userobj=UserAccount.objects.get(email=email)
        serialized=UserAccountSerializer(userobj)
        return Response(serialized.data)

class EdituserView(APIView):
     def post(self,request,id):
        name=request.data.get("name")
        print(name,"NAMEEEEEEEEEEEE")
        try:
            userobj=UserAccount.objects.get(id=int(id))
        except:
            return Response({"msg":"some error"})
        userobj.name=name
        userobj.save()
        serialized=UserAccountSerializer(userobj)
        return Response(serialized.data)
          




class AdminLogin(APIView):

    def post(self,request):

        email=request.data.get("email")
        password=request.data.get("password")

        try:
            userobj=UserAccount.objects.get(email=email,is_superuser=True)
            if userobj.check_password(password):

                print(userobj,"HHHHHHHHHHHH")
                refresh = RefreshToken.for_user(userobj)
                serialized=UserAccountSerializer(userobj)

                # ALL USERS DATAS
                userobjs=UserAccount.objects.all()
                serializedusers=UserAccountSerializer(userobjs,many=True)


                return Response({'message': 'Login successful', 'access': str(refresh.access_token), 'refresh': str(refresh),"alldatas":serialized.data,"userdatas":serializedusers.data})
        
                
            
            
        
           

        except:
            return Response({"msg":"User Not found"})
        

        

    
class AdminDisplay(APIView):
    def get(self,request):
        # email=request.data.get("email")
        # adminobj=UserAccount.objects.get(email=email)
        # serializedadmin=UserAccountSerializer(adminobj)
        

        userobjs=UserAccount.objects.all()
        serializedusers=UserAccountSerializer(userobjs,many=True)







        return Response({"userdatas":serializedusers.data})



class UploadImage(APIView):
    def post(self,request):
        print("view reached")
        print(request.data.get("imageurl"))
        print(request.data.get("userid"))
        userobj=UserAccount.objects.get(id=request.data.get("userid"))
        print(userobj)
        img=request.data.get("imageurl")
        userobj.image=img
        userobj.save()


        userdatas=UserAccount.objects.get(id=request.data.get("userid"))
        ser=UserAccountSerializer(userdatas)
        return Response({"msg":"success","imageurl":request.data.get("imageurl"),"userdatas":ser.data})
        # print(request.data.get("imageurl"),"   #######")
        # imageurl=request.data.get("imageurl")
        # newimageurl=str(imageurl)
        # print(imageurl + "IMAGE")
        # id=request.data.get("userid")
        # print(id)

        # userobj=UserAccount.objects.get(id=int(id))
        # userobj.image=newimageurl
        # print(userobj )
        # userobj.save()
        # print(userobj )
        # return Response({"msg":"success","userobj":userobj})


    
class Adminedituser(APIView):
    def put(self,request):
     
        

        userid=request.data.get("id")
        name=request.data.get("name")
        email=request.data.get("email")
        phonenumber=request.data.get("phonenumber")







        userobj=UserAccount.objects.get(id=userid)
        userobj.email=email
        userobj.name=name
        userobj.phonenumber=phonenumber
        userobj.save()


        allusers=UserAccount.objects.all()
        serializedusers=UserAccountSerializer(allusers,many=True)


        return Response({"userdatas":serializedusers.data})
    
class Admindeleteuser(APIView):
    def post(self,request,id):
        print("view reached")
        print(id,"PRINTTTTTTTTTTTTTTTT")
        userobj=UserAccount.objects.get(id=id)
        userobj.delete()
                # userid=request.data.get("userid")
        # print(request.data.get("userid"),"###################DEY##")
        # userid=request.data.get("userid")
        # print(userid + type(userid))
        
        # userobj=UserAccount.objects.get(id=int(userid))
        # print(userobj.name,"USERNAME")
        # userobj.delete()
        
        userobjs=UserAccount.objects.all()
        serializedobjs=UserAccountSerializer(userobjs,many=True)
        return Response({"msg":"Deleted","userdatas":serializedobjs.data})
    

class Adminadduser(APIView):
    def post(self,request):
        print("VIEWWWWWWWWWWWW")
        name=request.data.get("name")
        password=request.data.get("password")
        email=request.data.get("email")
        phonenumber=request.data.get("phonenumber")
        print("ACCESSEDDDDDDDDDDDDD")

        UserAccount.objects.create(name=name,phonenumber=phonenumber,email=email,password=password)
        userobjs=UserAccount.objects.all()
        serializedusers=UserAccountSerializer(userobjs,many=True)
        return Response({"msg":"success","userdatas":serializedusers.data})
