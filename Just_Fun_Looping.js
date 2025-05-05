//SIKAT WAKKKK!!!

async function tampilkanLirik(bait, delays) {
    for (let i = 0; i < bait.length; i++) {
      await new Promise(resolve => setTimeout(() => {
        process.stdout.write(bait[i] + ' ');
        resolve();
      }, delays[i]));
    }
    console.log();
  }
  
  // lirik lagu
  const lirik = [
    {
      bait: ["Aduh,", "Abang", "bukan", "maksudku", "begitu"],
      delays: [1000, 550, 400, 650, 700]
    },
    {
      bait: ["Masalah", "stecu", "bukan", "brarti", "tak", "mau"],
      delays: [900, 600, 640, 500, 600, 400]
    },
    {
      bait: ["Jual", "mahal", "dikit", "kan", "bisa"],
      delays: [800, 500, 500, 450, 500]
    },
    {
      bait: ["Coba", "kasih", "effort-nya", "saja"],
      delays: [0, 200, 400, 550, ]
    },
    {
      bait: ["Kalau", "memang", "cocok", "bisa", "datang", "ke", "rumah"],
      delays: [0, 200, 200, 550, 600, 550, 200]
    },
    { bait: [" "],
      delays: [0]
    },
    {
      bait: ["Stecu,", "stecu,", "stelan", "cuek", "baru", "malu"],
      delays: [0, 700, 700, 850, 700, 600]
    },
    {
      bait: ["Aduh,", "ade", "ini", "mau", "juga", "abang", "yang", "rayu"],
      delays: [85, 80, 110, 550, 350, 200, 500, 500]
    },
    {
      bait: ["Stecu,", "stecu,", "stelan", "cuek", "baru", "malu"],
      delays: [900, 700, 700, 850, 700, 600]
    },
    {
      bait: ["Aduh,", "ade", "ini", "mau", "juga", "abang", "yang", "maju"],
      delays: [200, 80, 110, 550, 350, 200, 500, 600]
    },
  ];
  
  // outout lirik
  async function main() {
    for (const bait of lirik) {
      await tampilkanLirik(bait.bait, bait.delays);
      // Delay per bait
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  main().catch(console.error);