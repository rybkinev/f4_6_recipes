from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)


class Ingredient(models.Model):
    name = models.CharField(max_length=255, unique=True, blank=False, null=False)


class Recipe(models.Model):
    name = models.CharField(max_length=255, unique=True, blank=False, null=False)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    description = models.TextField(blank=False, null=False)
    cook_time = models.IntegerField(default=0, null=True, blank=True)
    cooking = models.TextField(default='', blank=False, null=False)


class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='recipes')
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='ingredients')
    weight = models.DecimalField(max_digits=5, decimal_places=0, blank=False, null=False)
