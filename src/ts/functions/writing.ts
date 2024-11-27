const howExample: string = 
`
// Copyright 2024 CSCE240
#include <iostream>
using std::cout;
using std::endl;

// Function to find the smallest value
int GetMin(int, int);

int main() {
  const bool test1 = GetMin(1, 2) == 1;
  const bool test2 = GetMin(3, -3) == -3;
  const bool test3 = GetMin(4, 4) == 4;

  cout << "Test 1: " << test1 << endl;
  cout << "Test 2: " << test2 << endl;
  cout << "Test 3: " << test3 << endl;

  return 0;
}

int GetMin(int x, int y) { return x <= y ? x : y; }
`;

const howTerminal: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
./a.out
Test 1: 1
Test 2: 1
Test 3: 1
`;

const code: { howExample: string, howTerminal: string } = 
{ howExample, howTerminal };

export { code };