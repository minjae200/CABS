from django.shortcuts import render
from django.views.generic import TemplateView


# Create your views here.

class MainView(TemplateView):
    def get(self, request, *args, **kwargs):

        return render(request, 'dashboard.html', {})