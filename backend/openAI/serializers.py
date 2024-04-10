from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, JSONField
import json

# Data for single project API response
class ProjectSerializer(serializers.ModelSerializer):

    jsonDec = json.decoder.JSONDecoder()

    author = CharField()

    # technologies and resources are stored as JSON list and dict
    # decoded to be served in Python format
    project = JSONField()
 

	
    class Meta:
        model = models.Project
        fields = (
            "author",
            "project",
		)