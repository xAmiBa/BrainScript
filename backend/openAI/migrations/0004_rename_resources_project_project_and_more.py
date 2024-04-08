# Generated by Django 5.0.3 on 2024-04-08 19:11

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("openAI", "0003_rename_owner_project_author"),
    ]

    operations = [
        migrations.RenameField(
            model_name="project",
            old_name="resources",
            new_name="project",
        ),
        migrations.RemoveField(
            model_name="project",
            name="description",
        ),
        migrations.RemoveField(
            model_name="project",
            name="public",
        ),
        migrations.RemoveField(
            model_name="project",
            name="technologies",
        ),
        migrations.RemoveField(
            model_name="project",
            name="title",
        ),
    ]