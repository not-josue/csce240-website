// The C++ standard currently being used
const STD: number = 17;

// cpplint errors
const classBlankSpaceError: string =
`
Redundant blank line at the start of a code block should be deleted.  [whitespace/blank_line] [2]
Redundant blank line at the end of a code block should be deleted.  [whitespace/blank_line] [3]
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
`

const classSpecifierError: string =
`
public: should be indented +1 space inside class ClassName  [whitespace/indent] [3]
Do not leave a blank line after "public:"  [whitespace/blank_line] [3]
private: should be indented +1 space inside class ClassName  [whitespace/indent] [3]
Do not leave a blank line after "private:"  [whitespace/blank_line] [3]
protected: should be indented +1 space inside class ClassName  [whitespace/indent] [3]
Do not leave a blank line after "protected:"  [whitespace/blank_line] [3]
`

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
Redundant blank line at the start of a code block should be deleted.  [whitespace/blank_line] [2]
Redundant blank line at the end of a code block should be deleted.  [whitespace/blank_line] [3]
Extra space after ( in function call  [whitespace/parens] [4]
Extra space before ( in function call  [whitespace/parens] [4]
Missing space before {  [whitespace/braces] [5]
Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
{ should almost always be at the end of the previous line  [whitespace/braces] [4]
`;

const headerGuardsError: string = 
`
#ifndef header guard has wrong style, please use: FILE_PATH  [build/header_guard] [5]
#endif line should be "#endif  // FILE_PATH"  [build/header_guard] [5]
`;

const includeFileError: string =
`
Include the directory when naming header files  [build/include_subdir] [4]
`;

const makefileError: string =
`
*** missing separator.  Stop.
`;

const newlineError: string =
`
Could not find a newline character at the end of the file.  [whitespace/ending_newline] [5]
`;

const notDetected: string = 
`
Done processing driver.cc
`;

const commentError: string =
`
At least two spaces is best between code and comments  [whitespace/comments] [2]
`

const errors: { classBlankSpaceError: string, classSpecifierError: string, 
    columnError: string, controlStructuresError: string,
    copyrightError: string, functionError: string, headerGuardsError: string, includeFileError: string,
    makefileError:string, newlineError: string, notDetected: string, commentError: string, } =
{ classBlankSpaceError, classSpecifierError, controlStructuresError, columnError, copyrightError, functionError,
    headerGuardsError, includeFileError, makefileError, newlineError, notDetected, commentError, };

export { STD, errors };