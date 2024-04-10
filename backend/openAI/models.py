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
    # REFACTOR  status field (Active, Inactive) in model can replace public field?
    class Meta:
        verbose_name_plural = "Projects"
    
    project = models.JSONField(blank=False)

    # TODO: foregin owner id will be added when user account implemented, it's null for now
    author = models.CharField(default=None, max_length=30, blank=True, null=True)

    def __str__(self) -> str:
        return super().__str__()

# TODO: User class for user management when auth implemented