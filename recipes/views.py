from rest_framework import viewsets

from . import serializers, models


class RecipeViewSet(viewsets.ModelViewSet):
    allowed_methods = ['GET']
    queryset = models.Recipe.objects.all()
    serializer_class = serializers.RecipeSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    allowed_methods = ['GET']
    queryset = models.Ingredient.objects.all()
    serializer_class = serializers.IngredientSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    allowed_methods = ['GET']
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer
