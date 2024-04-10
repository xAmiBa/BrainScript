# BrainScript - Coding Project Inventor
# DB
Projects:
- title: str
- description: str
- technologies: JSON-serialized (text) version of your list -> stored in a list as I want to filter 
```on that basis later
import simplejson as json # this would be just 'import json' in Python 2.7 and later

myModel = MyModel()
listIWantToStore = [1,2,3,4,5,'hello']
myModel.myList = json.dumps(listIWantToStore)
myModel.save()

AND THEN:
jsonDec = json.decoder.JSONDecoder()
myPythonList = jsonDec.decode(myModel.myList)
```
- resources: nested dict in str ({1: {link: link, title: title}})
- owner: user_id (foregin key)
- public: boolean (False by default, public or not)

Response structure:

# MVP
```
As a user I can list my skills I have and level of knowledge.
```

```
As a user I can list skills I want to learn.
And choose area: frontend, backend, full-stack
```

```
As a user I can decide to learn any skills.
```

```
As a user I can list my interests.
```

```
As a user I recieve a coding project idea with:
- project title
- project description
- tech stack I will use with tutorial links or docs
- project structure graph
- Additional features, technologies if I want to stretch myself
```

# STRETCH
```
As a user I can save the coding project idea by downloading Readme.md file.
```

```
As a user I can create an account and save my project.
```

```
As a user I can choose to publish my project in project bank
```

```
As a user I can choose to publish my project in project bank
```

```
As a user I can upvote projects and see the most popular ones
```

```
As a user I can add my repo links to porjects ideas to showcase what I did
```


API:
Prompt will ask for json file output

Example output:
```
{
    "title" : "BeautyHub: A Makeup Art Showcase",
    "description" : "BeautyHub is a web platform that allows makeup artists to create profiles, upload their work, and connect with potential clients. As a beginner-friendly project, this will enhance your Python skills through backend development with Django, while your advanced HTML and CSS knowledge will be put to use in crafting a beautiful, responsive frontend. Users can register, upload images of their makeup art, describe the products used, and interact through comments. This project aims to embrace the art of makeup, providing a space where artists can share their work and makeup enthusiasts can discover new trends and artists.",
    "technologies" : ["Python", "HTML", "CSS", "Django"],
    "resources" : [
        {"title": "Django for Beginners", "link": "https://www.djangoproject.com/start/"},
        {"title": "CSS-Tricks for advanced styling", "link": "https://css-tricks.com/"},
        {"title": "HTML5 Documentation", "link": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"},
        {"title": "Bootstrap for responsive design", "link": "https://getbootstrap.com/docs/5.0/getting-started"}]
    }

```


!!!! RESPONSE WE GET FROM OPENAI API:
You need to access content and convert it jons.loads(content) into json
!!! NOTE THAT AUTHOR MUST BE PRESENT IN REQUEST< EVEN AS EMPTY STRING>
```
{
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
```