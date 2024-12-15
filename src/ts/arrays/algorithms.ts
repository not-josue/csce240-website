import { STD } from "@ts/constants"

const makefile: string = 
`
# Built-in variables:
# $< = the first prerequisite
# $^ = all prerequisites
# $@ = the target

compiler = g++
flags = -Wall -std=c++${STD}
compile = $(compiler) -c
link = $(compiler) $(flags)

algorithms.o : algorithms.cc algorithms.h
    $(compile) $(flags) $<

driver.o : driver.cc algorithms.h
    $(compile) $(flags) $<

driver : driver.o algorithms.o
    $(link) $^
    ./a.out

clean :
    rm *.o a.out
`

const driverIndexOf: string = 
`
// Copyright 2024 CSCE240

#include <iostream>

#include "algorithms.h"
#include "namespaces.h"

using std::cout;
using std::endl;

int main() {
  const int kSize = 5;
  int arr1[kSize] = {2, 4, 6, 8, 10};
  cout << (IndexOf(arr1, kSize, 6) == 2) << endl;
  cout << (IndexOf(arr1, kSize, 5) == -1) << endl;
  char arr2[kSize] = "code";
  cout << (IndexOf(arr2, 'd') == 2) << endl;
  cout << (IndexOf(arr2, 'f') == -1) << endl;

  return 0;
}
`

const testIndexOf: string = 
`
make driver
g++ -c -Wall -std=c++${STD} driver.cc
g++ -c -Wall -std=c++${STD} algorithms.cc
g++ -Wall -std=c++${STD} driver.o algorithms.o
./a.out
1
1
1
1
`

const driverContains: string =
`
const int kSize = 5;
int arr1[kSize] = {2, 4, 6, 8, 10};
cout << (Contains(arr1, kSize, 6) == true) << endl;
cout << (Contains(arr1, kSize, 5) == false) << endl;
char arr2[kSize] = "code";
cout << (Contains(arr2, 'd') == true) << endl;
cout << (Contains(arr2, 'f') == false) << endl;
`

const testContains: string =
`
make driver
g++ -c -Wall -std=c++${STD} driver.cc
g++ -c -Wall -std=c++${STD} algorithms.cc
g++ -Wall -std=c++${STD} driver.o algorithms.o
./a.out
1
1
1
1
`

const javaBinary: string =
`
static boolean BinaryContains(int[] array, int target) {
  return BinaryContains(array, target, 0, array.length - 1);
}

//  Recursive Helper Function
static boolean BinaryContains(
  int[] array,
  int target,
  int startIndex,
  int endIndex
) {
  if (startIndex > endIndex) return false;

  // calculate the midpoint
  int mid = (startIndex + endIndex) / 2;

  if (array[mid] == target) return true;
  // check to the left of the midpoint
  else if (array[mid] > target) return BinaryContains(
    array,
    target,
    0,
    mid - 1
  );
  // check to the right of the midpoint
  else return BinaryContains(array, target, mid + 1, endIndex);
}
`

const cppBinary: string = 
`
bool BinaryContains(const int array[], int size, int target) {
  return BinaryContains(array, target, 0, size - 1);
}

bool BinaryContains(const int array[], int target, int start_index,
                    int end_index) {
  if (start_index > end_index) return false;

  // calculate the midpoint
  int mid = (start_index + end_index) / 2;

  if (array[mid] == target) return true;
  // check to the left of the midpoint
  else if (array[mid] > target)
    return BinaryContains(array, target, 0, mid - 1);
  // check to the right of the midpoint
  else
    return BinaryContains(array, target, mid + 1, end_index);
}
`

const driverBinary: string =
`
int arr1[kSize] = {2, 4, 6, 8, 10};
cout << (BinaryContains(arr1, kSize, 4) == true) << endl;
cout << (BinaryContains(arr1, kSize, 9) == false) << endl;
`

const testBinary: string =
`
make driver
g++ -c -Wall -std=c++${STD} algorithms.cc
g++ -Wall -std=c++${STD} driver.o algorithms.o
./a.out
1
1
`

const driverBubble: string =
`
int array[kSize] = {
      5, 7, 3, 4, 1,
};
BubbleSort(array, kSize);
Print(array, kSize);
`

const testBubble: string =
`
make driver
g++ -c -Wall -std=c++${STD} driver.cc
g++ -c -Wall -std=c++${STD} algorithms.cc
g++ -Wall -std=c++${STD} driver.o algorithms.o
./a.out
1
3
4
5
7
`

const driverSelection: string =
`
int array[kSize] = {
      5, 7, 3, 4, 1,
};
SelectionSort(array, kSize);
Print(array, kSize);
`

const testSelection: string =
`
make driver
g++ -c -Wall -std=c++17 driver.cc
g++ -c -Wall -std=c++17 algorithms.cc
g++ -Wall -std=c++17 driver.o algorithms.o
./a.out
1
3
4
5
7
`

const javaMergeSort: string =
`
static void mergeSort(int[] array) {
  // check if the array has one element
  int size = array.length;
  if (size < 2) return;

  // calculate middle index
  int mid = size / 2;

  // determine sizes of left and right sub arrays
  int leftSize = mid;
  int rightSize = size - mid;

  // create left and right sub arrays
  int[] left = new int[leftSize];
  int[] right = new int[rightSize];

  // populate left sub array
  for (int i = 0; i < mid; i++) left[i] = array[i];

  // populate right sub array
  for (int i = mid; i < size; i++) right[i - mid] = array[i];

  // recursively create smaller sub arrays
  mergeSort(left);
  mergeSort(right);

  // merge sub arrays
  merge(left, right, array);
}
`

