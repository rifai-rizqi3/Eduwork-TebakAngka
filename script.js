var angka;
var kesempatan;
var tebakan;

angka=Math.random();
tebakan=prompt("Masukan tebakan anda dari angka 1-3 (kesempatan = 3 kali)");

if(angka>=0,1 && angka <0 .25="" angka="" else="" if="">=0,25 && angka <0 .5="" angka="" else="" if="">=0,5 && angka <0 .75="" angka="4;" else="" for="" kesempatan="3;kesempatan">=1;kesempatan--)
{
    if(angka==tebakan)
    {
        document.getElementById('notice').innerHTML="Selamat Anda Berhasil";
        break;
    }
    else
    {
        tebakan=prompt("Maaf tebakan salah, sisa kesempatan = "+kesempatan)
    }
}
if(kesempatan==0)
{
    document.getElementById('notice').innerHTML="Game Over";
}