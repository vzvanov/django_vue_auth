from django.contrib import admin

from api.models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
	list_display = (
		'subject',
		'body',
		'author',

	)

	search_fields = [
		'subject',
		'body',
		'author'
	]

	list_filter = ['subject']