# Generated by Django 4.1.7 on 2023-03-02 15:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="product",
            name="rating",
        ),
    ]