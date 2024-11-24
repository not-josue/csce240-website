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

const funcBrackets1: string =
`
int GetData() const { return data_; }
`;

const funcBrackets2: string =
`
// Copyright 2024 CSCE240
int main() { 
  int num = 7;
  return 0; 
}
`;

const ifNoElse: string =
`
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

const styleGuide: { columnLength: string, funcBrackets1: string, funcBrackets2: string, ifNoElse: string, ifWithElse: string, 
ifWithNested: string,  indentation: string } =
{ columnLength, funcBrackets1, funcBrackets2, ifNoElse, ifWithElse, ifWithNested, indentation };

export { styleGuide };