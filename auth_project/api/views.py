from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets

from .models import Message, MessageSerializer

# class UserDetailView(APIView):
#   permission_classes = [IsAuthenticated]

#   def get(self, request, *args, **kwargs):
#     return Response({"email": request.user.email})

class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows messages to be viewed or edited.
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer