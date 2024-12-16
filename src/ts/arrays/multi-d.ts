import { STD } from "@ts/constants";

const print2D: string =
`
for (int i = 0; i < kRowSize; ++i) {
  for (int j = 0; j < kColumnSize; ++j) {
    cout << array[i][j] << (j < kColumnSize - 1 ? " -> " : "");
  }
  cout << endl;
}
`

const test2D: string =
`
g++ -Wall -std=c++${STD} driver.cc
./a.out
1 -> 2 -> 3 -> 4 -> 5
5 -> 4 -> 3 -> 2 -> 1
`

const main: string =
`
int main() {
  const int kRowSize = 2;
  const int kColumnSize = 5;
  int array[][kColumnSize] = {{9, 7, 5, 3, 1}, {10, 8, 6, 4, 2}};

  BubbleSort(array, kRowSize);
  Print2D(array, kRowSize);

  return 0;
}
`

const terminal: string =
`
cpplint driver.cc
Done processing driver.cc
g++ -Wall -std=c++${STD} driver.cc
./a.out
1 -> 3 -> 5 -> 7 -> 9
2 -> 4 -> 6 -> 8 -> 10
`

const code: {print2D: string, test2D: string, main: string, terminal: string } =
{ print2D, test2D, main, terminal }

export { code }