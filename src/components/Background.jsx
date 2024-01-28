import React from 'react'

function Background() {
    const backgroundStyle = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/09/11/06/03/building-8246152_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh', // Ekran yüksekliği kadar
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Yazı rengi, arka plan resmine göre ayarlayabilirsiniz
    overflow: 'hidden'
  };
  return (
    <>
     <div style={backgroundStyle}>
        <img src="https://www.meram.bel.tr/upload/medya/baskan_12.png" className="img-fluid" id='major' alt="major"></img>

        <h1>Meram Belediyesi</h1>
        <p>Sizler İçin Hizmet Vermekteyiz</p>
      </div>
      <div className='container1'>
        <div>
          <h1 style={{ margin: "50px" }}>
            Birlikte Yönetiyoruz
          </h1>
          <p id='p1'>
            Meram Belediyesi: Halkla Birlikte Yönetimin İncisi

            Kent yönetiminde halkın katılımı ve etkileşimi, şehirlerin sürdürülebilirliği ve yaşanabilirliği açısından kritik bir rol oynamaktadır. Meram Belediyesi, bu önemli gerçeği göz önünde bulundurarak halkla birlikte yönetim anlayışını benimseyen, katılımcı ve şeffaf bir yönetim modeli izleyen bir öncüdür.

            Katılımcı Karar Süreçleri:

            Meram Belediyesi, karar alma süreçlerinde halkın etkin bir şekilde yer almasını sağlamak adına çeşitli mekanizmalar oluşturmuştur. Belediye, düzenli olarak yapılan mahalle toplantıları, kamuoyu anketleri ve çeşitli katılım platformları aracılığıyla, ilçe sakinlerinin fikirlerini, önerilerini ve endişelerini dinleyerek karar süreçlerine dahil etmektedir. Bu sayede, alınan kararlar daha geniş bir perspektife dayanır ve toplumun çeşitli kesimlerinin ihtiyaçlarına daha duyarlı bir şekilde yanıt verir.

            Şeffaf İletişim:

            Halkla birlikte yönetimde şeffaflık, güvenin temelidir. Meram Belediyesi, şeffaf bir iletişim politikası izleyerek, vatandaşlara belediye faaliyetleri, bütçe kullanımı ve projeler hakkında açık ve anlaşılır bilgiler sunar. Belediye internet sitesi, sosyal medya hesapları ve düzenli olarak yayınlanan raporlar aracılığıyla halk, belediye çalışmalarını yakından takip edebilir ve katkıda bulunabilir. </p>
        </div>
      </div>
    </>
  )
}

export default Background