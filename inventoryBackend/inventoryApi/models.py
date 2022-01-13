from django.db import models

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    sku = models.CharField(max_length=60)
    name = models.CharField(max_length=60)
    sku = models.CharField(max_length=60)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField()

    def __str__(self):
        return self.name

class Warehouse(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name
class Item(models.Model):
    id = models.AutoField(primary_key=True)
    warehouse = models.ForeignKey(Warehouse, related_name="items", on_delete=models.CASCADE, default=None)
    sku = models.ForeignKey(Product, related_name="items", on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=60)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    serial_number = models.CharField(max_length=60)

    def __str__(self):
        return self.name
