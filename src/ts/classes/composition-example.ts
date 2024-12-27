import { STD } from "@ts/constants"

const weaponHeader: string =
`
// Copyright 2024 CSCE240

#ifndef WEAPON_H_
#define WEAPON_H_

#include <ostream>
#include <string>

using std::ostream;
using std::string;

class Weapon {
 public:
  // Constructor - name, type, power
  explicit Weapon(string = "wooden sword", string = "sword", int = 1);
  // Friends
  friend ostream& operator<<(ostream&, const Weapon&);
  // Accessors
  string GetName() const { return name_; }
  string GetType() const { return type_; }
  int GetPower() const { return power_; }

  // Mutators
  Weapon& SetName(string);
  Weapon& SetType(string);
  Weapon& SetPower(int);

 private:
  string name_;
  string type_;
  int power_;
};

#endif
`

const weaponMutators: string =
`
// Mutators
Weapon& Weapon::SetName(string n) {
  if (n != "") {
    name_ = n;
  } else {
    name_ = "wooden sword";
  }
  return *this;
}

Weapon& Weapon::SetType(string t) {
  if (t == "dagger" || t == "rod" || t == "sword") {
    type_ = t;
  } else {
    type_ = "sword";
  }
  return *this;
}

Weapon& Weapon::SetPower(int p) {
  if (p > 0) {
    power_ = p;
  } else {
    power_ = 1;
  }
  return *this;
}
`

const potionHeader: string =
`
// Copyright 2024 CSCE240

#ifndef POTION_H_
#define POTION_H_

#include <ostream>
#include <string>

using std::ostream;
using std::string;

class Potion {
 public:
  // Constructor
  explicit Potion(string = "potion");
  // Friend
  friend ostream& operator<<(ostream&, const Potion&);

  // Accessor
  string GetName() const { return name_; }
  int GetPower() const { return power_; }

  // Mutator
  Potion& SetName(string);

 private:
  string name_;
  int power_;

  void SetPower(string);
};

#endif
`

const potionMutators: string =
`
// Mutators
Potion& Potion::SetName(string n) {
  if (n == "potion" || n == "super potion") {
    name_ = n;
  } else {
    name_ = "potion";
  }
  SetPower(name_);
  return *this;
}

void Potion::SetPower(string n) {
  if (n == "potion") {
    power_ = 20;
  } else {
    power_ = 40;
  }
}
`

const characterHeader: string = 
`
class Character {
 public:
  // Constructor
  explicit Character(string = "none", int = 50, const Weapon& = Weapon());
  // Copy Constructor
  Character(const Character&);
  // Destructor
  ~Character() {
    if (bag_ != nullptr) delete[] bag_;
  }

  // Friend / Operator Overload
  friend ostream& operator<<(ostream&, const Character&);
  Character& operator=(const Character&);

  // Accessors
  string GetName() const { return name_; }
  int GetHp() const { return hp_; }
  Weapon GetWeapon() const { return weapon_; }

  // Mutators
  Character& SetName(string);
  Character& SetHp(int);
  Character& SetWeapon(Weapon);

  // Utilities
  void AddToBag(Potion);
  void PrintBag() const;
  void UsePotion(string = "potion");

 private:
  string name_;
  int hp_;
  Weapon weapon_;

  int bag_capacity_;
  Potion* bag_;
  int current_bag_size;

  int IndexOf(string = "potion") const;
};

#endif
`

const characterMutators: string =
`
// Mutators
Character& Character::SetName(string n) {
  if (n != "") {
    name_ = n;
  } else {
    name_ = "none";
  }
  return *this;
}

Character& Character::SetHp(int h) {
  if (h > 0 && h <= 100) {
    hp_ = h;
  } else {
    hp_ = 50;
  }
  return *this;
}

Character& Character::SetWeapon(Weapon w) {
  weapon_ = w;
  return *this;
}
`

const characterCopy: string =
`
// Copy Constructor
Character::Character(const Character& c) {
  name_ = c.name_;
  hp_ = c.hp_;
  weapon_ = c.weapon_;

  bag_capacity_ = c.bag_capacity_;
  current_bag_size = c.current_bag_size;

  if (c.bag_ == nullptr) {
    bag_ = nullptr;
  } else {
    bag_ = new Potion[bag_capacity_];

    for (int i = 0; i < current_bag_size; ++i) {
      bag_[i] = c.bag_[i];
    }
  }
}
`

