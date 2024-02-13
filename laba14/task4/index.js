const n = 10;
let s;
let cellQuantity1 = 10;
let cellQuantity2 = 1;
let rowType;
let cellQuantity4 = 1;

document.write("<table>");                  //первая таблица
for (let i = 1; i <= n; i++) {
    document.write("<tr>");
    cellQuantity1 -=1;

    for (let j = 1; j <= n; j++) {
        if (j < cellQuantity1) {
            s = "class='cell_color_aqua'";
        } else {
            s = "class='cell_color_blue'";
        }
        document.write(`<td ${s}></td>`);
    }
    document.write("</tr>")
}
document.write("</table>");

document.write("<table>");              //вторая таблица
for (let i = 1; i <= n; i++) {
    document.write("<tr>");
    cellQuantity2 +=1;

    for (let j = 1; j <= n; j++) {
        if (j < cellQuantity2) {
            s = "class='cell_color_orange'";
        } else {
            s = "class='cell_color_blue'";
        }
        document.write(`<td ${s}></td>`);
    }
    document.write("</tr>")
}
document.write("</table>");

document.write("<table>");              //третья таблица
for (let i = 1; i <= n; i++) {
    document.write("<tr>");
    if (i == 1 || i == 5 || i == 9) {
        rowType = "1";
    }
    else if (i == 2 || i == 6 || i == 10) {
        rowType = "2";
    }
    else if (i == 3 || i == 7) {
        rowType = "3";
    }
    else {
        rowType = "4";
    }

    for (let j = 1; j <= n; j++) {
        if (rowType == "1") {
            if (j ==3 || j == 7) {
                s = "class='cell_color_green'";
            }
            else {
                s = "class='cell_color_pink'";
            }
        }
        else if (rowType == "2") {
            if (j == 2 || j == 6 || j == 10) {
                s = "class='cell_color_green'";
            }
            else {
                s = "class='cell_color_pink'";
            }
        }
        else if (rowType == "3") {
            if (j == 1 || j == 5 || j == 9) {
                s = "class='cell_color_green'";
            }
            else {
                s = "class='cell_color_pink'";
            }
        }
        else if (rowType == "4") {
            if (j == 4 || j == 8) {
                s = "class='cell_color_green'";
            }
            else {
                s = "class='cell_color_pink'";
            }
        }
        document.write(`<td ${s}></td>`);
    }
    document.write("</tr>")
}
document.write("</table>");
