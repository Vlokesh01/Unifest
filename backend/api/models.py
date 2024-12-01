from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class CustomUser(AbstractUser):
    ROLE_CHOICES = ( 
        ('user', 'User'),
        ('organizer', 'Organizer'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES,default='user')

class Event(models.Model):
    title = models.CharField(max_length=255, blank=False)
    thumbnail = models.ImageField(upload_to='images/' , null=False, blank=False,)
    description = models.TextField(blank=False)
    date = models.DateField(blank=False)
    organizer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='events'
    )
    time = models.TextField(blank=False, null=False)
    location = models.CharField(max_length=200,blank=False)
    category = models.CharField(max_length=50,blank=False)

    def __str__(self):
        return self.title
    
class EventRegistration(models.Model):
    participant  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'role':'user'})
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')

    class Meta :
        unique_together = ('participant', 'event')

        def __str__(self):
            return f'{self.participant} registered for {self.event}'    




