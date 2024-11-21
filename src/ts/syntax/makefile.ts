import { STD } from "@ts/constants";

const multiRuleMake: string =
`
# Compile
hello.o : hello.cc
    g++ -c -Wall -std=c++${STD} hello.cc

# Link and Execute
hello : hello.o
    g++ -Wall -std=c++${STD} hello.o -o hello
    ./hello
`;

const multiRuleSource: string =
`
// Copyright 2024 CSCE240
#include <iostream>

using std::cout;
using std::endl;

int main() {
  cout << "Hello makefile!" << endl;
  return 0;
}
`;

const multiRuleTerminal: string =
`
make hello
g++ -c -Wall -std=c++${STD} hello.cc
g++ -Wall -std=c++${STD} hello.o -o hello
./hello
Hello makefile!
`;

const cleanMake: string =
`
# Variables
compiler = g++
flags = -Wall -std=c++${STD}
compile = $(compiler) $(flags) -c
link = $(compiler) $(flags)

# Compile
hello.o : hello.cc
	  $(compile) $<

# Link and Execute
hello : hello.o
	  $(link) $^ -o $@
	  ./$@

# Clean Folder
clean :
	  rm *.o hello
`;

const cleanSource: string =
`
// Copyright 2024 CSCE240
#include <iostream>

using std::cout;
using std::endl;

int main() {
  cout << "Hello makefile!" << endl;
  cout << "Thanks for being around!" << endl;
  return 0;
}

`;

const cleanTerminal: string =
`
make hello
g++ -Wall -std=c++${STD} -c hello.cc
g++ -Wall -std=c++${STD} hello.o -o hello
./hello
Hello makefile!
Thanks for being around!
make clean
rm *.o hello
`;

const code: { multiRuleMake: string, multiRuleSource: string, multiRuleTerminal: string, cleanMake: string, cleanSource: string, cleanTerminal: string } = 
{ multiRuleMake, multiRuleSource, multiRuleTerminal, cleanMake, cleanSource, cleanTerminal };

export { code };