const javaMerge: string = 
`
static void merge(int[] left, int[] right, int[] array) {
  // sizes of left and right sub arrays
  int leftSize = left.length;
  int rightSize = right.length;

  // pointers for left, right, and merged arrays
  int i = 0; // left array index
  int j = 0; // right array index
  int k = 0; // merged array's index

  // merge elements into the array in sorted order
  while (i < leftSize && j < rightSize) {
    // compare elements from left and right sub arrays
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i++;
      k++;
    } else {
      array[k] = right[j];
      j++;
      k++;
    }
  }

  // copy remaining elements from left sub array
  while (i < leftSize) {
    array[k] = left[i];
    i++;
    k++;
  }

  // copy remaining elements from right sub array
  while (j < rightSize) {
    array[k] = right[j];
    j++;
    k++;
  }
}
`

const cppMergeSort: string =
`
void MergeSort(int array[], int size) {
  // check if array has one element
  if (size < 2) return;

  // calculate mid index
  int mid = size / 2;

  // determine sizes of left and right subarrays
  const int kLeftSize = mid;
  const int kRightSize = size - mid;

  // create left and right subarrays
  int left[kLeftSize];
  int right[kRightSize];

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
}
`

const cppMerge: string =
`
void Merge(int array[], int left_array[], int left_size, int right_array[],
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

const driverMerge: string =
`
int array[kSize] = {
      5, 7, 3, 4, 1,
};
MergeSort(array, kSize);
Print(array, kSize);
`

const testMerge: string =
`
make driver
g++ -c -Wall -std=c++${STD} driver.cc
g++ -c -Wall -std=c++${STD} algorithms.cc
g++ -Wall -std=c++${STD} driver.o algorithms.o
./a.out
1
3
4
5
7
`

const javaQuickSort: string = 
`
static void QuickSort(int[] array) {
  Quick(array, 0, array.length - 1);
}
`

const cppQuickSort: string =
`
void QuickSort(int array[], int size) { 
  Quick(array, 0, size - 1); 
}
`

const javaQuick: string =
`
static void Quick(int[] array, int startIndex, int endIndex) {
  // check if array is sorted
  if (startIndex >= endIndex) return;

  // get the pivot element's index
  int pivot = Partition(array, startIndex, endIndex);

  Quick(array, startIndex, pivot - 1); // left
  Quick(array, pivot + 1, endIndex); // right
}
`

const cppQuick: string =
`
void Quick(int array[], int start_index, int end_index) {
  // check if array is sorted
  if (start_index >= end_index) return;

  // get the pivot element's index
  int pivot = Partition(array, start_index, end_index);

  Quick(array, start_index, pivot - 1);  // left
  Quick(array, pivot + 1, end_index);    // right
}
`

const javaPartition: string =
`
static int Partition(int[] array, int startIndex, int endIndex) {
  // select the last element as the pivot
  int pivot = array[endIndex];
  int i = startIndex;

  // iterate and move elements smaller than the pivot to the left
  for (int j = startIndex; j <= endIndex; j++) {
    if (array[j] < pivot) {
      Swap(array, i, j);
      i++;
    }
  }

  // swap the pivot element with the element at index i
  Swap(array, i, endIndex);
  return i; // where the pivot is
}
`

const cppPartition: string =
`
int Partition(int array[], int start_index, int end_index) {
  // select the last element as the pivot
  int pivot = array[end_index];
  int i = start_index;

  // iterate and move elements smaller than the pivot to the left
  for (int j = start_index; j <= end_index; ++j) {
    if (array[j] < pivot) {
      Swap(array, i, j);
      ++i;
    }
  }

  // swap the pivot element with the element at index i
  Swap(array, i, end_index);
  return i;  // where the pivot is
}
`

const driverQuick: string =
`
int array[kSize] = {
      5, 7, 3, 4, 1,
};
QuickSort(array, kSize);
Print(array, kSize);
`

const testQuick: string =
`
make driver
g++ -c -Wall -std=c++${STD} driver.cc
g++ -c -Wall -std=c++${STD} algorithms.cc
g++ -Wall -std=c++${STD} driver.o algorithms.o
./a.out
1
3
4
5
7
`

const code: {makefile: string, driverIndexOf:string, testIndexOf: string, driverContains: string, 
    testContains: string, javaBinary: string, cppBinary: string, driverBinary: string, testBinary: string, 
    driverBubble: string, testBubble: string, driverSelection: string, testSelection: string, javaMergeSort: string, 
    javaMerge: string, cppMergeSort: string, cppMerge: string, driverMerge: string, testMerge: string, 
    javaQuickSort: string, cppQuickSort: string, javaQuick: string, cppQuick: string, javaPartition: string, 
    cppPartition: string, driverQuick: string, testQuick: string, 
} = 
{makefile, driverIndexOf, testIndexOf, driverContains, testContains, javaBinary, cppBinary, driverBinary, testBinary,
    driverBubble, testBubble, driverSelection, testSelection, javaMergeSort, javaMerge, cppMergeSort, cppMerge, driverMerge, 
    testMerge, javaQuickSort, cppQuickSort, javaQuick, cppQuick, javaPartition, cppPartition, driverQuick, testQuick,
  }

export { code }