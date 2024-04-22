# Generated by Django 5.0.2 on 2024-04-17 16:51

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("openAI", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="project",
            name="description",
        ),
        migrations.RemoveField(
            model_name="project",
            name="owner",
        ),
        migrations.RemoveField(
            model_name="project",
            name="public",
        ),
        migrations.RemoveField(
            model_name="project",
            name="resources",
        ),
        migrations.RemoveField(
            model_name="project",
            name="technologies",
        ),
        migrations.RemoveField(
            model_name="project",
            name="title",
        ),
        migrations.AddField(
            model_name="project",
            name="author",
            field=models.CharField(blank=True, default=None, max_length=30, null=True),
        ),
        migrations.AddField(
            model_name="project",
            name="project",
            field=models.JSONField(default=0),
            preserve_default=False,
        ),
    ]
