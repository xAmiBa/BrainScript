from django.shortcuts import render
import json
from django.core.mail import BadHeaderError, send_mail, EmailMessage
from django.http import HttpResponse

from rest_framework import views, status
from rest_framework.response import Response


# Create your views here.

"""
View resposible for sending an email
"""
class EmailSenderView(views.APIView):
    """
    template id is and id of sendgrid message
    new_project_template by default
    """
    def post(self, request, template_id = 'd-e71e06a23a27476184f915b3d1b1c6b9'):
        data = json.loads(request.body)
        subject = data.get("subject")
        project_data = data.get("project_data")
        recipient_email = data.get("recipient_email")

        if subject and project_data and recipient_email:
            try:
                msg = EmailMessage(
                    from_email='abaaminaba@gmail.com',
                    to=[recipient_email],
                    subject=subject,
                )
                msg.template_id = template_id
                msg.dynamic_template_data = project_data
                msg.send(fail_silently=False)
            except BadHeaderError:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            return Response(status=status.HTTP_200_OK)
        else:
            return HttpResponse(status=400)
