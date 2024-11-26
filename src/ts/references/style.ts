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
int main() { 
  int num = 7;
  return 0; 
}
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
while (condition) {
  // Body of the loop
}
`;

const styleGuide: { columnLength: string, doWhileBraces: string, forLoops: string, funcBraces1: string, funcBraces2: string, ifNoElse: string, ifWithElse: string, 
ifWithNested: string,  indentation: string, switchBraces: string, whileBraces: string, } =
{ columnLength, doWhileBraces, forLoops, funcBraces1, funcBraces2, ifNoElse, ifWithElse, ifWithNested, indentation, switchBraces, whileBraces, };

export { styleGuide };