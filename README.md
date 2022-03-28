# MakeYourLifeEasier
It's a set of tools that can help you when organizing large quantities of text data.

# Build
1. Install NodeJS (https://nodejs.org/en/).
2. Install Angular (https://angular.io/guide/setup-local).
3. Clone the project or download and extract it.
4. Go into the project folder, open your console and run the command ``ng serve``.

# How to Use

## Line Jumper
Basically, add line breaks for texts.
Using the **Trigger** you can present a sentence that will be used to add a line break after it.
Using the **Index Position** you input a number that will be used as reference to an index position in the text that will be inserted the line break.
Click confirm to add the line breaks.

## List Numbers
Create a list of numbers.
Use the **Minimum** and **Maximum** fields to delimit the list that will be generated.
The **Decimal** option creates a list of numbers using the base 10 system.
The **Hexadeciaml** option creates a list using the base 16 system.
Optionally you can check the **Byte little Endian?** to display a list of numbers in base 16 with 4 bytes on each line using the little endian orientation.
Click confirm to generate the list.

## Encode to Translate
Create an encoded version of a text.
Insert the encoding table text into the **Encoding** field, the format is like this:
[Current Sentence]=[New Sentence] (eg: A=B)
The **Normal Way** will search for the Current Sentence to replace it with the New Sentence.
The **Inverse Way** will search for the New Sentence to replace it with the Current Sentence.
Click confirm to generate a new encoded text.
