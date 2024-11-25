const braces : string =
`
// Copyright 2024 CSCE240
int main() { 
  int num = 7;
  return 0; 
}
`;

const bracesErrors : string =
`
cpplint driver.cc
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const copyright : string = 
`
// Copyright 2024 CSCE240
int main() { return 0; }
`;

const copyrightError : string = 
`
cpplint driver.cc
No copyright message found.  You should have a line: "Copyright [year] <Copyright Owner>"  [legal/copyright] [5]
`;

const newline : string =
`
cpplint driver.cc
Could not find a newline character at the end of the file.  [whitespace/ending_newline] [5]
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
Lines should be <= 80 characters long  [whitespace/line_length] [2]
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

const code : {braces: string, bracesErrors: string, copyright: string, copyrightError: string, indent: string, newline: string, columnLength: string, columnError: string} = 
{braces, bracesErrors, copyright, copyrightError, indent, newline, columnLength, columnError};

export {code};