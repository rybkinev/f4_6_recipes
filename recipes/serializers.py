from . import models
from rest_framework import serializers

from .models import RecipeIngredient


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ingredient
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class RecipeIngredientSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True, source='ingredient.id')
    name = serializers.CharField(source='ingredient.name')

    class Meta:
        model = RecipeIngredient
        fields = ['id', 'name', 'weight']


class RecipeSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name')
    ingredients = RecipeIngredientSerializer(many=True, source='recipes')

    class Meta:
        model = models.Recipe
        fields = ['id', 'name', 'category', 'category_name', 'description', 'cook_time', 'cooking', 'ingredients']


