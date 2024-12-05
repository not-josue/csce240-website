import { STD } from "@ts/constants";

const header: string =
`
// Copyright 2024 CSCE240

#ifndef CALCULATOR_H_
#define CALCULATOR_H_

void Greet();
void FrontEnd();
int Add(int x, int y);
int Subtract(int x, int y);
int Multiply(int x, int y);
double Divide(double num, double denom);
int Square(int x);

#endif
`;

const source: string =
`
// Copyright 2024 CSCE2024

#include "calculator.h"

#include <iostream>

using std::cin;
using std::cout;
using std::endl;

void Greet() {
  cout << "------------------------------------" << endl;
  cout << "Welcome to the CSCE240 Calculator!!!" << endl;
  cout << "------------------------------------\\n" << endl;
}

void FrontEnd() {
  cout << "Enter 1: To Add" << endl;
  cout << "Enter 2: To Subtract" << endl;
  cout << "Enter 3: To Multiply" << endl;
  cout << "Enter 4: To Divide" << endl;
  cout << "Enter 5: To Square" << endl;
  cout << "Enter 0: To Quit" << endl;
}

int Add(int x, int y) { return x + y; }

int Subtract(int x, int y) { return x - y; }

int Multiply(int x, int y) { return x * y; }

double Divide(double num, double denom) {
  if (num == 0 || denom == 0) {
    return 0;
  } else {
    return num / denom;
  }
}

int Square(int x) { return x * x; }
`;

const driver: string =
`
// Copyright 2024 CSCE240

#include <iostream>

#include "calculator.h"

using std::cin;
using std::cout;
using std::endl;

int main() {
  Greet();

  bool run_program = true;

  while (run_program) {
    FrontEnd();

    int input;
    cin >> input;

    switch (input) {
      case 0:
        run_program = false;
        break;
      case 1:  // Add
        cout << "Enter the first integer to add: " << endl;
        int first_add;
        cin >> first_add;

        cout << "Enter the second integer to add: " << endl;
        int second_add;
        cin >> second_add;

        cout << first_add << " + " << second_add << " = "
             << Add(first_add, second_add) << "\\n"
             << endl;
        break;
      case 2:  // Subtract
        cout << "Enter the first integer to subtract: " << endl;
        int first_sub;
        cin >> first_sub;

        cout << "Enter the second integer to subtract: " << endl;
        int second_sub;
        cin >> second_sub;

        cout << first_sub << " - " << second_sub << " = "
             << Subtract(first_sub, second_sub) << "\\n"
             << endl;
        break;
      case 3:  // Multiply
        cout << "Enter the first integer to multiply: " << endl;
        int first_mul;
        cin >> first_mul;

        cout << "Enter the second integer to multiply: " << endl;
        int second_mul;
        cin >> second_mul;

        cout << first_mul << " * " << second_mul << " = "
             << Multiply(first_mul, second_mul) << "\\n"
             << endl;
        break;
      case 4:  // Divide
        cout << "Enter the numerator: " << endl;
        int num;
        cin >> num;

        cout << "Enter the denominator: " << endl;
        int denom;
        cin >> denom;

        cout << num << " / " << denom << " = " << Divide(num, denom) << "\\n"
             << endl;
        break;
      case 5:  // Square
        cout << "Enter the integer you would like to square: " << endl;
        int square;
        cin >> square;

        cout << square << "^2 = " << Square(square) << "\\n" << endl;
        break;
      default:
        cout << "Please enter an integer for the available options\\n" << endl;
    }
  }

  cout << "Calculator powering off..." << endl;

  return 0;
}
`;

const makefile: string =
`
# Variables
compiler = g++
flags = -Wall -std=c++${STD}
compile = $(compiler) $(flags) -c
link = $(compiler) $(flags)

# Compile
calculator.o : calculator.cc calculator.h
	$(compile) $<

# Compile
driver.o : driver.cc calculator.h
	$(compile) $<

# Link and Execute
driver : driver.o calculator.o
	$(link) $^
	./a.out

# Clean Folder
clean :
	rm *.o hello
`;

const run: string =
`
make driver
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} -c calculator.cc
g++ -Wall -std=c++${STD} driver.o calculator.o
./a.out
------------------------------------
Welcome to the CSCE240 Calculator!!!
------------------------------------

Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
1
Enter the first integer to add: 
2
Enter the second integer to add: 
2
2 + 2 = 4

Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
0
Calculator powering off...
`;

const code: { header: string, source: string, driver: string, makefile: string, run: string } =
{ header, source, driver, makefile, run };

export { code };