from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, JSONField
import json

# Data for single project API response
class ProjectSerializer(serializers.ModelSerializer):

    jsonDec = json.decoder.JSONDecoder()

    title = CharField(source="title")
    description = CharField(source="description")
    author = CharField(source="author")

    # technologies and resources are stored as JSON list and dict
    # decoded to be served in Python format
    technologies = JSONField(source="technologies")
    resources = JSONField(source="resources")

	
    class Meta:
        model = models.Project
        fields = (
            "title",
            "description",
            "technologies",
            "resources",
            "author"
		)