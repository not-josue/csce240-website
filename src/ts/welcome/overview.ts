import { STD } from "@ts/constants";

const makefile: string = 
`
flags = -std=c++${STD} -Wall

hello.o : hello.cc hello.h
	g++ $(flags) -c $<

driver.o : driver.cc hello.h
	g++ $(flags) -c $<

driver : driver.o hello.o
	g++ $(flags) $^
	./a.out

clean:
	rm *.o a.out
`;

const header: string =
`
// Copyright 2024 CSCE240

#ifndef HELLO_H_
#define HELLO_H_

void GreetWorld();
void GreetSpanish();

#endif
`;

const cc: string =
`
// Copyright 2024 CSCE240

#include "hello.h"

#include <iostream>

using std::cout;
using std::endl;

// Function to greet the world
void GreetWorld() { cout << "Hello World!" << endl; }

// Function to greet the world in Spanish
void GreetSpanish() { cout << "¡Hola Mundo!" << endl; }
`;

const driver: string =
`
// Copyright 2024 CSCE240

#include "hello.h"

int main() {
  GreetWorld();
  GreetSpanish();
  return 0;
}
`;

const terminal: string = 
`
make driver
g++ -std=c++${STD} -Wall -c driver.cc
g++ -std=c++${STD} -Wall -c hello.cc
g++ -std=c++${STD} -Wall driver.o hello.o
./a.out
Hello World!
¡Hola Mundo!
`;

const code : { makefile: string, header: string, cc: string, driver: string, terminal: string } = {
    makefile: makefile,
    header: header,
    cc: cc,
    driver: driver,
    terminal: terminal,
}

export {code};