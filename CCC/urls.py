from django.urls import path
from . import views

app_name = 'CCC'
urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard'),
    path('register', views.RegisterModuleView.as_view(), name='register'),
    path('history', views.HistoryView.as_view(), name='history'),
    path('schedule', views.ScheduleView.as_view(), name='schedule'),
    path('develop', views.DevelopNoteView.as_view(), name='develop'),
    path('note', views.UserNoteView.as_view(), name='note')
]