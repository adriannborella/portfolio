from django.db import models


class Technology(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=200)
    url = models.URLField()
    description = models.TextField()
    technologies = models.ManyToManyField(Technology)

    def __str__(self) -> str:
        return self.name
