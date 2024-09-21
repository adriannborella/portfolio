from django.contrib import admin
from .models import Technology, Project

# Register your models here.


class TechnologyAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


class TechnologyInline(admin.TabularInline):
    model = Project.technologies.through


class ProjectAdmin(admin.ModelAdmin):
    list_display = ("name", "url", "description")
    search_fields = ("name", "description")
    list_filter = ("technologies",)
    filter_horizontal = ("technologies",)


admin.site.register(Technology, TechnologyAdmin)
admin.site.register(Project, ProjectAdmin)
