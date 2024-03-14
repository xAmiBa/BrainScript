"""
Prompt return JSON formatted data
look at ./example_prompt_response.json for example
"""

from openai import OpenAI
client = OpenAI()

# TODO: replace with values from API request
interests = None
skills = None
skills_to_learn = None
area_of_programming = None

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {
      "role": "system",
      "content": "You will be provided with user interests, skills with level of knowledge, skills they want to learn and area of programming. Your task is to generate a coding project idea based on their existing skills, interests and skills they want to learn. Generate title, description, technologies and list of free online resources (frameworks and languages documentation links) in JSON format.\nFollow this format:\n{\n\"title\" : \"example title\",\n\"description\" : \"example descrition of the project\",\n\"technologies\" : [\"Python\", \"HTML\", \"CSS\"],\n\"resources\" : [{\"title\": \"python tutorial\", \"link\": \"example_link.com\"}, {\"title\": \"python tutorial2\", \"link\": \"example_link2.com\"}]\n}"
    },
    {
      "role": "user",
      "content": f"user interests: {interests};\nskills with level of knowledge: {skills};\nskills they want to learn: {skills_to_learn};\narea of programming: {area_of_programming}"
    }
  ],
  temperature=1,
  max_tokens=350,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)