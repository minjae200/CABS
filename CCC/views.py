from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect, JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
class DashboardView(TemplateView):
    def get(self, request, *args, **kwargs):
        return render(request, 'dashboard.html', {})

class HistoryView(TemplateView):
    def get(self, request, *args, **kwargs):
        return render(request, 'history.html', {})

class ScheduleView(TemplateView):
    def get(self, request, *args, **kwargs):
        return render(request, 'schedule.html', {})

class RegisterModuleView(TemplateView):
    def post(self, request):
        print(request.POST)
        return JsonResponse({})