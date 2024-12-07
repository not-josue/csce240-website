import { STD } from "@ts/constants";

const ex01Code: string = 
`
// Copyright 2024 CSCE240

#include <iostream>

using std::cout;
using std::endl;

int main() {
  char array[] = "hello";
  array[2] = '\\0';

  cout << array << " instead of hello" << endl;

  return 0;
}
`

const ex01Term: string =
`
g++ -Wall -std=c++${STD} driver.cc
./a.out
he instead of hello
`

const code: { ex01Code: string, ex01Term: string} =
{ ex01Code, ex01Term, }

export { code }