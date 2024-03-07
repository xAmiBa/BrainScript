from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, TextField, JSONField
import json

# Data for single project API response
class ProjectSerializer(serializers.ModelSerializer):

    jsonDec = json.decoder.JSONDecoder()

    title = CharField(source="title")
    description = TextField(source="description")

    # technologies and resources are stored as JSON list and dict
    # decoded to be served in Python format
    technologies = jsonDec.decode(JSONField(source="technologies"))
    resources = jsonDec.decode(JSONField(source="resources"))

	
    class Meta:
        model = models.Contact
        fields = (
            "title",
            "description",
            "technologies",
            "resources"
		)