from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Event  , CustomUser  , EventRegistration
from .serializers import EventSerializer , CustomUserRegisterSerializer , EventRegistrationSerializer
from .permissions import IsOrganiser , IsUser
from rest_framework.exceptions import ValidationError
from .pagination import CustomLimitOffsetPagination 
from rest_framework import filters
from rest_framework.exceptions import NotFound


class  RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserRegisterSerializer
    permission_classes = [AllowAny]


# Event Creation for Organization
class EventCreateView(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsOrganiser]

    def perform_create(self, serializer):
        # Automatically set the organizer as the current user
        serializer.save(organizer=self.request.user)

 # Event Listing for Organizations   
class EventListView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsOrganiser]
    pagination_class = CustomLimitOffsetPagination

    def get_queryset(self):
        # Return events created by the logged-in organizer
        return Event.objects.filter(organizer=self.request.user).order_by('-id')


# Event Update/Delete for Organization
class EventUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsOrganiser]

    def get_queryset(self):
        # Restrict to events organized by the logged-in organizer
        return Event.objects.filter(organizer=self.request.user)


# Events List For Public Users
class EventPublicListView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny]
    pagination_class = CustomLimitOffsetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['title','description','date','category','location',]
    
    def get_queryset(self):
        return Event.objects.all().order_by('-id')
    

# Event Registration View (Regular Users)
class EventRegistrationCreateView(generics.CreateAPIView):
    queryset = EventRegistration.objects.all()
    serializer_class = EventRegistrationSerializer
    permission_classes = [IsUser]

    def perform_create(self, serializer):
        event_id = self.request.data.get('event')
        if EventRegistration.objects.filter(participant=self.request.user, event_id=event_id).exists():
            raise ValidationError("You are already registered for this event.")
        serializer.save(participant=self.request.user)


# User's Event Registrations List View
class EventRegistratedListView(generics.ListAPIView):
    serializer_class = EventRegistrationSerializer
    permission_classes = [IsUser]
    pagination_class = CustomLimitOffsetPagination

    def get_queryset(self):
        return EventRegistration.objects.filter(participant=self.request.user).order_by('-id')
    
    

# User's Event Registration Delete View
from rest_framework.exceptions import NotFound

class EventRegistratedDeleteView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventRegistrationSerializer
    permission_classes = [IsUser]

    def get_object(self):
        # Get the event registration instance based on the 'pk' provided in the URL
        registration_id = self.kwargs.get('pk')
        
        try:
            # Ensure the registration belongs to the logged-in user
            registration = EventRegistration.objects.get(id=registration_id, participant=self.request.user)
            return registration
        except EventRegistration.DoesNotExist:
            raise NotFound("Event registration not found or does not belong to the current user.")

