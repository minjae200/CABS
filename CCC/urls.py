from django.urls import path
from . import views

app_name = 'CCC'
urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard'),
    path('/register', views.RegisterModuleView.as_view(), name='register'),
]