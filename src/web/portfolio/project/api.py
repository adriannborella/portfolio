from rest_framework import viewsets
from .models import Technology, Project
from .serializers import TechnologySerializer, ProjectSerializer


class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.filter(projects__isnull=False)
    serializer_class = TechnologySerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = self.queryset

        technologies = self.request.GET.get("technologies[]")

        if technologies:
            tech_ids = technologies.split(",")
            queryset = queryset.filter(technologies__id__in=tech_ids).distinct()

        return queryset
