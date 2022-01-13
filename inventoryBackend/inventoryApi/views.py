from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ItemSerializer, ProductSerializer, WarehouseSerializer
from .models import Product
from .models import Item
from .models import Warehouse

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('product')
    serializer_class = ItemSerializer

class WarehouseViewSet(viewsets.ModelViewSet):
    queryset = Warehouse.objects.all().order_by('name')
    serializer_class = WarehouseSerializer