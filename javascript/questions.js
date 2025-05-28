const quizQuestions = [
  {
    question: "What is the output of the following code?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int a = 5;
      cout << ++a;
      return 0;
  }`,
    options: ["5", "6", "4", "Error"],
    answer: 1,
  },
  {
    question: "Which of the following is a correct comment in C++?",
    options: [
      "/* This is a comment */",
      "// This is a comment",
      "Both A and B",
      "None of the above",
    ],
    answer: 2,
  },
  {
    question: "Which keyword is used to define a constant in C++?",
    options: ["const", "constant", "define", "static"],
    answer: 0,
  },
  {
    question: "What is the output of the following code?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int x = 10, y = 4;
      cout << x % y;
      return 0;
  }`,
    options: ["2", "0", "1", "4"],
    answer: 0,
  },
  {
    question: "Which operator is used to access the address of a variable?",
    options: ["&", "*", "%", "@"],
    answer: 0,
  },
  {
    question: "What will this code print?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int a = 3, b = 5;
      cout << (a > b);
      return 0;
  }`,
    options: ["true", "false", "0", "1"],
    answer: 2,
  },
  {
    question: "Which of these is a valid C++ data type?",
    options: ["number", "int", "integer", "num"],
    answer: 1,
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do...while", "None of the above"],
    answer: 2,
  },
  {
    question: "What is the correct way to declare a variable in C++?",
    options: [
      "int num = 5;",
      "num = int 5;",
      "declare int num = 5;",
      "let int num = 5;",
    ],
    answer: 0,
  },
  {
    question: "What will be the output of this code?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int i = 0;
      while (i < 3) {
          cout << i << " ";
          i++;
      }
      return 0;
  }`,
    options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
    answer: 1,
  },
  {
    question: "What does the sizeof operator return in C++?",
    options: [
      "The size of the file",
      "The size of a variable or data type",
      "The length of a string",
      "The number of digits in a number",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is a correct variable name in C++?",
    options: ["2ndValue", "float", "user_name", "first-name"],
    answer: 2,
  },
  {
    question: "What will this program print?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int a = 5, b = 2;
      cout << a / b;
      return 0;
  }`,
    options: ["2", "2.5", "3", "0"],
    answer: 0,
  },
  {
    question: "What is the purpose of the return 0; statement in main()?",
    options: [
      "Ends the program",
      "Returns an error",
      "Signals successful execution",
      "Prints zero",
    ],
    answer: 2,
  },
  {
    question: "What is the output of this code?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int x = 3;
      if (x == 3) {
          cout << "Matched";
      } else {
          cout << "Not matched";
      }
      return 0;
  }`,
    options: ["Matched", "Not matched", "x", "Error"],
    answer: 0,
  },
  {
    question: "What is the output of this code?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int sum = 0;
      for (int i = 1; i <= 3; i++) {
          sum += i;
      }
      cout << sum;
      return 0;
  }`,
    options: ["3", "6", "9", "1"],
    answer: 0,
  },
  {
    question: "Which header file is required to use cout and cin?",
    options: ["iostream", "stdio.h", "math.h", "stdlib.h"],
    answer: 0,
  },
  {
    question: "What is the output of this program?",
    code: ` #include <iostream>
  using namespace std;
  int main() {
      int a = 10;
      int b = 20;
      bool result = (a < b);
      cout << result;
      return 0;
  }`,
    options: ["true", "1", "0", "false"],
    answer: 1,
  },
  {
    question:
      "Which of the following is the correct syntax for an if statement in C++?",
    options: ["if x > 0 then", "if (x > 0)", "if x > 0 {}", "if x > 0:"],
    answer: 1,
  },
  {
    question: "Which of the following is a jump statement in C++?",
    options: ["loop", "if", "goto", "switch"],
    answer: 2,
  },
];
