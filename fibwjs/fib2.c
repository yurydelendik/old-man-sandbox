int fib(int n) {
  int i, t, a = 0, b = 1;
  for (i = 0; i < n; i++) {
    t = a;
    a = b;
    b += t;
  }
  return b;
}
