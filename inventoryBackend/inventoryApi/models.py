from django.db import models
from rest_framework.validators import UniqueValidator
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    sku = models.CharField(max_length=60, unique=True)
    name = models.CharField(max_length=60)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    

    def __str__(self):
        return self.name

class Warehouse(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60, unique=True)

    def __str__(self):
        return self.name

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    warehouse = models.ForeignKey(Warehouse, related_name="items", on_delete=models.CASCADE, default=None)
    product = models.ForeignKey(Product, related_name="items", on_delete=models.CASCADE, default=None)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    serial_number = models.CharField(max_length=60, unique=True)


    def __str__(self):
        return self.name
