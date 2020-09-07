from django.db import models
from rest_framework import serializers
from django.conf import settings
from django.contrib.auth.models import User, AnonymousUser

# https://docs.djangoproject.com/en/3.1/topics/auth/customizing/

class Message(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()
    author = models.ForeignKey(        
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

# https://www.django-rest-framework.org/api-guide/fields/#custom-fields

class UserSerializer(serializers.Field):

  queryset=User.objects.all()
 
  def to_representation(self, value):
    user = {
            "id": value.id,
            "username": value.username
        }
    return user

  def to_internal_value(self, data):
    user = self.context['request'].user
    if(isinstance(user, AnonymousUser)):
      user = None
    return user
 
class MessageSerializer(serializers.HyperlinkedModelSerializer):

  author = UserSerializer(required=False)

  class Meta:
    model = Message
    fields = ('url', 'subject', 'body', 'pk', 'author') 
  