/*eslint logical-assignment-operators: ["error", "always"]*/

a = a || b
a = a && b
a = a ?? b
a || (a = b)
a && (a = b)
a ?? (a = b)
a = a || b || c
a = a && b && c
a = a ?? b ?? c