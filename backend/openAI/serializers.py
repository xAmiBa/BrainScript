from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, JSONField
import json

# Data for single project API response
class ProjectSerializer(serializers.ModelSerializer):

    jsonDec = json.decoder.JSONDecoder()

    # WHY add to notes - this is how we allow blank in database
    author = CharField(required=False, allow_blank=True)

    # technologies and resources are stored as JSON list and dict
    # decoded to be served in Python format
    project = JSONField()
 

	
    class Meta:
        model = models.Project
        fields = (
            "author",
            "project",
		)