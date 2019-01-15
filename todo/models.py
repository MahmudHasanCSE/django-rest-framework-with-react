from django.db import models

# Create your models here.


class Todo(models.Model):
    """Todo list database model"""

    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        """A string representation of the model"""
        return self.title


