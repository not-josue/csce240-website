import { STD } from "@ts/constants";

const enemyHeader: string =
`
// Copyright 2024 CSCE240

#ifndef ENEMY_H_
#define ENEMY_H_

#include <ostream>
#include <string>

using std::ostream;
using std::string;

namespace csce240 {

class Enemy {
 public:
  // Constructor - name, hp, level, atk power
  explicit Enemy(string = "none", int = 50, int = 1, int = 1);
  // Destructor
  virtual ~Enemy() {}
  // Friend
  friend ostream& operator<<(ostream&, const Enemy&);

  // Accessors
  string GetName() const { return name_; }
  int GetHp() const { return hp_; }
  int GetLevel() const { return level_; }
  int GetAtkPower() const { return atk_power_; }

  // Mutators
  void SetHp(int);
  void SetLevel(int);
  void SetAtkPower(int);

  // Other Function
  virtual void Attack() = 0;

 protected:
  // Child Classes will have constant names
  void SetName(string);

 private:
  string name_;
  int hp_;
  int level_;
  int atk_power_;
};

}  // namespace csce240

#endif
`

const bombHeader: string =
`
// Copyright 2024 CSCE240

#ifndef BOMB_H_
#define BOMB_H_

#include "enemy.h"

namespace csce240 {

class Bomb : public Enemy {
 public:
  // Construct - hp, level, atk power
  explicit Bomb(int = 50, int = 1, int = 1);
  // Override
  void Attack() override;
};

}  // namespace csce240

#endif
`

const cactuarHeader: string =
`
// Copyright 2024 CSCE240

#ifndef CACTUAR_H_
#define CACTUAR_H_

#include "enemy.h"

namespace csce240 {

class Cactuar : public Enemy {
 public:
  // Constructor - hp, level
  explicit Cactuar(int = 50, int = 1);
  // Redifine Mutator
  void SetAtkPower(int);
  // Override
  void Attack() override;
};

}  // namespace csce240

#endif
`

const test: string =
`
int main() {
  cout << endl;
  Bomb b(100, 10, 10);
  cout << b << endl;
  b.Attack();

  cout << endl;

  Cactuar c(100, 20);
  cout << c << endl;
  c.Attack();

  cout << endl;

  c.SetAtkPower(2000);
  c.Attack();

  return 0;
}
`

const term: string =
`
make driver
g++ -Wall -std=c++${STD} -c driver.cc
g++ -Wall -std=c++${STD} -c bomb.cc
g++ -Wall -std=c++${STD} -c cactuar.cc
g++ -Wall -std=c++${STD} -c enemy.cc
g++ -Wall -std=c++${STD} driver.o bomb.o cactuar.o enemy.o
./a.out

Bomb
Hp: 100
Level: 10
Inferno Crash does 20 damage.

Cactuar
Hp: 100
Level: 20
1000 Needles does 1000 damage.

Cactuars cannot change their attack power.
1000 Needles does 1000 damage.
`

const code: { enemyHeader: string, bombHeader: string, cactuarHeader: string, test: string, term: string, } =
{ enemyHeader, bombHeader, cactuarHeader, test, term, }

export { code }