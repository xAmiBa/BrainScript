from django.test import TestCase
from . models import Project
from rest_framework.test import APIClient
from rest_framework.test import APITestCase
from rest_framework import status
from unittest.mock import patch

class ProjectTestCase(APITestCase):

    """
    Test suite for adding new project API endpoint: /project/
    """
    def setUp(self):
        self.client = APIClient()
        self.data = {
            "author" : "Test Author",
            "project" : {
                "title" : "Test title",
                "description" : "Test description",
                "technologies" : ["Test tech"],
                "resources" : [
                    {"title": "Test resource titlele", "link": "https://test-resource-link"}]
            }
        }
        self.url = "/project/"

    def test_add_project_to_db_with_author(self):
        """
        Project and author added to database
        """
        data = self.data
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Project.objects.count(), 1)
        self.assertEqual(Project.objects.get().author, "Test Author")

    def test_add_project_to_db_without_author(self):
        """
        Project added to database with default author NULL
        """
        data = self.data
        data.pop("author")
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Project.objects.count(), 1)
        self.assertEqual(Project.objects.get().author, None)

    def test_add_empty_project_error(self):
        data = self.data
        data.pop("author")
        data.pop("project")
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Project.objects.count(), 0)


class ProjectTestCase(APITestCase):

    """
    Test suite for generating new project API endpoint: /generate/
    Mocking OpenAI API calls
    """
    #TODO: Mock OpenAI API response.

    def setUp(self):
        # with patch('openAI.views.')
        self.client = APIClient()
        self.data_mock = {
            "data": {
                "title": "Football Match Scheduler",
                "description": "Create a web application that allows users to schedule and organize football matches with their friends. The application will have features such as creating match events, inviting players, viewing player availability, and managing match details. Users can also view match history and statistics.",
                "technologies": [
                    "Python",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Django",
                    "React"
                ],
                "resources": [
                    {
                        "title": "Django documentation",
                        "link": "https://docs.djangoproject.com/en/3.2/"
                    },
                    {
                        "title": "React documentation",
                        "link": "https://reactjs.org/docs/getting-started.html"
                    }
                ],
            },

            "author": "test user"
        }
        self.url = "/generate/"

