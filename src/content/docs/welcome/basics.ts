const functions: string =
`
// Copyright 2024 CSCE240
int main () {}
`;

const classes: string =
`
// Copyright 2024 CSCE240
#include <iostream>
using std::cin;
using std::cout;
using std::endl;

int main() {
  int input;
  cin >> input;
  cout << input << endl;

  return 0;
}
`;

const preprocess: string =
`
// Copyright 2024 CSCE240

#include <iostream>

using std::cout;
using std::endl;

int main() {
  cout << "こんにちは世界" << endl;
  return 0;
}
`;

const compile: string =
`
g++ -c driver.cc
`;

const link01: string = 
`
g++ driver.o program.o
`;

const link02: string =
`
g++ driver.o program.o -o driver
`;

const execute: string =
`
./a.out
`;

const code: {functions: string, classes: string, preprocess: string, compile: string, link01: string, link02: string, execute: string} = 
{ functions, classes, preprocess, compile, link01, link02, execute };

export {code};