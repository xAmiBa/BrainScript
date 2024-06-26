"""
URL configuration for BrainScript project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from openAI import views as openAI_views
from email_sender import views as email_sender_views

router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns += [
    path("admin/", admin.site.urls),
    path("project/", openAI_views.ProjectAPIView.as_view()),
    path("generate/", openAI_views.GenerateProject.as_view()),
    path("send-email/", email_sender_views.EmailSenderView.as_view())
]
