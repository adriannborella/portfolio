from rest_framework import serializers
from .models import Technology, Project


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ["id", "name"]


class ProjectSerializer(serializers.ModelSerializer):
    technologies = serializers.PrimaryKeyRelatedField(
        queryset=Technology.objects.all(), many=True
    )

    technologies_names = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            "id",
            "name",
            "url",
            "description",
            "technologies",
            "technologies_names",
        ]
        readonly = ["technologies_names"]
