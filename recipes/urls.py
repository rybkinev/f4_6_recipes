from django.template.defaulttags import url
from django.urls import path, include
from django.views.static import serve
from rest_framework import routers
from rest_framework.schemas import get_schema_view

from project import settings
from . import views


router = routers.DefaultRouter()
router.register(r'recipes', views.RecipeViewSet)
router.register(r'ingredients', views.IngredientViewSet)
router.register(r'categories', views.CategoryViewSet)

schemas = get_schema_view(
        title="F4.6 Recipes API",
        description="It is open API Schema for F4.6 recipes.",
        # patterns=[path('api/recipes/', include(router.urls), {'get': 'list'})],
    )
urlpatterns = [
    path('api/', include(router.urls)),
    path('openapi', schemas, name='openapi-schema'),
    path('api/config', serve, {'document_root': settings.STATIC_ROOT, 'path': 'swagger-config.json'}),
]
