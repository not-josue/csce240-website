const goodVar: string =
`
// Copyright 2024 CSCE2024
int main() {
  int my_var;
  return 0;
}
`;

const badVar: string =
`
// Copyright 2024 CSCE2024
int main() {
  int myVar;
  return 0;
}
`;

const terminalVar: string =
`
cpplint driver.cc
Done processing driver.cc
`;

const cascade: string =
`
// Copyright 2024 CSCE2024
#include <iostream>

int main() {
  int x, y, z;
  x = y = z = 10;

  std::cout << x << " " << y << " " << z << std::endl;

  return 0;
}
`;

const cascadeTerminal: string =
`
g++ driver.cc
./a.out
10 10 10
`;

const goodConst: string =
`
// Copyright 2024 CSCE2024
int main() {
  const double kPie = 3.14;
  return 0;
}
`;

const badConst: string =
`
// Copyright 2024 CSCE2024
int main() {
  const double PIE = 3.14;
  return 0;
}
`;

const terminalConst: string =
`
cpplint driver.cc
Done processing driver.cc
`;

const cin: string = 
`
// Copyright 2024 CSCE2024
#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int main() {
  cout << "What is your favorite number: ";
  int fave_number;
  cin >> fave_number;
  cout << "Favorite Number: " << fave_number << endl;

  return 0;
}
`;

const cinTerminal: string =
`
g++ driver.cc
./a.out
What is your favorite number: 10
Favorite Number: 10
`;

const parse: string =
`
// Copyright 2024 CSCE2024
#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int main() {
  cout << "Enter current date (mm/dd/yyyy):" << endl;
  int month = 0, day = 0, year = 0;
  char first_delimiter = '-';
  char second_delimiter = first_delimiter;

  cin >> month >> first_delimiter >> day >> second_delimiter >> year;
  cout << month << first_delimiter << day << second_delimiter << year << endl;

  return 0;
}
`;

const parseTerminal: string =
`
g++ driver.cc
./a.out
Enter current date (mm/dd/yyyy):
11/20/2024
11/20/2024
`;

const code: { goodVar: string, badVar: string, terminalVar: string, cascade: string, cascadeTerminal: string, 
    goodConst: string, badConst: string, terminalConst: string, cin: string, cinTerminal : string, parse: string, parseTerminal: string, } =
{goodVar, badVar, terminalVar, cascade, cascadeTerminal, goodConst, badConst, terminalConst, cin, cinTerminal, parse, parseTerminal};

export { code };