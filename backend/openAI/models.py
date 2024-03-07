from django.db import models
from utils.model_abstracts import Model
from django_extensions.db.models import (
    TimeStampedModel,
    ActivatorModel
    )

# Create your models here.
class Project(
    TimeStampedModel,
    ActivatorModel,
    Model
):
    class Meta:
        verbose_name_plural = "Projects"
    
    title = models.CharField(max_length=30, blank=False)
    description = models.TextField(blank=False)
    public = models.BooleanField(default=False)
    technologies = models.JSONField(blank=False)
    resources = models.JSONField(blank=False)

    # TODO: foregin owner id will be added when user account implemented, it's null for now
    owner = models.CharField(default=None, max_length=30)

    def __str__(self) -> str:
        return super().__str__()

    