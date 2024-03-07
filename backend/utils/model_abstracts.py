# replaces traditional ID in models with UUID
# meta class defines this base class as abstract so it applies to all modles
import uuid
from django.db import models


class Model(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

    class Meta:
        abstract = True