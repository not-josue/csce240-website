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
  int size_;
  int capacity_;
  T* array_;
};

}  // namespace csce_240

#endif
`

const step2: string =
`
// constructor
DynamicArray() : size_(0), capacity_(10), array_(new T[capacity_]) {}
// copy constructor
DynamicArray(const DynamicArray& el)
    : size_(el.size_), capacity_(el.capacity_), array_(new T[capacity_]) {
  for (int i = 0; i < size_; ++i) {
    array_[i] = el.array_[i];
  }
}
// destructor
~DynamicArray() {
  if (array_ != nullptr) delete[] array_;
}
`

const step3Acc: string =
`
int GetSize() const { return size_; }
int GetCapacity() const { return capacity_; }
`

const step3Op: string =
`
// operator overload
DynamicArray& operator=(const DynamicArray& el) {
  size_ = el.size_;
  capacity_ = el.capacity_;

  delete[] array_;

  for (int i = 0; i < size_; ++i) {
    array_[i] = el.array_[i];
  }

  return *this;
}
`

const step4Add: string =
`
// public utilities
void Add(T el) {
  if (size_ == capacity_) {
    Resize_();
    array_[size_] = el;
    capacity_ *= 2;
    ++size_;
  } else {
    array_[size_] = el;
    ++size_;
  }
}
`

const step4Resize: string =
`
// private utilities
void Resize_() {
  T* temp = new T[capacity_ * 2];

  // fill array
  for (int i = 0; i < size_; ++i) {
    temp[i] = array_[i];
  }

  delete[] array_;
  array_ = temp;
}
`

const step4Print: string =
`
void Print() const {
  for (int i = 0; i < size_; ++i) {
    cout << array_[i] << " ";
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