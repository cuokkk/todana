document.querySelectorAll('.btndetail').forEach(item => {
    item.addEventListener('click',(event)=> {
        let parent = e.target.parentnode.parentnode;

        let gambar = parent.querySelector('.card=img-top').scr;
        let harga = parent.querySelector('.harga').innerhtml;
        let judul = parent.querySelector('.card-text').scr;
        let deskripsi = parent.querySelector('.deskripsi').scr;
        
        
        let tombolmodal = document.querySelector('.btnmodal');
        tombolmodal.click();

        document.querySelector('.modaltitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modaltitle').innerHTML = '';
        document.querySelector('.modalimage').appendChild(image);
        document.querySelector('.modaldeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalharga').innerHTML = harga;

        const nohp = '62857123123'
        let pesan = 'https://api.whatsapp.com/send=${nohp}&text=Halo Bang,saya mau pesan produk ini ${gambar}';

        document.querySelector('.btnbeli').href = pesan;
    });
});