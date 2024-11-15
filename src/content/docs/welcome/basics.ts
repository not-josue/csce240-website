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

const code: {preprocess: string, compile: string, link01: string, link02: string, execute: string} = { preprocess, compile, link01, link02, execute };

export {code};