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
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
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

const breakExample: string =
`
// Copyright 2024 CSCE240
#include <iostream>
using std::cout;
using std::endl;

int main() {
  // Lowest Common Multiples of x and y using a max range of kRange
  const int kRange = 100;
  int x = 4, y = 5;
  // Assume no Least Common Multiple exists
  int lcm = 0;
  // Make looping faster by iterating by the max amount instead of 1
  // Used for demonstration in case you didn't know x and y
  int max = x > y ? x : y;

  // Start at the max value and increment by the max value
  for (int i = max; i <= kRange; i += max) {
    if (i % x == 0 && i % y == 0) {
      lcm = i;
      break;
    }
  }

  if (lcm == 0) {
    cout << "No Least Common Multiple found for " << x << " and " << y
         << " in a max range of " << kRange << "." << endl;
  } else {
    cout << "The Least Common Multiple for " << x << " and " << y << " is "
         << lcm << "." << endl;
  }
}
`;

const breakTerminal: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
./a.out
The Least Common Multiple for 4 and 5 is 20.
`;

const continueExample: string =
`
// Copyright 2024 CSCE240
#include <iostream>
using std::cout;
using std::endl;

int main() {
  // Print only odd numbers
  const int kRange = 10;

  for (int i = 1; i <= kRange; ++i) {
    if (i % 2 == 0) {
      continue;
    } else {
      cout << i << endl;
    }
  }
}
`;

const continueTerminal: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
./a.out
1
3
5
7
9
`;

const code: { whileExample: string, whileResult: string, doWhileExample: string, doWhileResult: string, fizzBuzz: string, fizzBuzzTerminal: string, 
breakExample: string, breakTerminal: string, continueExample: string, continueTerminal: string,
} = 
{ whileExample, whileResult, doWhileExample, doWhileResult, fizzBuzz, fizzBuzzTerminal, breakExample, breakTerminal, continueExample, continueTerminal };

export { code };