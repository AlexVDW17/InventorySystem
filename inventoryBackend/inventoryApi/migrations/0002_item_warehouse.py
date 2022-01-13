# Generated by Django 4.0.1 on 2022-01-13 04:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventoryApi', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=60)),
                ('sku', models.CharField(max_length=60)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('location', models.CharField(max_length=60)),
                ('serial_number', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Warehouse',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=60)),
            ],
        ),
    ]