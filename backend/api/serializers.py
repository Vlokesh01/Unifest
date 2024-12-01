from rest_framework import serializers
from .models import Event, CustomUser , EventRegistration


class CustomUserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True},
            'role': {'default': 'User'}  #
        }

    def create(self, validated_data):
        user = CustomUser(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event   
        fields = ['id', 'title','thumbnail', 'description', 'date', 'location','category']
        read_only_fields = ['organizer']


class EventRegistrationSerializer(serializers.ModelSerializer):
    event_details = serializers.SerializerMethodField()

    class Meta:
        model = EventRegistration
        fields = ['id', 'event', 'event_details']
        extra_kwargs = {
            'event': {'write_only': True},
            'participant': {'write_only': True},
        }

    def get_event_details(self, obj):
        # Ensure that the date is properly formatted (as a string)
        event_date = obj.event.date.strftime('%Y-%m-%d')  # Ensure correct format

        return {
            'id': obj.event.id,
            'title': obj.event.title,
            'thumbnail': obj.event.thumbnail.url if obj.event.thumbnail else None,
            'description': obj.event.description,
            'location': obj.event.location,
            'date': event_date,  # Format the date to 'YYYY-MM-DD'
            'category': obj.event.category,
            'organizer': obj.event.organizer.username,
        }
