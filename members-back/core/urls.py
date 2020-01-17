from django.urls import path, include
from rest_framework import routers
from core.views import MemberViewSet

router = routers.DefaultRouter()
router.register('members', MemberViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls'), name='rest_framework')
]
