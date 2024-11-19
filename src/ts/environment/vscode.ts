const settings: string =
`
{
    "[cpp]": {
        "editor.formatOnSave": true, // formats on save
        "editor.defaultFormatter": "ms-vscode.cpptools" // added by C++ extension
    },
    "C_Cpp.clang_format_fallbackStyle": "Google", // if no clang format file use Google
    "C_Cpp.formatting": "clangFormat" // looks for clang format file
}
`;

const before: string = 
`
// Before Saving
#include <iostream>

using std::cout;
using std::endl;

int main() {

  cout << "a very very long sentence that needs to be formatted in order to pass the Google Style Requirements" << endl;

  return 0;
}
`;

const after: string =
`
// After Saving
#include <iostream>

using std::cout;
using std::endl;

int main() {
  cout << "a very very long sentence that needs to be formatted in order to "
          "pass the Google Style Requirements"
       << endl;

  return 0;
}
`;

const code : {settings:string, before: string, after: string } =
{ settings, before, after };

export { code };