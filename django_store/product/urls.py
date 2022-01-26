from django.urls import URLPattern, path, include

from product import views

urlpatterns = [
    path('latest-products/', views.LatestProductsList.as_view()),
]