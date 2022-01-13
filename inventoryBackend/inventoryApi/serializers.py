from rest_framework import serializers

from .models import Item, Product, Warehouse

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    items = serializers.StringRelatedField(many=True, required=False)
    class Meta:
        model = Product
        fields = ( 'id','name', 'sku', 'description', 'price', 'items')


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'product',  'price', 'warehouse', 'serial_number')
        

class WarehouseSerializer(serializers.HyperlinkedModelSerializer):

    items = serializers.StringRelatedField(many=True, required=False)
    class Meta:
        model = Warehouse
        fields = ('id', 'name', 'items')
        