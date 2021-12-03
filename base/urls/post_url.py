from django.urls import path
from base.views import post_views as views

urlpatterns = [
  path('add', views.add_post, name='addPost' ),
  path('get/<str:pk>', views.get_post, name='get-post')
]