import { STD } from "@ts/constants";

const step1: string =
`
// Copyright 2024 CSCE240

#include <iostream>
using std::cout;
using std::endl;

void MergeSort(int*, int);
void Merge(int*, int*, int, int*, int);
void Print(const int*, int);

int main() {
  const int kSize = 5;
  int array[kSize] = {10, 8, 6, 4, 2};

  MergeSort(array, kSize);
  Print(array, kSize);

  return 0;
}
`

const step2MergeSort: string =
`
void MergeSort(int* array, int size) {
  // check if array has one element
  if (size < 2) return;

  // calculate mid index
  int mid = size / 2;

  // determine sizes of left and right subarrays
  const int kLeftSize = mid;
  const int kRightSize = size - mid;

  // create left and right subarrays
  int* left = new int[kLeftSize];
  int* right = new int[kRightSize];

  // populate left subarray
  for (int i = 0; i < mid; ++i) {
    left[i] = array[i];
  }

  // populate right subarray
  for (int i = mid; i < size; ++i) {
    right[i - mid] = array[i];
  }

  // recursively create smaller subarrays
  MergeSort(left, kLeftSize);
  MergeSort(right, kRightSize);

  // merge subarrays
  Merge(array, left, kLeftSize, right, kRightSize);

  // free dynamically allocated memory
  delete[] left;
  delete[] right;
}
`

const step2Merge: string =
`
void Merge(int* array, int* left_array, int left_size, int* right_array,
           int right_size) {
  int i = 0;  // left array index
  int j = 0;  // right array index
  int k = 0;  // merged array's index

  // merge elements into the array in sorted order
  while (i < left_size && j < right_size) {
    // compare elements from left and right subarrays
    if (left_array[i] <= right_array[j]) {
      array[k] = left_array[i];
      ++i;
      ++k;
    } else {
      array[k] = right_array[j];
      ++j;
      ++k;
    }
  }

  // copy remaining elements from left subarray
  while (i < left_size) {
    array[k] = left_array[i];
    ++i;
    ++k;
  }

  // copy remaining elements from right subarray
  while (j < right_size) {
    array[k] = right_array[j];
    ++j;
    ++k;
  }
}
`

const step2Print: string =
`
void Print(const int* array, int size) {
  for (int i = 0; i < size; ++i) {
    cout << array[i] << " ";
  }
  cout << endl;
}
`

const step3: string =
`
g++ -Wall -std=c++${STD} driver.cc
./a.out
2 4 6 8 10 
`

const code: { step1: string, step2MergeSort: string, step2Merge: string, step2Print: string, step3: string } = 
{ step1, step2MergeSort, step2Merge, step2Print, step3 }

export { code }