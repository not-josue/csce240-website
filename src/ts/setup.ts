import { STD } from "./constants";

const apple: string = 
`
brew install gcc
brew install make
brew install cpplint
`;

const appleCompile: string =
`
g++-14 -Wall -std=c++${STD} hello.cc 
`

const linux: string =
`
sudo apt update
sudo apt upgrade
sudo apt install build-essential python3 python3-pip
sudo pip3 install cpplint
`;

const windows: string = linux;

const code: {apple: string, appleCompile: string, linux: string, windows: string} = 
{ apple, appleCompile, linux, windows };

export { code };