var Common = {}; // Общая инфа
Common.body = document.body;
Common.clientWidth = document.documentElement.clientWidth;
Common.clientHeight = document.documentElement.clientHeight;

Common.mouseX = 0;
Common.mouseY = 0;

Common.cell = {};
Common.cell.x = 14;
Common.cell.y = 10;
Common.cell.size = Common.clientWidth/Common.cell.x/1.5;