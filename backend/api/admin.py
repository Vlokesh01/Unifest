from django.contrib import admin
from .models import Event , CustomUser

# Register your models here

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', )
    search_fields = ('title', 'description')

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'role' )
