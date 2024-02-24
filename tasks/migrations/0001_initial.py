# Generated by Django 5.0.2 on 2024-02-24 04:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=2000)),
                ('description', models.TimeField(blank=True)),
                ('done', models.BooleanField(default=False)),
            ],
        ),
    ]
