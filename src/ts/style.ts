const brackets : string =
`
// Copyright 2024 CSCE240
int main() { 
  int num = 7;
  return 0; 
}
`;

const bracketsErrors : string =
`
cpplint driver.cc
driver.cc:4:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
driver.cc:5:  { should almost always be at the end of the previous line  [whitespace/braces] [4]
Done processing driver.cc
Total errors found: 2
`

const copyright : string = 
`
// Copyright 2024 CSCE240
int main() { return 0; }
`;

const copyrightError : string = 
`
cpplint driver.cc
driver.cc:0:  No copyright message found.  You should have a line: "Copyright [year] <Copyright Owner>"  [legal/copyright] [5]
Done processing driver.cc
Total errors found: 1
`;

const newline : string =
`
cpplint driver.cc
driver.cc:2:  Could not find a newline character at the end of the file.  [whitespace/ending_newline] [5]
Done processing driver.cc
Total errors found: 1
`;

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

const columnError: string =
`
cpplint driver.cc
driver.cc:5:  Lines should be <= 80 characters long  [whitespace/line_length] [2]
Done processing driver.cc
Total errors found: 1
`;

const indent: string = 
`
// Copyright 2024 CSCE240
#include <iostream>
using std::cout;

int main() {
  bool quit = true;
  if (quit) {
    cout << "Goodbye!";
  }
  return 0;
}
`;

const code : {brackets: string, bracketsErrors: string, copyright: string, copyrightError: string, indent: string, newline: string, columnLength: string, columnError: string} = 
{brackets, bracketsErrors, copyright, copyrightError, indent, newline, columnLength, columnError};

export {code};