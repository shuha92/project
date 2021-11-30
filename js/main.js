"use strict";

// Git fayl qo'shadi, uni kuzatadi, control tochka qo'yadi

// Terminalga yoki PowerShell ga yozamiz:
// 1) git init - papka va fayllar hosil bo'ladi, secret
// 2) git config --local user.name "Shuhrat" yoki git config --local user.email "example@gmail.com"
// Bu bilan configuratsiyaga o'zgartirish kiriytamiz, local o'rniga global qilsa ham bo'ladi
// 3) git status   - fayllar statusini tekshiramiz, qizil bo'ladi
// 4) git add -A   - o'zgarishlar bo'ladigan barcha fayllarni qo'shadi
// 5) git status   - fayllar statusini tekshiramiz, yashil bo'ladi
// 6) agar css scss fayl qo'shsak qaytadan git add -A qilib, git statusda tekshiramiz
// 7) git commit -a -m"kontrol nuqta nomi"  - bu bi;an tochka hosil qilib, uni nomlaymiz