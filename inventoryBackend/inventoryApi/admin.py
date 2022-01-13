from django.contrib import admin
from .models import Product
from .models import Item
from .models import Warehouse

admin.site.register(Product)
admin.site.register(Item)
admin.site.register(Warehouse)