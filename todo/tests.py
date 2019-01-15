from django.test import TestCase
from .models import Todo
# Create your tests here.


class TodoModelTest(TestCase):
    """Test Class"""

    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(title='First Todo')
        Todo.objects.create(description='a description here')

    def test_title_content(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEquals(expected_object_name, 'First Todo')

    def test_description_content(self):
        todo = Todo.objects.get(id=2)
        expected_object_name = f'{todo.description}'
        self.assertEquals(expected_object_name, 'a description here')


