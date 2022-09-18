[![Run test](https://github.com/pg6301-fall2022/l4_offline/actions/workflows/test.yml/badge.svg)](https://github.com/pg6301-fall2022/l4_offline/actions/workflows/test.yml)

# Code quality

* [x] Create react application with parcel
* [x] Jest
* [x] Snapshot tests
  * Test rendering
* [x] Simulator testing
  * Testing submission
* [x] GitHub actions
* [x] Coverage coveralls.io
* [x] Prettier
* [ ] Typescript
* [ ] Eslint (?)


# cheat sheet continued
To update snapshot:
* npm run test -- -u

Scripts:
* "Command1 && Command2" - run sequentially, if there are no errors
* "Command1 ; Command2" - run sequentially, stop if there are errors
* "Command1 || Command2" - run sequentially, only if there are errors