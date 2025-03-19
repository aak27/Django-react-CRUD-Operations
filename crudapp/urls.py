from django.urls import path
from .views import *
urlpatterns=[
    path("addpersons/",PersonView.as_view()),
    path("addpersons/<int:id>/",PersonView.as_view())
]