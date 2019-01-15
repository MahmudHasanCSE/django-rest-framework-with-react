from django.urls import  path

from . import views

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('<ink:pk>/', views.DetailTodo.as_view()),
]