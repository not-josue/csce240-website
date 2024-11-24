const accessSpecifierError: string =
`
myclass.h:3:  public: should be indented +1 space inside class MyClass  [whitespace/indent] [3]
`;

const bracketFunctionError: string = 
`
driver.cc:4:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
driver.cc:5:  { should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const columnError: string =
`
driver.cc:5:  Lines should be <= 80 characters long  [whitespace/line_length] [2]
`;

const copyrightError: string = 
`
driver.cc:0:  No copyright message found.  You should have a line: "Copyright [year] <Copyright Owner>"  [legal/copyright] [5]
`;

const misplacedIfBracket: string =
`
driver.cc:12:  { should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const misplacedElseBracket: string =
`
driver.cc:14:  An else should appear on the same line as the preceding }  [whitespace/newline] [4]
driver.cc:14:  If an else has a brace on one side, it should have it on both  [readability/braces] [5]
`;

const missingIfElseBrackets: string =
`
driver.cc:8:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
driver.cc:8:  Redundant blank line at the start of a code block should be deleted.  [whitespace/blank_line] [2]
driver.cc:11:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
driver.cc:13:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
`;

const missingNestedBrackets: string = 
`
driver.cc:11:  Else clause should be indented at the same level as if. Ambiguous nested if/else chains require braces.  [readability/braces] [4]
`;

const newlineError: string =
`
driver.cc:2:  Could not find a newline character at the end of the file.  [whitespace/ending_newline] [5]
`;

const notDetected: string = 
`
Done processing driver.cc
`;

const errors: { accessSpecifierError: string, bracketFunctionError: string, columnError: string, copyrightError: string, misplacedIfBracket: string, 
    misplacedElseBracket: string, missingIfElseBrackets: string, missingNestedBrackets: string, newlineError: string, notDetected: string } =
{ accessSpecifierError, bracketFunctionError, columnError, copyrightError, misplacedIfBracket, misplacedElseBracket, missingIfElseBrackets, missingNestedBrackets,
    newlineError, notDetected };

export { errors };