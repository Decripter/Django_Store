from django.urls import URLPattern, path, include

from product import views

urlpatterns = [
    path('latest-products/', views.LatestProductsList.as_view()),
    path('products/<slug:category_slug>/<slug:product_slug>/', views.ProductDetail.as_view()),
    path('products/<slug:category_slug>/', views.CategorytDetail.as_view()),
]