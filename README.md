## JavaScript Chapter 11
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 11
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Intro 
        教學影片開頭和介紹

###  2. User Input: Play game?
        設定跳出視窗詢問是否玩剪刀、石頭、布。

###  3. Check the value and respond
        設定 ifelse 條件式，如果點擊取消會跳出警示視窗 Ok, maybe next time.

###  4. Player chooses rock, paper, or scissors
        設定 playerChoice 為可以輸入剪刀、石頭、布的視窗，文字為 Please enter rock, paper, or scissors.

###  5. Handle the response
        (1)設定 ifelse 條件式，如果點擊取消，會跳出警示視窗 I guess you changed your mind. Maybe next time.
        (2)令 playerOne 的選擇為 playerChoice，並使用 trim 方法和toLowerCase方法。trim 方法可以去除字串前後方的空白，toLowerCase 方法可以將字串轉換為小寫字母。
        (3)設定 ifelse 條件式，玩家一playerOne 可以選擇出剪刀、石頭、布，如果輸入剪刀、石頭、布以外的選項會跳出警示視窗 You did not enter rock, paper, or scissors.

###  6. Computer player makes a choice
        設定電腦選擇 computerChoice 會回傳隨機數值 1, 2, 3: 1 代表 rock，2 代表 paper，3 代表 scissors。條件式使用 ternary operator

###  7. Rock-Paper-Scissors logic tree
        令平手和輸贏的情況為 result，跳出警示視窗為平手或輸贏

###  8. Display winner! Ask to play again?
        設定確認視窗跳出詢問 Play again?
        繼續玩就重新載入，跳出警示視窗 Ok, thanks for playing.

###  9. Walk-through of code logic
        思考 code 邏輯

### 10. Ready to test the code
        檢驗 code

### 11. An area for improvement
        改進空間

### 12. Congrats on completing your first interactive game!