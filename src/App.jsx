import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="https://www.meram.bel.tr/" id="navbar">AnaSayfa <span className="sr-only"></span></a>
            </li>
            <li className="nav-item" id="navbar">
              <a className="nav-link" href="https://www.meram.bel.tr/">Projelerimiz</a>
            </li>
            <a className="navbar-brand" href="https://www.meram.bel.tr/">
              <img src="https://www.meram.bel.tr/assets/img/logo.svg" width="75" height="75" className="d-inline-block align-top" alt="logo" /></a>
            <li className="nav-item" id="navbar">
              <a className="nav-link" href="https://www.meram.bel.tr/">Hizmetlerimiz</a>
            </li>
            <li className="nav-item" id="navbar">
              <a className="nav-link" href="https://www.meram.bel.tr/">Hakkımızda</a>
            </li>
          </ul>
        </div>
      </nav>
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

      <h1 style={{ margin: "50px" }}>Bazı Projelerimiz</h1>
      <div className="container text-center">
        <div className="row row-cols-4">
          <div className="col">
            <h3>10 Adet Açık Halı Saha Yapımı</h3>
            <p>Meram İlçesinde bulunan Okullara 5 Adet 15x27 ile 5 Adet 19x35 ölçülerinde toplamda 10 adet açık halı saha yapılarak Okul Yönetimlerinin hizmetine sunulmuştur.
            </p>
          </div>
          <div className="col">
            <h3>6 Adet Açık Halı Saha Yapılması</h3>
            <p>Alpaslan, Çarıklar, Kavak, Hatunsaray, Yeşiltekke ve Aşkan Mahallesine Açık Halı Saha Yapılması
            </p>
          </div>
          <div className="col">
            <h3>Tantavi Kültür ve Sanat Merkezi
            </h3>
            <p>İnşaat alanı;1422 m² Arsa alanı; 1046,96 m² Kat Adedi; B+Z+Asma Kat Tesiste, çok amaçlı salon ve kafeterya mevcuttur
            </p>
          </div>
          <div className="col">
            <h3>Yeniyol Trafik Parkı Çalışması

            </h3>
            <p>Revize çalışmasına 01.06.2020 tarihinde başlamış olup, 5026 m² proje alanı içerisinde 12 adet kameriye mevsimlik bitki dikimi ile peyzaj çalışması tamamlanmıştır.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="card" style={{display: "flex",justifyContent:"center",alignItems:"center",width: "18rem"}}>
            <img src="https://fastly.picsum.photos/id/445/200/300.jpg?hmac=7dfJBQTfK8boCS5_EXpFW8SC_8VKMgDw5yFInpEee4s" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text"> content.</p>
              <a href="#" className="btn btn-primary">Bilgi..</a>
            </div>
            </div> */}
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
      <h1>Çalışmalarımız</h1>
      <div className='col-sm'>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="p-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="at.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Kültürel Etkinlikler:</h5>
                    <p className="card-text">Meram Belediyesi, kültür ve sanatın gelişimine önem vererek, düzenlediği etkinliklerle ilçe sakinlerine zengin bir kültür atmosferi sunmaktadır. Konserler, tiyatro oyunları, sergiler ve film gösterimleri gibi etkinliklerle kültürel bir alanda çeşitlilik sağlanırken, yerel sanatçılara da destek verilmektedir.</p>
                    <a href="https://www.meram.bel.tr/" className="btn btn-warning text-dark">Bilgi..</a>
                  </div>
                </div></div>
            </div>
            <div className="col">
              <div className="p-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="at.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Spor Etkinlikleri:</h5>
                    <p className="card-text">Sağlıklı yaşam ve toplumsal birlikteliği desteklemek amacıyla düzenlenen spor etkinlikleri, Meram Belediyesi nin sosyal hizmet anlayışının bir parçasını oluşturuyor. Koşu yarışmaları, futbol turnuvaları ve spor günleri, ilçe sakinlerini spora teşvik ederek hem fiziksel hem de sosyal bir etkileşim yaratıyor.</p>
                    <a href="https://www.meram.bel.tr/" className="btn btn-warning text-dark">Bilgi..</a>
                  </div>
                </div></div>
            </div>
            <div className="col">
              <div className="p-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="at.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Eğitim ve Seminerler:
                    </h5>
                    <p className="card-text">Meram Belediyesi, sadece eğlence odaklı etkinliklerle değil, aynı zamanda bilgi paylaşımını teşvik eden etkinliklerle de dikkat çekiyor. Çeşitli konularda düzenlenen seminerler, atölye çalışmaları ve eğitim programları, ilçe sakinlerine yeni bilgiler kazandırarak toplumsal bilinci artırıyor.</p>
                    <a href="https://www.meram.bel.tr/" className="btn btn-warning text-dark">Bilgi..</a>
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className='text-center p-3 ' style={{ backgroundColor: '#F8F4EC' }}>
        © 2020 Copyright:&nbsp;
        <a className='text-gray' href='https://www.meram.bel.tr/'>
          Meram Belediyesi
        </a>
      </div>
    </>
  )
}

export default App
