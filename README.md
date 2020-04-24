# Arabic-context-free-grammer
 
 Related repo: [ATS-editor](https://github.com/KMLX28/ATS-editor)

An application to analyze Arabic Text, for example:

---
input:
```
يذهب محمد إلى المسجد
```

output:
```
يذهب - (فعل لازم) - (فعل لازم)
محمد - (اسم) - (فاعل)
إلى - (حرف جر) - (حرف جر)
المسجد - (اسم) - (مجرور)

```

---

input:
```
ضرب محمد زيدا
```

output:
```
ضرب - (فعل متعدي) - (فعل متعدي)
محمد - (اسم) - (فاعل)
زيدا - (اسم) - (مفعول به)

```
