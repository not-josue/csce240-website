const main: string =
`
int main() { return 0; }
`;

const printing: string =
`
// Copyright 2024 CSCE2024
#include <iostream>  // Preprocessor Directive

using std::cout;  // Declaration for Namespace Scoping

int main() {  // Main Function
  cout << "Hello USC!"; // Printing with cout

  return 0;
}
`;

const localCout: string =
`
// Copyright 2024 CSCE2024
#include <iostream>  // Preprocessor Directive

int main() {  // Main Function
  std::cout << "I can still use cout!";

  return 0;
}
`;

const endl: string = 
`
// Copyright 2024 CSCE2024
#include <iostream>

using std::cout;
using std::endl;

int main() {
  cout << "Make: Audi\\nModel: RS5\\nHP: 444\\nTorque: 442" << endl;
  cout << "Which color would you like to see?" << endl;
  return 0;
}
`

const endlTerminal: string =
`
g++ driver.cc
./a.out
Make: Audi
Model: RS5
HP: 444
Torque: 442
Which color would you like to see?
`;

const code: { main: string, printing: string, localCout: string, endl: string, endlTerminal: string } = 
{ main, printing, localCout, endl, endlTerminal };

export { code };