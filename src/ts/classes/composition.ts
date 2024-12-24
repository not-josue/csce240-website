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

const code: { step1: string, step2Base: string, step2Data: string, } =
{ step1, step2Base, step2Data, }

export { code }