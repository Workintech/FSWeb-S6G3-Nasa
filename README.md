# Gün Projesi: Component useEffect - NASA APOD

Bu iki aşamalı bir proje olacaktır.
Bu projede NASA API yi kullanarak "Astronomy Photo Of The Day" (Günün Astronomi Fotosu) nu çağıracaksın. Önce datayı çağıracaksın, arayüzünüzde kullanmak üzere bu data parçalarını kullanarak bir kaç bileşen oluşturacaksın. Projenin ikinci günün de de ([Gelişmiş Görselleştirme Teknikleri](https://github.com/Workintech/FSWeb-S6G4-Nasa-II/blob/main/README.md)), uygulamanın stillerini yeniden elden geçireceksin. Bunu yaparken tekrar olması için, standart CSS özellikleriyle, [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) gibi yeteneklere odaklanarak ilerleyebilirsin.

## Talimatlar

---

Bu talimatları dikkatlice okuyun. Sizden neler beklendiğini iyice anladıktan sonra uygulamaya başlayın.

## Giriş

Bu projede, NASA günün fotoğrafını göstermek için bir uygulama geliştireceksin.

- Bu gerçekten eğlenceli bir proje ve bitirdiğinizde ailenize ve arkadaşlarınıza gösterebileceğiniz bir proje.
- Sıfırdan başlayacak ve tüm uygulamayı oluşturacaksın.
- Bu proje için izlemeniz gereken herhangi bir tasarım spesifikasyonunuz yok, bu nedenle önce temel bir çerçeve oluşturarak başlamak isteyebilirsin. Başlangıçta basit bir çerçeve oluşturun, çünkü NASA'dan hangi verileri alacağını bilmiyorsun.
- Verileri çektiğinde, beklediğinizden daha fazlası veya beklediğinden daha azı olabilir, dolayısıyla tasarım planların değişebilir. Bu tamamen iyi ve çok normal. Sadece uygun ayarlamaları yap ve ilerle!

## Talimatlar

### Görev 1: Proje Kurulumu

Bu proje, create-react-app (CRA) kullanılarak bir araya getirildi. Bu projenin çalışması için CRA'yı kurmanız gerekmeyecek. Projeyi uygun bağımlılıklarla kurmak için aşağıdaki adımları izleyin.

- [ ] Projeyi forklayarak bir kopyasını oluşturun.
- [ ] Terminalden klonlayın
- [ ] `npm install` proje bağımlılıklarını indirin
- [ ] `npm start` komutuyla çalıştırın
- [ ] Push commits: `git push origin main`.

### Görev 2: MUÜ

**Planlama**

- [ ] Eğer istersen, tasarıma uğraşmadan, basit bir taslak oluşturabilirsin. (kaynak ve örnekler için: ["simple wireframes"](https://www.google.com/search?q=simple+wireframes&tbm=isch)). **Bir kalem ve kağıt, planlamaya başlamanın en hızlı yoludur.**
- [ ] Aklında bir tasarım planı oluşturduğunda, tek tek bileşenlere ayır.
- [ ] Hangi bileşenlerin stateleri tutacağını, her birinin hangi veriler için hangi proplara ihtiyaç duyduğunu (varsa) ve verileri nereden alacağını planla.
- [ ] Şimdi koda geçme zamanı!

**Dosya yapısı**

- [ ] Planladığın bileşenlere yapısal bir gözle de bak. Her bileşen için ihtiyacın olan klasörleri ve dosyaları oluştur.
- [ ] İlk önce statik HTML ile başlayıp, içerikteki dinamik datayı istersen statik bırak. Bunları axios gerçekten başlamadan önce ekranda nasıl göreceğini planla, sonra API'den alarak ilerleyebilirsin.

**Verileri Çekme**

- [ ] `App.js` (veya her nerede istersen), NASA'dan alacağın verileri bir state'e ekle.
- [ ] API çağrısını işlemek için, bir kez çalışan useEffect hook ekle.
- [ ] [NASA APOD API docs](https://api.nasa.gov/#apod) NASA APOD API dökümanlarına git, dökümanları okuyarak API çağrısını nasıl oluşturacağını öğren.
- [ ] Bir API keye ihtiyacın başta _yok_. Ancak, API kullanma sınırlarını aşarsan bir API keye ihtiyacın olabilir.
- [ ] Koda geçmeden önce [Postman](https://www.postman.com/downloads/) bilgisayarına indirip, bağlantıları, ve gelen yanıtları test edebilirsin.
- [ ] Dökümanlarda anlatılan API uç noktasından(endpoint) `axios` kullanarak verileri çek.
- [ ] `.then()` metodunuzda `console.log` ile çekilen verinin içeriğini iyice incele. 😃
- [ ] Verinizi state e eklemeden önce, effect hookunuzun peşinde bir dizi olduğuna emin olun (muhtemelen boş, çünkü bu efektin herhangi bir state/prop ile senkronize edilmesini istemiyoruz), aksi halde **sonsuz bir döngü başlatırsınız ve DEMO_KEY'in API hız limitlerini aşarsınız ve gerçek bir API_KEY kullanmanız gerekir.**

DEMO KEY kullanım limitleri:

> Saatlik Limit: Her IP her saat için 30 request atabilir
> Günlük Limit: Her IP her gün yalnızca 50 request atabilir

_Not: eğer photo url bir fotoğraf değilse, React applicationında bir video nasıl gösterilir kendiniz öğrenmeniz gerekli, YA DA aynı uç noktadan farklı tarihli bir APOD çekebilirsin, sorgunuza şu şekilde eklemen gerekli: `&date=2012-03-14`_

**Veriyi State'e ekleme**

- [ ] Aramayı doğru bir şekilde yaptıktan ve verileri bir değişkene kaydettikten sonra, verileri oluşturduğunuz state'e ekleyin.

**Veriyi Görüntüleme**
Şimdi diğer bileşenlerinizi yapma zamanı. Kullanıcı arabiriminizi(UI) oluşturun ve ardından DOM'da oluşturabilmen için verileri props aracılığıyla alt bileşenlerine ilet.

#### _MUÜ (MVP) Gereklilikleri:_

- [ ] Bileşen eklendiğinde APOD verisini çekmek için useEffect hooku kullan.
- [ ] Kullanıcı arabiriminizi(UI) oluşturmak için basitçe bir araya getirilmiş farklı bileşenlerde APOD verilerini görüntüle.

#### Pro İpuçları

- Verilerinin çağırılması tamamlanmadan bileşenlerinin nesne özelliklerine erişmeye çalıştığı bir hatayla karşılaşabilirsin. - bknz. `Cannot read property 'url' of undefined`. Bu, bir nesne olmasını beklerken, props olarak ilettiğin verilerin tanımsız olduğu anlamına gelir. Bunu düzeltmek için state nesnenden veri okuyacak herhangi bir bileşenine basitçe şöyle bir şey ekleyebilirsin:

```js
// Veriler alınırken bir yükleme mesajı görüntüle
if (!props.photoOfTheDay) return <h3>Yükleniyor...</h3>;

// Veriler alındıktan sonra bileşeninizi normal şekilde görüntüleyin
return {
  /* JSX'leriniz buraya */
};
```

- API dökümanlarını dikkatlice okuyun. Bir geliştirici olarak birçok teknik belgeyi okuyacaksın, bu yüzden bunları anlamaya çalışmak için bu proje güzel bir pratik olacak.

### Görev 3: Ekler

MVP'ye ulaşılana ve son bir commit yapılana kadar ek görevleri denemeyin...

- [ ] Opsiyonel bir `date` parametresi var dikkat ettin mi? Başka tarihe ait APOD'u çekmek için URL'de bunu şu şekilde tanımlayabilirsin `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`. Başka tarihe ait APOD'ları görebilmek için bir dropdown ekleyin. Bu biraz zahmetli olacak, ancak uygulamanda biraz daha karmaşık mantık ve etkileşimden geçmek harika bir alıştırma olacak. Bu aynı zamanda çok yaygın bir kullanım türüdür, bu yüzden bunu denemen senin için faydalı olur
- [ ] Aynı web sitesinde listelenen NASA'nın diğer API'lerinden birini kullanan başka bir uygulama yapın

---

## Bölüm II (Yarının Projesi) - [Gelişmiş Görselleştirme Teknikleri](https://github.com/Workintech/FSWeb-S6G4-Nasa-II/blob/main/README.md)
