from django.urls import path
from rest_framework import routers
from django.urls import include
from tasks import views



router = routers.DefaultRouter()
router.register(r'tasks',views.TaskView, 'task')


urlpatterns = [
    
    path("api/v1/", include(router.urls) )
    
    
]
