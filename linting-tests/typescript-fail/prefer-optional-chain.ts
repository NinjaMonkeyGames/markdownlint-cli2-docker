foo && foo.a && foo.a.b && foo.a.b.c;
foo && foo['a'] && foo['a'].b && foo['a'].b.c;
foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method();

// With empty objects
(((foo || {}).a || {}).b || {}).c;
(((foo || {})['a'] || {}).b || {}).c;

// With negated `or`s
!foo || !foo.bar;
!foo || !foo[bar];
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz();

// this rule also supports converting chained strict nullish checks:
foo &&
  foo.a != null &&
  foo.a.b !== null &&
  foo.a.b.c != undefined &&
  foo.a.b.c.d !== undefined &&
  foo.a.b.c.d.e;