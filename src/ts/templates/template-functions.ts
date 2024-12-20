import { STD } from "@ts/constants";

const step1: string =
`
// Copyright 2024 CSCE240

#include <iostream>
using std::cout;
using std::endl;

template <typename T>
void Print(const T*, int);

template <typename T>
void Reverse(T*, int);

template <typename T>
void Swap(T*, int, int);
`

const step2Print: string =
`
template <typename T>
void Print(const T* array, int size) {
  for (int i = 0; i < size; ++i) {
    cout << array[i] << " ";
  }
  cout << endl;
}
`

const step2Swap: string =
`
template <typename T>
void Swap(T* array, int i, int j) {
  T temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
`

const step2Reverse: string =
`
template <typename T>
void Reverse(T* array, int size) {
  int i = 0, j = size - 1;
  while (i < j) {
    Swap(array, i, j);
    ++i, --j;
  }
}
`

const step3Main: string =
`
int main() {
  const int kSize = 5;

  char char_test[kSize] = "csce";
  int int_test[kSize] = {1, 2, 3, 4, 5};
  double dub_test[kSize] = {1.1, 2.1, 3.1, 4.1, 5.1};

  Reverse(char_test, kSize - 1);
  Reverse(int_test, kSize);
  Reverse(dub_test, kSize);

  Print(char_test, kSize);
  Print(int_test, kSize);
  Print(dub_test, kSize);

  return 0;
}
`

const step3Term: string =
`
g++ -Wall -std=c++${STD} driver.cc
./a.out
e c s c  
5 4 3 2 1 
5.1 4.1 3.1 2.1 1.1 
`

const code: { step1: string, step2Print: string, step2Swap: string, 
    step2Reverse: string, step3Main: string, step3Term: string,
} =
{ step1, step2Print, step2Swap, step2Reverse, step3Main, step3Term }

export { code }