# c
cd c
xxd test.c > source-code.txt # get encoding format of source code, utf-8
gcc test.c
objdump -D a.out > comp.txt # get encoding format of executable file, utf-8, utf-16
cd ..

# golang
cd go
xxd test.go > source-code.txt # get encoding format of source code, utf-8
go build test.go
objdump -D test > comp.txt # get encoding format of executable file, utf-16
cd ..

# javascript
cd javascript
node test.js > output.txt
cd ..