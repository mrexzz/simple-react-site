import React from 'react'

function Card() {
    return (
        <>
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
                                    <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/11/19/17/20/athlete-1840437_1280.jpg" alt="Card image cap" />
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
                                    <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/03/27/13/17/notebook-2178656_960_720.jpg" alt="Card image cap" />
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
        </>
    )
}

export default Card