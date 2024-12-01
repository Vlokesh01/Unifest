from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings

# Urls for authentication
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# Urls for authentication
urlpatterns = [
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', RegisterView.as_view() , name='register'),
]

# urls for organization
urlpatterns += [
    path('create/', EventCreateView.as_view() , name='create'),
    path('allevents/', EventListView.as_view() , name='allevents'),
    path('update/<int:pk>', EventUpdateDeleteView.as_view() , name='update'),
    path('delete/<int:pk>', EventUpdateDeleteView.as_view() , name='delete'),
]

# urls for public events listings
urlpatterns +=[
    path('publicevents/' , EventPublicListView.as_view() , name='eventspubliclist')
]

# Urls for Users
urlpatterns +=[
    path('register/', EventRegistrationCreateView.as_view() , name='registrationcreate'),
    path('myregisteredevents/', EventRegistratedListView.as_view() , name='myevents'),
    path('unregister/<int:pk>', EventRegistratedDeleteView.as_view() , name='unregister'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



