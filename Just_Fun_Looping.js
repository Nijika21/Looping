//nyanyi yook

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
      bait: ["Stecu", "stecu", "stelan", "cuek", "baru", "malu"],
      delays: [1000, 700, 700, 850, 700, 600]
    },
    {
      bait: ["Aduh", "adek", "ini", "mau", "juga", "abang", "yang", "rayu"],
      delays: [70, 80, 110, 550, 350, 200, 500, 500]
    },
    {
      bait: ["Stecu", "stecu", "stelan", "cuek", "baru", "malu"],
      delays: [400, 700, 700, 850, 700, 600]
    },
    {
      bait: ["Aduh", "adek", "ini", "mau", "juga", "abang", "yang", "maju"],
      delays: [50, 80, 110, 550, 350, 200, 450, 500]
    },
  ];
  
  // Fungsi menampilkan lirik
  async function main() {
    for (const bait of lirik) {
      await tampilkanLirik(bait.bait, bait.delays);
      // Delay antar bait
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  main().catch(console.error);