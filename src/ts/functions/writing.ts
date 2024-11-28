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

const exampleSetup: string =
`
// Copyright 2024 CSCE240
#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int main() {
  
  return 0;
}
`;

const exampleProto: string =
`
// Copyright 2024 CSCE240
#include <iostream>

using std::cin;
using std::cout;
using std::endl;

void Greet();
int Add(int x, int y);
int Subtract(int x, int y);
int Multiply(int x, int y);
double Divide(double num, double denom);
int Square(int x);

int main() {
  
  return 0;
}
`;

const exampleImp: string =
`
void Greet() {
  cout << "------------------------------------" << endl;
  cout << "Welcome to the CSCE240 Calculator!!!" << endl;
  cout << "------------------------------------\\n" << endl;
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

const exampleTest1: string =
`
int main() {
  Greet();
  bool add_test = Add(4, 5) == 9;
  bool subtract_test = Subtract(0, 10) == -10;
  bool multiply_test = Multiply(3, 4) == 12;
  bool divide_test = Divide(1, 0) == 0;
  bool square_test = Square(5) == 25;

  cout << "Add: " << add_test << "\\n"
       << "Subtract: " << subtract_test << "\\n"
       << "Multiply: " << multiply_test << "\\n"
       << "Divide: " << divide_test << "\\n"
       << "Square: " << square_test << endl;

  return 0;
}
`;

const exampleTerm1: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
./a.out
------------------------------------
Welcome to the CSCE240 Calculator!!!
------------------------------------

Add: 1
Subtract: 1
Multiply: 1
Divide: 1
Square: 1
`;

const exampleTest2: string =
`
int main() {
  cout << Divide(1, 2) << endl;
  cout << Divide(0, 2) << endl;
  cout << Divide(10, 5) << endl;
  cout << Divide(-1, 1) << endl;

  return 0;
}
`;

const exampleTerm2: string =
`
g++ -Wall -std=c++17 driver.cc
./a.out
0.5
0
2
-1
`;

const exampleFeInc: string = 
`
// Copyright 2024 CSCE240
#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;
`;

const exampleFeLast: string =
`
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

const outputStart: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++17 driver.cc
./a.out
`;

const outputWrongOption: string =
`
------------------------------------
Welcome to the CSCE240 Calculator!!!
------------------------------------

Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
9
Please enter an integer for the available options
`;

const outputAdd: string =
`
Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
1
Enter the first integer to add: 
5
Enter the second integer to add: 
5
5 + 5 = 10
`;

const outputSub: string =
`
Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
2
Enter the first integer to subtract: 
5
Enter the second integer to subtract: 
10
5 - 10 = -5
`;

const outputMul: string =
`
Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
3
Enter the first integer to multiply: 
7
Enter the second integer to multiply: 
7
7 * 7 = 49
`;

const outputDiv: string =
`
Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
4
Enter the numerator: 
100
Enter the denominator: 
20
100 / 20 = 5
`;

const outputSquare: string =
`
Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
5
Enter the integer you would like to square: 
9
9^2 = 81
`;

const outputQuit: string =
`
Enter 1: To Add
Enter 2: To Subtract
Enter 3: To Multiply
Enter 4: To Divide
Enter 5: To Square
Enter 0: To Quit
0
Calculator powering off...
`;

const code: { howExample: string, howTerminal: string, exampleSetup: string, exampleProto: string, 
  exampleImp: string, exampleTest1: string, exampleTerm1: string, exampleTest2: string, exampleTerm2: string, 
  exampleFeInc: string, exampleFeLast: string, outputStart: string, outputWrongOption: string, 
  outputAdd: string, outputSub: string, outputMul: string, outputDiv: string, outputSquare: string, 
  outputQuit: string,
 } = 
{ howExample, howTerminal, exampleSetup, exampleProto, exampleImp, exampleTest1, exampleTerm1, 
  exampleTest2, exampleTerm2, exampleFeInc, exampleFeLast, outputStart, outputWrongOption, 
  outputAdd, outputSub, outputMul, outputDiv, outputSquare, outputQuit,
};

export { code };