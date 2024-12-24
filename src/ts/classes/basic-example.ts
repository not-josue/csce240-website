import { STD } from "@ts/constants";

const step1: string =
`
character.o : character.cc character.h
	g++ -Wall -std=c++${STD} -c character.cc

driver.o : driver.cc character.h 
	g++ -Wall -std=c++${STD} -c driver.cc

driver: driver.o character.o
	g++ -Wall -std=c++${STD} driver.o character.o
	./a.out

clean :
	rm *.o a.out
`

const step2Base: string =
`
// Copyright 2024 CSCE240

#ifndef CHARACTER_H_
#define CHARACTER_H_

#include <string>
using std::string;

class Character {
 public:
  // Constructor name, hp, attack, defense
  explicit Character(string = "none", int = 0, int = 0, int = 0);
  // Copy Constructor
  Character(const Character&);
  // Destructor
  ~Character() {
    if (bag_ != nullptr) delete[] bag_;
  }

  // Accessors
  string GetName() const { return name_; }
  int GetHp() const { return hp_; }
  int GetAtk() const { return attack_; }
  int GetDef() const { return defense_; }

  // Mutators
  void SetName(string);
  void SetHp(int);
  void SetAtk(int);
  void SetDef(int);

  // Utilities
  void AddToBag(string);
  void PrintBag() const;

 private:
  string name_;
  int hp_;
  int attack_;
  int defense_;

  int bag_capacity_;
  string* bag_;
  int current_bag_size;
};

#endif
`

const step2Data: string =
`
string name_;
int hp_;
int attack_;
int defense_;

int bag_capacity_;
string* bag_;
int current_bag_size;
`

const step3Import: string =
`
// Copyright 2024 CSCE240

#include "character.h"

#include <iostream>
#include <string>

using std::cout;
using std::endl;
using std::string;
`

const step3Setters: string =
`
// Mutators
void Character::SetName(string n) {
  if (n != "") {
    name_ = n;
  } else {
    name_ = "none";
  }
}

void Character::SetHp(int h) {
  if (h > 0) {
    hp_ = h;
  } else {
    hp_ = 0;
  }
}

void Character::SetAtk(int a) {
  if (a > 0) {
    attack_ = a;
  } else {
    attack_ = 0;
  }
}

void Character::SetDef(int d) {
  if (d > 0) {
    defense_ = d;
  } else {
    defense_ = 0;
  }
}
`

const step3Con: string =
`
// Constructor name, hp, attack, defence
Character::Character(string n, int h, int a, int d) {
  SetName(n);
  SetHp(h);
  SetAtk(a);
  SetDef(d);

  bag_capacity_ = 5;
  bag_ = new string[bag_capacity_];
  current_bag_size = 0;
}
`

const step3Copy: string =
`
// Copy Constructor
Character::Character(const Character& c) {
  name_ = c.name_;
  hp_ = c.hp_;
  attack_ = c.attack_;
  defense_ = c.defense_;

  bag_capacity_ = c.bag_capacity_;
  current_bag_size = c.current_bag_size;

  if (c.bag_ == nullptr) {
    bag_ = nullptr;  //  Handles cases where bag is NULL
  } else {
    bag_ = new string[bag_capacity_];
    for (int i = 0; i < current_bag_size; ++i) {
      bag_[i] = c.bag_[i];
    }
  }
}
`

const step3Add: string =
`
void Character::AddToBag(string item) {
  if (item == "" || current_bag_size == bag_capacity_) return;

  bag_[current_bag_size] = item;
  ++current_bag_size;
}
`

const step3Print: string =
`
void Character::PrintBag() const {
  if (current_bag_size == 0) return;

  for (int i = 0; i < current_bag_size; ++i) {
    cout << bag_[i] << endl;
  }
}
`

const step4Default: string =
`
// Copyright 2024 CSCE240

#include <iostream>

#include "character.h"

using std::cout;
using std::endl;

int main() {
  // Check Default Constructor
  cout << "Default Constructor Check" << endl;
  cout << "-------------------------" << endl;
  Character a;
  cout << "Name " << (a.GetName() == "none") << endl;
  cout << "HP " << (a.GetHp() == 0) << endl;
  cout << "Atk " << (a.GetAtk() == 0) << endl;
  cout << "Def " << (a.GetDef() == 0) << endl;
  cout << endl;

  return 0;
}
`

const step4DefaultTerm: string =
`
make driver
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} -c character.cc
g++ -Wall -std=c++${STD} driver.o character.o
./a.out
Default Constructor Check
-------------------------
Name 1
HP 1
Atk 1
Def 1
`

const step4Over: string =
`
// Check Overloaded Constructor
cout << "Overloaded Constructor Check" << endl;
cout << "----------------------------" << endl;
Character b("Zidane", 100, 40, 20);
cout << "Name " << (b.GetName() == "Zidane") << endl;
cout << "HP " << (b.GetHp() == 100) << endl;
cout << "Atk " << (b.GetAtk() == 40) << endl;
cout << "Def " << (b.GetDef() == 20) << endl;
cout << endl;
`

const step4OverTerm: string =
`
Overloaded Constructor Check
----------------------------
Name 1
HP 1
Atk 1
Def 1
`

const step4Copy: string =
`
// Check Copy Constructor
cout << "Copy Constructor Check" << endl;
cout << "----------------------" << endl;
Character c(b);
cout << "Same Name " << (c.GetName() == "Zidane") << endl;
cout << "Same HP " << (c.GetHp() == 100) << endl;
cout << "Same Atk " << (c.GetAtk() == 40) << endl;
cout << "Same Def " << (c.GetDef() == 20) << endl;
c.SetName("Vivi");
c.SetHp(80);
c.SetAtk(30);
c.SetDef(15);
cout << "Name Change " << (b.GetName() != c.GetName()) << endl;
cout << "Hp Change " << (b.GetHp() != c.GetHp()) << endl;
cout << "Atk Change " << (b.GetAtk() != c.GetAtk()) << endl;
cout << "Def Change " << (b.GetDef() != c.GetDef()) << endl;
cout << endl;
`

const step4CopyTerm: string =
`
Copy Constructor Check
----------------------
Same Name 1
Same HP 1
Same Atk 1
Same Def 1
Name Change 1
Hp Change 1
Atk Change 1
Def Change 1
`

const step4Bag: string =
`
// Bag Check
cout << "Bag Check" << endl;
cout << "---------" << endl;
a.AddToBag("sword");
a.AddToBag("rod");
a.AddToBag("potion");
a.AddToBag("special pendant");
a.AddToBag("");  // should not add
a.AddToBag("running shoes");
a.AddToBag("should not add");  // should not add, reached capacity limit
a.PrintBag();
`

const step4BagTerm: string =
`
Bag Check
---------
sword
rod
potion
special pendant
running shoes
`

const code: { step1: string, step2Base: string, step2Data: string, step3Import: string, step3Setters: string, 
  step3Con: string, step3Copy: string, step3Add: string, step3Print: string, step4Default: string, 
  step4DefaultTerm: string, step4Over: string, step4OverTerm: string, step4Copy: string, step4CopyTerm: string, 
  step4Bag: string, step4BagTerm: string,
} =
{ step1, step2Base, step2Data, step3Import, step3Setters, step3Con, step3Copy, step3Add, step3Print, step4Default, step4DefaultTerm,
  step4Over, step4OverTerm, step4Copy, step4CopyTerm, step4Bag, step4BagTerm,
 }

export { code }