# Generated by Django 5.1.7 on 2025-03-12 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crudapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persons',
            name='phone',
            field=models.BigIntegerField(null=True),
        ),
    ]
