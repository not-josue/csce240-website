// The C++ standard currently being used
const STD: number = 17;

// cpplint errors
const accessSpecifierError: string =
`
public: should be indented +1 space inside class MyClass  [whitespace/indent] [3]
`;

const bracketFunctionError: string = 
`
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const columnError: string =
`
Lines should be <= 80 characters long  [whitespace/line_length] [2]
`;

const copyrightError: string = 
`
No copyright message found.  You should have a line: "Copyright [year] <Copyright Owner>"  [legal/copyright] [5]
`;

const doWhileBraces: string =
`
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
Empty loop bodies should use {} or continue  [whitespace/empty_loop_body] [5]
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
Redundant blank line at the end of a code block should be deleted.  [whitespace/blank_line] [3]
`;

const misplacedIfBraces: string =
`
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const misplacedElseBraces: string =
`
An else should appear on the same line as the preceding }  [whitespace/newline] [4]
If an else has a brace on one side, it should have it on both  [readability/braces] [5]
`;

const missingIfElseBraces: string =
`
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
Redundant blank line at the start of a code block should be deleted.  [whitespace/blank_line] [2]
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
`;

const missingNestedBraces: string = 
`
Else clause should be indented at the same level as if. Ambiguous nested if/else chains require braces.  [readability/braces] [4]
`;

const newlineError: string =
`
Could not find a newline character at the end of the file.  [whitespace/ending_newline] [5]
`;

const notDetected: string = 
`
Done processing driver.cc
`;

const switchError: string = 
`
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const whileError: string = 
`
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const errors: { accessSpecifierError: string, bracketFunctionError: string, columnError: string, copyrightError: string, 
    doWhileBraces: string, misplacedIfBraces: string, misplacedElseBraces: string, missingIfElseBraces: string, missingNestedBraces: string, 
    newlineError: string, notDetected: string, switchError: string, whileError: string, } =
{ accessSpecifierError, bracketFunctionError, columnError, copyrightError, doWhileBraces,
    misplacedIfBraces, misplacedElseBraces, missingIfElseBraces, missingNestedBraces,
    newlineError, notDetected, switchError, whileError, };

export { STD, errors };