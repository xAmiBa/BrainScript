from django.shortcuts import render

# Create your views here.
from json import JSONDecodeError
from django.http import JsonResponse
from .serializers import ProjectSerializer
from rest_framework.parsers import JSONParser
from rest_framework import views, status
from rest_framework.response import Response
import requests
from openai import OpenAI
import openai
import os
import json
from .models import Project


class ProjectAPIView(views.APIView):
    """
    A simple APIView for creating new project.
    """
    serializer_class = ProjectSerializer

    def get_serializer_context(self):
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }

    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = ProjectSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)

class GenerateProject(views.APIView):
    """
    This view makes an external API call, saves the result and returns the data generated as JSON object
    """

    def post(self, request, *args, **kwargs):
        client = OpenAI()

        data = json.loads(request.body)
        interests = data.get("interests")
        skills = data.get("skills")
        skills_to_learn = data.get("skills_to_learn")
        area_of_programming = data.get("area_of_programming")
        author = data.get("author")

        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                    "role": "system",
                    "content": "You will be provided with user interests, skills with level of knowledge, skills they want to learn and area of programming. Your task is to generate a coding project idea based on their existing skills, interests and skills they want to learn. Generate title, description, technologies and list of free online resources (frameworks and languages documentation links) in JSON format.\nFollow this format:\n{\n\"title\" : \"example title\",\n\"description\" : \"example descrition of the project\",\n\"technologies\" : [\"Python\", \"HTML\", \"CSS\"],\n\"resources\" : [{\"title\": \"python tutorial\", \"link\": \"example_link.com\"}, {\"title\": \"python tutorial2\", \"link\": \"example_link2.com\"}]\n}"
                    },
                    {
                    "role": "user",
                    "content": f"user interests: {interests};\nskills with level of knowledge: {skills};\nskills they want to learn: {skills_to_learn};\narea of programming: {area_of_programming}"
                    }
                ],
                temperature=1,
                max_tokens=350,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
                )
        

        except openai.APIError as e:
            return JsonResponse({"error": str(e), "message": "OpenAI API returned an API Error"}, status=500)
        
        except openai.APIConnectionError as e:
            return JsonResponse({"error": str(e), "message": "Failed to connect to OpenAI API"}, status=500)
            pass
        except openai.RateLimitError as e:
            return JsonResponse({"error": str(e), "message": "OpenAI API request exceeded rate limit"}, status=500)

 
        data = response.json()

        data = json.loads(data)
        data = data["choices"][0]["message"]["content"]
        data = json.loads(data)

        # Save project details and author to database
        new_project = Project.objects.create(project=data, author=author)
        new_project.save()

        return JsonResponse({"data": data, "author": author}, status=200)
    
    def make_api_call(self, request):
        client = OpenAI()

        data = json.loads(request.body)
        interests = data.get("interests")
        skills = data.get("skills")
        skills_to_learn = data.get("skills_to_learn")
        area_of_programming = data.get("area_of_programming")
        author = data.get("author")

        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                    "role": "system",
                    "content": "You will be provided with user interests, skills with level of knowledge, skills they want to learn and area of programming. Your task is to generate a coding project idea based on their existing skills, interests and skills they want to learn. Generate title, description, technologies and list of free online resources (frameworks and languages documentation links) in JSON format.\nFollow this format:\n{\n\"title\" : \"example title\",\n\"description\" : \"example descrition of the project\",\n\"technologies\" : [\"Python\", \"HTML\", \"CSS\"],\n\"resources\" : [{\"title\": \"python tutorial\", \"link\": \"example_link.com\"}, {\"title\": \"python tutorial2\", \"link\": \"example_link2.com\"}]\n}"
                    },
                    {
                    "role": "user",
                    "content": f"user interests: {interests};\nskills with level of knowledge: {skills};\nskills they want to learn: {skills_to_learn};\narea of programming: {area_of_programming}"
                    }
                ],
                temperature=1,
                max_tokens=350,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
                )
        

        except openai.APIError as e:
            return JsonResponse({"error": str(e), "message": "OpenAI API returned an API Error"}, status=500)
        
        except openai.APIConnectionError as e:
            return JsonResponse({"error": str(e), "message": "Failed to connect to OpenAI API"}, status=500)
            pass
        except openai.RateLimitError as e:
            return JsonResponse({"error": str(e), "message": "OpenAI API request exceeded rate limit"}, status=500)
        
        data = response.json()

        data = json.loads(data)
        data = data["choices"][0]["message"]["content"]
        data = json.loads(data)

        # Save project details and author to database
        new_project = Project.objects.create(project=data, author=author)
        new_project.save()

        return JsonResponse({"data": data, "author": author}, status=200)