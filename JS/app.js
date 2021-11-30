var print_btn = document.getElementById("print_btn");
var download_btn = document.getElementById("download_btn");
var newtab_btn = document.getElementById("newtab_btn");
var yazdir = document.querySelector("#icerik");
var artimetik = document.getElementById("artimetik");
var basamak = document.getElementById("basamak");
var opt = {
    margin: 0,
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};

function getRast(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

artimetik.addEventListener("change", () => {
    if (artimetik.selectedIndex == 0) {
        var art = document.querySelectorAll("#art");
        art.forEach(e => {
            e.innerHTML = " + ";
        });
    } else if (artimetik.selectedIndex == 1) {
        var art = document.querySelectorAll("#art");
        art.forEach(e => {
            e.innerHTML = " - ";
        });
    } else if (artimetik.selectedIndex == 2) {
        var art = document.querySelectorAll("#art");
        art.forEach(e => {
            e.innerHTML = " × ";
        });
    } else {
        console.log("hata");
    }
});

basamak.addEventListener("change", () => {
    if (basamak.selectedIndex == 0) {
        var sayi1 = document.querySelectorAll("#sayi1");
        var sayi2 = document.querySelectorAll("#sayi2");
        sayi1.forEach(e => {
            const rast1 = getRast(1, 10);
            e.innerHTML = rast1;
        });
        sayi2.forEach(e => {
            const rast2 = getRast(1, 10);
            e.innerHTML = rast2;
        });
    } else if (basamak.selectedIndex == 1) {
        var sayi1 = document.querySelectorAll("#sayi1");
        var sayi2 = document.querySelectorAll("#sayi2");
        sayi1.forEach(e => {
            const rast1 = getRast(10, 100);
            e.innerHTML = rast1;
        });
        sayi2.forEach(e => {
            const rast2 = getRast(10, 100);
            e.innerHTML = rast2;
        });
    } else if (basamak.selectedIndex == 2) {
        var sayi1 = document.querySelectorAll("#sayi1");
        var sayi2 = document.querySelectorAll("#sayi2");
        sayi1.forEach(e => {
            const rast1 = getRast(100, 1000);
            e.innerHTML = rast1;
        });
        sayi2.forEach(e => {
            const rast2 = getRast(100, 1000);
            e.innerHTML = rast2;
        });
    } else if (basamak.selectedIndex == 3) {
        var sayi1 = document.querySelectorAll("#sayi1");
        var sayi2 = document.querySelectorAll("#sayi2");
        sayi1.forEach(e => {
            const rast1 = getRast(1000, 10000);
            e.innerHTML = rast1;
        });
        sayi2.forEach(e => {
            const rast2 = getRast(1000, 10000);
            e.innerHTML = rast2;
        });
    } else {
        console.log("hata");
    }
});

for (let i = 0; i < 39; i++) {
    const rast1 = getRast(100, 1000);
    const rast2 = getRast(100, 1000);
    const para = document.createElement("div");
    para.classList.add("islem");
    para.innerHTML = '<span id="sayi1">' + rast1 + '</span><span id="art"> + </span><span id="sayi2">' + rast2 + '</span> = ';
    const element = document.getElementById("islemler");
    element.appendChild(para);
}

print_btn.addEventListener("click", () => {
    var dosya = html2pdf().set(opt).from(yazdir).toPdf().get('pdf').then(function (pdf) {
        printJS(pdf.output('bloburl'));
    });
});
download_btn.addEventListener("click", () => {
    var dosya = html2pdf().set(opt).from(yazdir).toPdf().get('pdf').save();
});
newtab_btn.addEventListener("click", () => {
    html2pdf().set(opt).from(yazdir).toPdf().get('pdf').then(function (pdf) {
        window.open(pdf.output('bloburl'), '_blank');
    });
});