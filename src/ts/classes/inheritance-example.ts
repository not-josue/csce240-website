import { STD } from "@ts/constants";

const mageHeader: string =
`
// Copyright 2024 CSCE240

#ifndef MAGE_H_
#define MAGE_H_

#include <ostream>

#include "character.h"
#include "weapon.h"

using std::ostream;

class Mage : public Character {
 public:
  // Constructor
  Mage();
  // Friend
  friend ostream& operator<<(ostream&, const Mage&);
  // Redefine Mutator
  Mage& SetWeapon(Weapon);
};

#endif
`

const thiefHeader: string =
`
// Copyright 2024 CSCE240

#ifndef THIEF_H_
#define THIEF_H_

#include <ostream>

#include "character.h"
#include "weapon.h"

using std::ostream;

class Thief : public Character {
 public:
  // Constructor
  Thief();
  // Friend
  friend ostream& operator<<(ostream&, const Thief&);
  // Redefine Mutator
  Thief& SetWeapon(Weapon);
};

#endif
`

const warriorHeader: string =
`
// Copyright 2024 CSCE240

#ifndef WARRIOR_H_
#define WARRIRO_H_

#include <iostream>

#include "character.h"
#include "weapon.h"

using std::ostream;

class Warrior : public Character {
 public:
  // Constructor
  Warrior();
  // Friend
  friend ostream& operator<<(ostream&, const Warrior&);
  // Redefine Mutator
  Warrior& SetWeapon(Weapon);
};

#endif
`

const tester: string =
`
int main() {
  Weapon w("Sleepstrike", "dagger", 50);
  Potion p("potion");
  Potion s("super potion");

  // Assignment Operator
  Mage a;
  a.SetWeapon(w);
  a.AddToBag(p);
  cout << a << endl;

  Warrior b;
  b.SetWeapon(w);
  cout << b << endl;

  Thief c;
  c.SetWeapon(w);
  cout << c;

  return 0;
}
`

const term: string =
`
make driver
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} -c mage.cc
g++ -Wall -std=c++${STD} -c thief.cc
g++ -Wall -std=c++${STD} -c warrior.cc
g++ -Wall -std=c++${STD} driver.o character.o mage.o potion.o thief.o warrior.o weapon.o
./a.out
A Mage can only be equipped a Weapon of type rod
Mage Vivi 50
wooden rod +1 rod
potion +20 

A Warrior can only be equipped a Weapon of type sword
Warrior Steiner 50
wooden sword +1 sword
Your Bag is Empty

Thief Zidane 50
Sleepstrike +50 dagger
Your Bag is Empty
`

const code: { mageHeader: string, thiefHeader: string, warriorHeader: string, tester: string, term: string } =
{ mageHeader, thiefHeader, warriorHeader, tester, term }

export { code }