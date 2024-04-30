# Snippets for performance testing

```jpl
# 📍 Date tests

/*
[ '1982-W\(range(1, 53) | toString() | if length() == 1 then '0' + . else . end)-\(range(1, 8))']
| map(
    func():
      '\(.) - \(date.parseISO())'
  )
| groupBy(
    func():
      .[6:8]
  )
*/
```
