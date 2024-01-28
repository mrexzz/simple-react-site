import React from 'react'


function Tevazu() {
    const backgroundStyle = {
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2012/11/06/23/28/minaret-64783_1280.jpg")',
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
     <div className="overflow-hidden">
        <div className="row" style={{ marginTop: "10vh", marginBottom: "10vh" }}>
          <div className="col">
            <div style={backgroundStyle}></div>
          </div>
          <div className="col">
            <h1>Tevazu,Gayret Ve Sabırla</h1>
            <p>
              Hizmet Çeşitliliği ve Kalitesi:

              Meram Belediyesi, geniş bir hizmet yelpazesi sunarak kentin her alanına dokunan bir rol üstlenmiştir. Temizlik hizmetlerinden park düzenlemelerine, alt yapı çalışmalarından kültürel etkinliklere kadar birçok alanda etkin ve başarılı hizmetler sunmaktadır. Yolların bakımı, çevre düzenlemeleri ve yeşil alanların artırılması gibi konularda yapılan çalışmalar, ilçenin genel estetiğini ve yaşam kalitesini önemli ölçüde artırmıştır.

              Teknoloji ve İnovasyon:

              Meram Belediyesi, çağın gereksinimlerine uyum sağlamak adına teknolojiyi etkin bir şekilde kullanmaktadır. Online hizmetler, akıllı şehir uygulamaları ve dijital platformlar aracılığıyla vatandaşlarla etkileşimi güçlendiren belediye, şeffaflık ve katılımcılığı desteklemektedir.

              Çevre Duyarlılığı:

              Meram Belediyesi, çevre konusundaki sorumluluklarını yerine getirme adına çeşitli projeleri hayata geçirmiştir. Atık yönetimi, enerji verimliliği ve yeşil alanların artırılması gibi konularda sürdürülebilirlik ilkesine sadık kalarak, gelecek nesillere daha yaşanabilir bir kent bırakma amacını taşımaktadır.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tevazu