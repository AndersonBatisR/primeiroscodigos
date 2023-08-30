<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Object-oriented JavaScript example</title>
  </head>

  <body>
    <p>This example requires you to enter commands in your browser's JavaScript console (see <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">What are browser developer tools</a> for more information).</p>

  </body>

    <script>
      const person = {
        name: ["Kate", "Smith"],
        age: 32,
        gender: "female",
        interests: ["music", "skiing"],
        bio() {
          alert(
            `${this.name[0]} ${this.name[1]} is ${this.age} years old. She likes ${
              this.interests[0]} and ${this.interests[1]}.`,
          );
        },
        greeting() {
          alert(`Hi! I'm ${this.name[0]}.`);
        },
      };
      const myDataName = 'height';
      const myDataValue = '1.75m';
      person[myDataName] = myDataValue;
    </script>
</html>
