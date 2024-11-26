const whileExample: string =
`
// Copyright 2024 CSCE240
#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int main() {
  cout << "Enter an integer to countdown from:" << endl;
  int countdown;
  cin >> countdown;

  while (countdown > 0) {
    cout << countdown << endl;
    --countdown;
  }

  cout << "Lift Off!!!" << endl;

  return 0;
}
`;

const whileResult: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
./a.out
Enter an integer to countdown from:
5
5
4
3
2
1
Lift Off!!!
`;

const doWhileExample: string =
`
// Copyright 2024 CSCE240
#include <iostream>
using std::cin;
using std::cout;
using std::endl;

int main() {
  int number;
  do {
    cout << "Enter a number between 1 and 10:" << endl;
    cin >> number;
  } while (number < 1 || number > 10);

  cout << "You entered: " << number << endl;
  return 0;
}
`;

const doWhileResult: string =
`
g++ driver.cc
./a.out
Enter a number between 1 and 10:
0
Enter a number between 1 and 10:
11
Enter a number between 1 and 10:
5
You entered: 5
`;

const fizzBuzz: string =
`
// Copyright 2024 CSCE240
#include <iostream>
using std::cout;
using std::endl;

int main() {
  const int kCount = 30;

  for (int i = 1; i <= kCount; ++i) {
    if (i % 3 == 0 && i % 5 == 0) {
      cout << "FizzBuzz" << endl;
    } else if (i % 5 == 0) {
      cout << "Buzz" << endl;
    } else if (i % 3 == 0) {
      cout << "Fizz" << endl;
    } else {
      cout << i << endl;
    }
  }

  return 0;
}
`;

const fizzBuzzTerminal: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
./a.out
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
`;

const code: { whileExample: string, whileResult: string, doWhileExample: string, doWhileResult: string, fizzBuzz: string, fizzBuzzTerminal: string } = 
{ whileExample, whileResult, doWhileExample, doWhileResult, fizzBuzz, fizzBuzzTerminal, };

export { code };