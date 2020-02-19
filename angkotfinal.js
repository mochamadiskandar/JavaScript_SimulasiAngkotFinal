function Bus(namaSupir, trayek, penumpang, kas) {
  this.namaSupir = namaSupir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function(namaPenumpang) {
    //jika bus kosong
    if (this.penumpang.length == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        //jika ada kursi kosong
        if (this.penumpang[i] == undefined) {
          this.penumpang[i] = namaPenumpang;
          return this.penumpang;
        }

        //jika sudah ada nama yang sama
        else if (this.penumpang[i] == namaPenumpang) {
          console.log(namaPenumpang + "sudah ada di dalam angkot");
          return this.penumpang;
        }

        //jika seluruh kursi sudah terisi, tambah penumpang di kursi akhir
        else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function(namaPenumpang, bayar) {
    // jika bus kosong
    if (this.penumpang.length === 0) {
      console.log("Bus masih kosong");
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        // jika nama penumpang sama, beri nilai undefined
        if (this.penumpang[i] == namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas = kas + bayar;
          return this.penumpang;
        }
        // jika tidak ada penumpang yang namanya sesuai
        else if (i == this.penumpang.length - 1) {
          console.log("penumpang dengan nama " + namaPenumpang + " tidak ada di dalam bus");
          return this.penumpang;
        }
      }
    }
  };
}

var bus1 = new Bus("Iskandar", ["Blok-M", "Pondok Labu"], [], 0);
// var bus2 = new Bus("Hamdi", ["Meruya", "Lebak Bulus"], [], 0);

// Test case 0
    // angkot masih kosong
    console.log("Test Case 0 - menurunkan penumpang, padahal angkot masih kosong\n");
    console.log(bus1.penumpangTurun("Ucup", 6000) +".\n.");

// Test case 1
    // penumpang naik
    console.log("Test Case 1 - beberapa penumpang naik");
    console.log(bus1.penumpangNaik("Abdul"));
    console.log(bus1.penumpangNaik("Jono"));
    console.log(bus1.penumpangNaik("Paijo"));
    console.log(bus1.penumpangNaik("Koko"));
    console.log(bus1.penumpangNaik("Gogon"));
    //tampilkan data bus 1
    console.log("data bus 1 setelah penumpang naik : " +
    bus1.penumpang.join(" - ") + "\n.\n.\n.");

// Test case 2
    // penumpang pertama turun
    console.log("Test case 2 - jono turun dari bus")
    console.log(bus1.penumpangTurun("Jono",2000))
    //tampilkan data bus 1
    console.log("data bus 1 setelah penumpang pertama turun : " +
    bus1.penumpang.join(" - ") +
    "\nkas angkot : " + bus1.kas + "\n.")

    // penumpang kedua turun
    console.log("koko turun juga dari bus");
    console.log(bus1.penumpangTurun("Koko",5000));
    // tampilkan data bus 1
    console.log("data bus 1 setelah satu penumpang turun lagi : " +
    bus1.penumpang.join(" - ") +
    "\nkas angkot : " + bus1.kas + "\n.\n.\n.");
    
// Test Case 3
    // penumpang baru naik 1, mengisi kursi yang kosong/undefined
    console.log("Test case 3 - Penumpang baru naik dan mengisi kursi yg kosong/undefined")
    console.log(bus1.penumpangNaik("Budi"));
    // tampilkan data bus 1
    console.log("data bus 1 setelah budi naik : " +
    bus1.penumpang.join(" - ") + "\n.\n.\n.")

// Test Case 4
    // menurunkan penumpang dengan nama yang salah
    console.log("Test Case 4 - menurunkan penumpang dengan nama yang salah");
    console.log(bus1.penumpangTurun("Sasa",100000));





