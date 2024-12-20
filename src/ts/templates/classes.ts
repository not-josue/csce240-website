import { STD } from "@ts/constants";

const step1: string =
`
// Copyright 2024 CSCE240

#ifndef D_ARRAY_H
#define D_ARRAY_H

#include <iostream>

using std::cout;
using std::endl;

namespace csce_240 {

template <class T>
class DynamicArray {
 public:
  // TODO
 private:
  int size;
  int capacity;
  T* array;

}  // namespace csce_240

#endif
`

const step2: string =
`
// constructor
DynamicArray() : size(0), capacity(10), array(new T[capacity]) {}
// copy constructor
DynamicArray(const DynamicArray& el)
    : size(el.size), capacity(el.capacity), array(new T[capacity]) {
  for (int i = 0; i < size; ++i) {
    array[i] = el.array[i];
  }
}
// destructor
~DynamicArray() {
  if (array != nullptr) delete[] array;
}
`

const step3Acc: string =
`
int GetSize() const { return size; }
int GetCapacity() const { return capacity; }
`

const step3Op: string =
`
// operator overload
DynamicArray& operator=(const DynamicArray& el) {
  size = el.size;
  capacity = el.capacity;

  delete[] array;

  for (int i = 0; i < size; ++i) {
    array[i] = el.array[i];
  }

  return *this;
}
`

const step4Add: string =
`
// public utilities
void Add(T el) {
  if (size == capacity) {
    Resize();
    array[size] = el;
    capacity *= 2;
    ++size;
  } else {
    array[size] = el;
    ++size;
  }
}
`

const step4Resize: string =
`
// private utilities
void Resize() {
  T* temp = new T[capacity * 2];

  // fill array
  for (int i = 0; i < size; ++i) {
    temp[i] = array[i];
  }

  delete[] array;
  array = temp;
}
`

const step4Print: string =
`
void Print() const {
  for (int i = 0; i < size; ++i) {
    cout << array[i] << " ";
  }
  cout << endl;
}
`

const step5Test: string =
`
// Copyright 2024 CSCE240

#include <iostream>

#include "darray.h"

using csce_240::DynamicArray;
using std::cout;
using std::endl;

int main() {
  DynamicArray<int> array;
  for (int i = 0; i < 15; ++i) {
    array.Add(i);
  }
  array.Print();
  cout << endl;

  DynamicArray<int> another(array);
  another.Print();
  cout << endl;

  DynamicArray<int> final = another;
  final.Print();

  return 0;
}
`

const step5Term: string =
`
g++ -Wall -std=c++${STD} driver.cc
./a.out
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 

0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 

0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 
`

const code: { step1: string, step2: string, step3Acc: string, step3Op: string, step4Add: string, step4Resize: string,
    step4Print: string, step5Test: string, step5Term: string
 } = 
{ step1, step2, step3Acc, step3Op, step4Add, step4Resize, step4Print, step5Test, step5Term }

export {code}