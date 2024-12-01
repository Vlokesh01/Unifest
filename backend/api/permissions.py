from rest_framework.permissions import BasePermission

class IsOrganiser(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'organizer'


class IsUser(BasePermission):
     
     def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'user'