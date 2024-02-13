const n = 10;
let s;
console.log("test1");
document.write("<table>");
for (let i = 1; i <= n; i++) {
    document.write("<tr>");
    console.log("test2");

    for (let j = 1; j <= n; j++) {
        const st = (i+j)%2;
        if (st === 0) {
            s = "class='r1'";
        } else {
            s = "class='r2'";
        }
        document.write(`<td ${s}></td>`);
    }
    document.write("</tr>")
}
document.write("</table>");
