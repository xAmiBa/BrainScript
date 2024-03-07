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