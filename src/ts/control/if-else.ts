const wrongStyle1: string =
`
if (true) 
{ 
  cout << true << endl;
} else {
  cout << false << endl;
}
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

const wrongStyle3: string =
`
if (true) 
  cout << true << endl;
else 
  cout << false << endl;
`;

const code: { wrongStyle1: string, wrongStyle2: string, wrongStyle3: string, } = 
 { wrongStyle1, wrongStyle2, wrongStyle3, };

 export { code };