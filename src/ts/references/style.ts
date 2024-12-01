const columnLength: string =
`
// Copyright 2024 CSCE240
#include <iostream>

int main() {
  std::cout << "a very very long print statement that seems to never end and "
               "goes past the editor screen"
            << std::endl;
  return 0;
}
`;

const doWhileBraces: string =
`
do {
  // Body of the loop
} while (condition);
`;

const forLoops: string =
`
for (initialization; condition; update) {
  // Body of the loop
}
`;

const funcBraces1: string =
`
int GetData() const { return data_; }
`;

const funcBraces2: string =
`
// Copyright 2024 CSCE240
void GreetAmigo() { 
  cout << "¡Hola, amigo!" << endl;
  cout << "¿Cómo estás?" << endl;
}
`;

const headerGuards: string =
`
#ifndef FILE_NAME_
#define FILE_NAME_

// Prototypes

#endif
`;

const ifNoElse: string =
`
// Single Line OR Multi Line w/o omitting braces
if (true) {
  // Do something
}
  
// Single Line w/ omitting braces
if (true) // Do something
// OR
if (true)
  // Do something
`;

const ifWithElse: string = 
`
if (true) {
  // Do something
} else {
  // Do something 
}
`;

const ifWithNested: string =
`
if (true) {
  // Do something
  if (true) {
    // Do something
  } else {
    // Do something 
  }
} else {
  // Do something
}
`;

const includeFile: string =
`
#include "filename.file_extension"
`;

const indentation: string =
`
// Copyright 2024 CSCE240
#include <iostream>

using std::cout;
using std::endl;

int main() {
  bool correct_indentation = true;
  bool every_line = true;

  if (correct_indentation) {
    if (every_line) {
      cout << "No points deducted!" << endl;
    } else {
      cout << "You almost had it!" << endl;
    }
  } else {
    cout << "Sorry your indentation is incorrect!" << endl;
  }

  return 0;
}
`;

const makeFile: string =
`
target: Prerequisite(s)
    recipe command(s)

# As many as you need
target: Prerequisite(s)
    recipe command(s)
`;

const switchBraces: string =
`
switch (integer_expression) {
  case value1:
    // Case actions
    break;
  case value2:
    // Case actions
    break;
  // ...
  default:
}
`;

const whileBraces: string =
`
// Braces REQUIRED
while (condition) {
  // Body of the loop
}
`;

const styleGuide: { columnLength: string, doWhileBraces: string, forLoops: string, funcBraces1: string, funcBraces2: string, headerGuards: string, ifNoElse: string, ifWithElse: string, 
ifWithNested: string, includeFile: string,  indentation: string, makeFile: string, switchBraces: string, whileBraces: string, } =
{ columnLength, doWhileBraces, forLoops, funcBraces1, funcBraces2, headerGuards, ifNoElse, ifWithElse, ifWithNested, includeFile, 
  indentation, makeFile, switchBraces, whileBraces, };

export { styleGuide };