const characterOperator: string =
`
// Operator Overload
Character& Character::operator=(const Character& c) {
  name_ = c.name_;
  hp_ = c.hp_;
  weapon_ = c.weapon_;
  bag_capacity_ = c.bag_capacity_;
  current_bag_size = c.current_bag_size;

  // Release memory
  if (bag_ != nullptr) {
    delete[] bag_;
  }

  if (c.bag_ == nullptr) {
    bag_ = nullptr;
  } else {
    bag_ = new Potion[bag_capacity_];

    for (int i = 0; i < current_bag_size; ++i) {
      bag_[i] = c.bag_[i];
    }
  }

  return *this;
}
`

const characterUsePotion: string =
`
void Character::UsePotion(string s) {
  if (current_bag_size == 0) {
    cout << "Your Bag is Empty" << endl;
    return;
  }

  if (hp_ == 100) {
    cout << "You are already at Full Health" << endl;
    return;
  }

  int index = IndexOf(s);

  // Potion Not Found
  if (index == -1) {
    cout << s << " Not Found" << endl;
    return;
  }

  // Use Potion
  hp_ += bag_[index].GetPower();
  if (hp_ > 100) hp_ = 100;

  // Adjust Bag
  for (int i = index; i < current_bag_size - 1; ++i) {
    bag_[i] = bag_[i + 1];
  }
  --current_bag_size;
}
`

const test1: string =
`
// Copyright 2024 CSCE240

#include <iostream>

#include "character.h"
#include "potion.h"
#include "weapon.h"

using std::cout;
using std::endl;

int main() {
  Weapon w("Twin Blades", "dagger", 50);
  Potion p("potion");
  Potion s("super potion");

  cout << w << endl;
  cout << p << endl;
  cout << s << endl;

  return 0;
}
`

const term1: string =
`
make driver
g++ -Wall -std=c++${STD} -c weapon.cc
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} -c character.cc
g++ -Wall -std=c++${STD} -c potion.cc
g++ -Wall -std=c++${STD} driver.o character.o potion.o weapon.o
./a.out
Twin Blades +50 dagger
potion +20
super potion +40
`

const test2: string =
`
// Constructor
Character a("Zidane", 80, w);
cout << a << endl;
`

const term2: string =
`
make driver
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} driver.o character.o potion.o weapon.o
./a.out
Zidane 80
Twin Blades +50 dagger
Your Bag is Empty
`

const test3: string =
`
// Bag Functions
a.AddToBag(p);
a.AddToBag(s);
a.PrintBag();
cout << endl;

a.UsePotion("super potion");
cout << a;
`

const term3: string =
`
make driver
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} driver.o character.o potion.o weapon.o
./a.out
Zidane 80
Twin Blades +50 dagger
Your Bag is Empty

potion +20 super potion +40 

Zidane 100
Twin Blades +50 dagger
potion +20 
`

const test4: string =
`
// Copy Constructor
Character b(a);
b.AddToBag(p);

cout << a << endl;
cout << b;
`

const term4: string =
`
make driver
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} driver.o character.o potion.o weapon.o
./a.out
Zidane 80
Twin Blades +50 dagger
Your Bag is Empty

Zidane 80
Twin Blades +50 dagger
potion +20 
`

const test5: string =
`
// Assignment Operator
Character b = a;
b.AddToBag(p);

cout << a << endl;
cout << b;
`

const term5: string =
`
make driver
g++ -Wall -std=c++17 -c driver.cc
g++ -Wall -std=c++17 driver.o character.o potion.o weapon.o
./a.out
Zidane 80
Twin Blades +50 dagger
Your Bag is Empty

Zidane 80
Twin Blades +50 dagger
potion +20 
`

const code: {weaponHeader: string, weaponMutators: string, potionHeader: string, potionMutators: string, 
    characterHeader: string, characterMutators: string, characterCopy: string, characterOperator: string, 
    characterUsePotion: string, test1: string, term1: string, test2: string, term2: string, test3: string, 
    term3: string, test4: string, term4: string, test5: string, term5: string,
} =
{ weaponHeader, weaponMutators, potionHeader, potionMutators, characterHeader, characterMutators, 
    characterCopy, characterOperator, characterUsePotion, test1, term1, test2, term2, test3, term3,
    test4, term4, test5, term5,
 }

export { code }