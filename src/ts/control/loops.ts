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
g++ driver.cc
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

const code: { whileExample: string, whileResult: string, doWhileExample: string, doWhileResult: string, } = 
{ whileExample, whileResult, doWhileExample, doWhileResult, };

export { code };