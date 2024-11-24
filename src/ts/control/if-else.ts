const wrongStyle1: string =
`
if (true) 
{ 
  cout << true << endl;
} else {
  cout << false << endl;
}
`;

const error1: string = 
`
test.cc:12:  { should almost always be at the end of the previous line  [whitespace/braces] [4]
Done processing test.cc
Total errors found: 5
`;

const wrongStyle2: string =
`
if (true) { 
  cout << true << endl;
} 
else {
  cout << false << endl;
}
`;

const error2: string = 
`
test.cc:14:  An else should appear on the same line as the preceding }  [whitespace/newline] [4]
test.cc:14:  If an else has a brace on one side, it should have it on both  [readability/braces] [5]
Done processing test.cc
Total errors found: 6
`;

const wrongStyle3: string =
`
if (true) 
  cout << true << endl;
else 
  cout << false << endl;
`;

const error3: string =
`
test.cc:8:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
test.cc:8:  Redundant blank line at the start of a code block should be deleted.  [whitespace/blank_line] [2]
test.cc:11:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
test.cc:13:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
Done processing test.cc
Total errors found: 4
`;

const code: { wrongStyle1: string, error1: string, wrongStyle2: string, error2: string, 
    wrongStyle3: string, error3: string,
 } = 
 { wrongStyle1, error1, wrongStyle2, error2, wrongStyle3, error3 };

 export { code };