import React from 'react'

function Mapping() {
    const x = [
        { id: 1, ad: 'Spor Çalışmalarımız' },
        { id: 2, ad: 'Eğitim Çalışmalarımız' },
        { id: 3, ad: 'Yardım Çalışmalarımız' },
        { id: 4, ad: 'Peyzaj Çalışmalarımız' }
      ];
      const resimler = [
        'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // ... diğer resim URL'leri
      ];
  return (
    
    <>
    <ul id='map'>
        {x.map((kullanici) => (
          <li key={kullanici.id}>
            {kullanici.ad} {kullanici.soyad}
          </li>
        ))}
      </ul>
      <a href="https://www.meram.bel.tr/">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {resimler.map((resim, index) => (
          <img key={index} src={resim} alt={`Resim ${index + 1}`} style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '10px' }} />
        ))}
      </div>
      </a>
    </>
  )
}

export default Mapping