const scopeHeader: string =
`
class MyClass {
 public:
  void Print() const;
};
`;

const scopeSource: string =
`
void MyClass::Print() const {
  std::cout << "Printing in my class" << std::endl;
}
`;

const code: { scopeHeader: string, scopeSource: string } =
{ scopeHeader, scopeSource };

export { code };