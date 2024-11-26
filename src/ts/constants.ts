// The C++ standard currently being used
const STD: number = 17;

// cpplint errors
const accessSpecifierError: string =
`
public: should be indented +1 space inside class MyClass  [whitespace/indent] [3]
`;

const controlStructuresError: string =
`
# General Errors
Redundant blank line at the start of a code block should be deleted.  [whitespace/blank_line] [2]
Redundant blank line at the end of a code block should be deleted.  [whitespace/blank_line] [3]
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
Empty loop bodies should use {} or continue  [whitespace/empty_loop_body] [5]

# Else Errors
An else should appear on the same line as the preceding }  [whitespace/newline] [4]
Else clause should be indented at the same level as if. Ambiguous nested if/else chains require braces.  [readability/braces] [4]
If an else has a brace on one side, it should have it on both  [readability/braces] [5]
`;

const columnError: string =
`
Lines should be <= 80 characters long  [whitespace/line_length] [2]
`;

const copyrightError: string = 
`
No copyright message found.  You should have a line: "Copyright [year] <Copyright Owner>"  [legal/copyright] [5]
`;

const functionError: string = 
`
Extra space after ( in function call  [whitespace/parens] [4]
Extra space before ( in function call  [whitespace/parens] [4]
Missing space before {  [whitespace/braces] [5]
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const newlineError: string =
`
Could not find a newline character at the end of the file.  [whitespace/ending_newline] [5]
`;

const notDetected: string = 
`
Done processing driver.cc
`;

const errors: { accessSpecifierError: string, functionError: string, columnError: string, controlStructuresError: string,
    copyrightError: string, newlineError: string, notDetected: string, } =
{ accessSpecifierError, controlStructuresError, columnError, copyrightError, functionError,
    newlineError, notDetected, };

export { STD, errors };