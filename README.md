
# Word & Line Counter CLI

A simple Node.js command-line application that reads a text file and counts its lines, words, and characters.

## Features

- Counts lines
- Counts words
- Counts characters
- Reads text files using fs/promises
- Handles missing filenames and missing files
- Uses command-line arguments

## Requirements

- Node.js
- npm

## Project Structure

word-counter/
- index.js
- package.json
- sample.txt
- README.md

## Installation

Clone the repository and enter the project folder:

```bash
git clone YOUR_REPOSITORY_URL
cd word-counter
```

No additional npm packages are required.

## Usage

Run the program with a text filename:

```bash
npm start -- sample.txt
```

Example output:

```text
File: sample.txt
Lines: 7
Words: 40
Characters: 261
--------------------
```

The counts depend on the contents of the text file.

## Error Handling

If no filename is provided, the program displays a helpful usage message.

If the requested file does not exist, the program displays an error message.

## Technologies

- Node.js
- JavaScript ES Modules
- fs/promises
- path
- npm
