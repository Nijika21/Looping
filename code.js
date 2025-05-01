document.getElementById('cicipButton').addEventListener('click', function() {
            let BudiKali = 1;
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';

            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            const cicipMakanan = async () => {
                do {
                    await delay(1000);
                    outputDiv.innerHTML += `Mencicipi makanan ke-${BudiKali}<br>`;
                    BudiKali++;
                } while (BudiKali <= 10);
            };

            cicipMakanan();
        });