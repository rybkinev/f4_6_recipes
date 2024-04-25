from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters

from . import serializers, models


class RecipeViewSet(viewsets.ModelViewSet):
    allowed_methods = ['GET']
    serializer_class = serializers.RecipeSerializer
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    ordering_fields = ['name']
    ordering = 'name'
    filterset_fields = ['category']

    def get_queryset(self):
        category = self.request.query_params.get('category')
        if category:
            return models.Recipe.objects.filter(category=category)
        return models.Recipe.objects.all()


class IngredientViewSet(viewsets.ModelViewSet):
    allowed_methods = ['GET']
    queryset = models.Ingredient.objects.all()
    serializer_class = serializers.IngredientSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name']
    ordering = 'name'


class CategoryViewSet(viewsets.ModelViewSet):
    allowed_methods = ['GET']
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['name']
    ordering = ['name']
