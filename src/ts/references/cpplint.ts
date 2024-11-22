const bracketFunctionError: string = 
`
driver.cc:4:  Line ends in whitespace.  Consider deleting these extra spaces.  [whitespace/end_of_line] [4]
driver.cc:5:  { should almost always be at the end of the previous line  [whitespace/braces] [4]
Done processing driver.cc
Total errors found: 2
`;

const columnError: string =
`
driver.cc:5:  Lines should be <= 80 characters long  [whitespace/line_length] [2]
Done processing driver.cc
Total errors found: 1
`;

const copyrightError: string = 
`
driver.cc:0:  No copyright message found.  You should have a line: "Copyright [year] <Copyright Owner>"  [legal/copyright] [5]
Done processing driver.cc
Total errors found: 1
`;

const newlineError: string =
`
driver.cc:2:  Could not find a newline character at the end of the file.  [whitespace/ending_newline] [5]
Done processing driver.cc
Total errors found: 1
`;

const notDetected: string = 
`
Done processing driver.cc
`;

const errors: { bracketFunctionError: string, columnError: string, copyrightError: string, newlineError: string, notDetected: string } =
{ bracketFunctionError, columnError, copyrightError, newlineError, notDetected };

export { errors };