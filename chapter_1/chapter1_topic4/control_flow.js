let factories = ['paku', 'semen', 'batu bata', 'genteng', 'pasir', 'cat', 'kuas', 'sekop', 'tangga', 'paralon'];
factories.forEach(function (f, i) {
    switch (i) {
        case 0, 1, 6, 7, 8, 9:
            console.log(`pabrik ${f} dengan id ${i + 1} sedang tidak beroperasi`);
            break;
        case 2, 3, 4, 5:
            console.log(`pabrik ${f} dengan id ${i + 1} sedang beroperasi`);
            break;
        default:
            console.log(`${i + 1} indeks tidak diketahui`);
    }
});
